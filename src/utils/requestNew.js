import axios from "axios";
import { merge } from "lodash";
import { Message, Loading } from "element-ui";
import qs from "qs";
import store from "@/store";

let messageDom;
let loading = {};

// 关于axios的一些默认配置项，调用接口时，按需要传递
const defaultConfig = {
  // axios支持的请求完整配置：http://www.axios-js.com/zh-cn/docs/#%E8%AF%B7%E6%B1%82%E9%85%8D%E7%BD%AE
  // url: '',
  // method: 'post',
  // headers: {},
  // params:{},
  // data:{},
  // 自定义参数，用于需要在拦截器中处理的全局性事件
  // neetToken:false,  // 是否需要在headers中加入token
  download: false, // 本次请求是否为文件下载
  fileName: "", // 下载的文件名
  fileType: "", // 下载的文件类型
  // needToken: true,          // 需要token，大部分接口是需要的，所以默认为false
  showLoading: false, // 是否在全局(页面级)显示loading
  // loadingText: '',          // loading中的文字提示，默认为空
  // loadingTime: 0,         // loading加载时长，单位ms；0表示请求成功或失败后动关闭
  original: false, // 是否在拦截器中返回服务服的原始数据（response.data）
  showError: true, // 是否把错误信息以message的形式显示在页面上
};

const instance = axios.create({
  baseURL: process.env.NODE_ENV === "development" ? "/gaea2" : "/gaea/api/v1",
  withCredentials: true,
  timeout: 30000,
});

// 请求拦截，使用sessionId方式控制权限，
instance.interceptors.request.use(
  (config) => {
    if (config.showLoading) {
      _showLoading(config.showLoading);
    }
    let pId = $pub.getStorage("curProject") || "";
    if (pId) {
      config.headers["projectId"] = pId;
    }
    let tenantId = $pub.getStorage("tenantId") || "";
    config.headers["tenantId"] = tenantId;
    // 对上传类参数，要转换为FormData形式
    if (config.headers["content-type"] === "multipart/form-data") {
      const formData = new FormData();
      for (let key in config.data) {
        formData.append(key, config.data[key]);
      }
      config.data = formData;
    }
    // 对application/x-www-form-urlencoded类型时参数处理
    if (
      config.headers["content-type"] === "application/x-www-form-urlencoded"
    ) {
      config.transformRequest = [
        function (data) {
          let result = "";
          for (let key in data) {
            result +=
              encodeURIComponent(key) +
              "=" +
              encodeURIComponent(data[key]) +
              "&";
          }
          return result.slice(0, result.length - 1);
        },
      ];
    }
    // get请求中的引用类型参数，基本没用，如果有，干死后端
    if (config.method === "get") {
      config.paramsSerializer = function (params) {
        if (params.queries) {
          return _handleQueries(params);
        } else {
          return qs.stringify(params, { arrayFormat: "repeat" });
        }
      };
    }
    return config;
  },
  function (error) {
    Message.error("请求超时！");
    console.error("请求拦截错误：" + error);
    return Promise.reject(error);
  }
);
// 响应拦截
instance.interceptors.response.use(
  (response) => {
   
    // TODO 这里应该判断状态码，待确定
    if (response?.data?.do === "redirect") {
      // 重定向，状态码应该是30X
      return (window.location.href = response.data.url);
    } else if (response.status === 200) {
      // 返回正常数据
      if (response.config.download || response.config.responseType === "blob")
        return download(response); // 文件下载
      const original = response.config.original;
      if (response.data?.code === 200 || response.data.success === true) {
        return original ? response.data : response.data.data;
      }
      // 业务码错误
      response.config.showError &&
        _errorText(response.data.errorMessage || "请求错误");
      return Promise.reject(response.data);
    } else {
      response.config.showError &&
        _errorText(response.data.errorMessage || "请求错误");
      return Promise.reject(response.data);
    }
  },
  (error) => {
   
    if (error.response && error.response.status === 401) {
      // TODO 可优化
      localStorage.clear();
      sessionStorage.clear();
      let enUrl = encodeURIComponent(window.location.href);
      window.location.href = `/gaea#/login?redirect=${enUrl}`;
      return;
    }
    const original = error.config?.original;
    error.response?.config?.showError &&
      _errorText(error.response?.data?.errorMessage || "请求错误");
    return original ? error.response?.data : Promise.reject(error.response);
  }
);

// 文件下载处理方法
function download(response) {
  let fileName = response.config.fileName || "导出文件";
  let fileType = response.config.fileType || "xlsx";
  try {
    const disposition = response.headers["content-disposition"];
    fileName = decodeURIComponent(disposition.split("filename=")[1]); //中文转码
    const dotIdx = fileName.lastIndexOf(".");
    if (dotIdx > -1) {
      fileType = fileName.substring(dotIdx + 1);
      fileName = fileName.substring(0, dotIdx);
    }
    downloadFile(fileName, fileType, response.data);
  } catch (error) {
    console.error("文件下载出错：" + error);
  }
}

// 接口报错信息提示
// TODO 使用同一提示框提示多个错误信息
function _errorText(errorMsg) {
  if (messageDom) messageDom.close();
  messageDom = Message({
    message: errorMsg,
    type: "error",
    duration: 2 * 1000,
  });
}
// export default function request(config) {
//   return instance(merge({}, defaultConfig, config));
// }

function request(config) {
  return instance(merge({}, defaultConfig, config));
}

// 处理get请求时传递复杂参数的场景，暂时不用
function _handleSearchQueries(queryArr) {
  let str = "";
  queryArr.forEach((v, i) => {
    for (let key in v) {
      str += `queries[${i}].${key}=${v[key]}&`;
    }
  });
  str = str.slice(0, -1);
  return encodeURI(str);
}

function _handleQueries(params) {
  let searchEncode = _handleSearchQueries(params.queries);
  delete params.queries;
  for (let key in params) {
    searchEncode += `&${key}=${params[key]}`;
  }
  if (searchEncode.startsWith("&")) {
    searchEncode = searchEncode.slice(1);
  }
  return searchEncode;
}

function _showLoading(loadingParams) {
  if (typeof loadingParams === "string") {
    _loadingOpen(loadingParams);
  } else if (Array.isArray(loadingParams)) {
    for (let i = 0; i < loadingParams.length; i++) {
      _loadingOpen(loadingParams[i]);
    }
  } else {
    throw new Error("showLoading must be string or array");
  }
}
function _hideLoading(loadingParams) {
  //   setTimeout(() => {
  if (typeof loadingParams === "string") {
    _loadingClose(loadingParams);
  } else if (Array.isArray(loadingParams)) {
    for (let i = 0; i < loadingParams.length; i++) {
      _loadingClose(loadingParams[i]);
    }
  } else {
    throw new Error("showLoading must be string or array");
  }
  //   }, 100);
}

function _loadingClose(loadingText) {
  if (
    ("" + loadingText).startsWith("#") ||
    ("" + loadingText).startsWith(".") ||
    loadingText === "body"
  ) {
    loading[loadingText].close();
    loading[loadingText] = null;
  } else {
    // 否则走vuex的逻辑
    let storeSplitStr = loadingText.split(".");
    if (storeSplitStr.length === 1) {
      store.state[loadingText] = false;
    } else if (storeSplitStr.length === 2) {
      store.state[storeSplitStr[0]][storeSplitStr[1]] = false;
    }
    // store.state[loadingText] = false;
  }
}

function _loadingOpen(loadingText) {
  // 如果是字符串, 且为id或body, 则走element组件
  if (
    ("" + loadingText).startsWith("#") ||
    ("" + loadingText).startsWith(".") ||
    loadingText === "body"
  ) {
    loading[loadingText] = Loading.service({
      lock: true,
      text: "Loading...",
      background: "rgba(255, 255, 255, 0.5)",
      target: loadingText || "body",
    });
  } else {
    let storeSplitStr = loadingText.split(".");
    if (storeSplitStr.length === 1) {
      store.state[loadingText] = true;
    } else if (storeSplitStr.length === 2) {
      store.state[storeSplitStr[0]][storeSplitStr[1]] = true;
    }
  }
}

/**
 * 文件导出到本地
 * @param fileName {string} 文件名
 * @param type {string} 文件类型
 * @param res {blob} 文件值，目前只支持blob类型
 */
function downloadFile(fileName, type, res) {
  const link = document.createElement("a"); // 创建一个隐藏的a标签
  link.href = window.URL.createObjectURL(
    new Blob([res], {
      type:
        type ||
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    })
  ); //使用blob接收文件流
  link.download = fileName; // 设置文件名：点名+时间戳+后缀
  link.click(); // 模拟点击，触发下载
  link.remove(); // 开始下载后移除a标签
  window.URL.revokeObjectURL(link.href); // 释放资源
}

class requestNew {
  constructor(bUrl) {
    this.bUrl = bUrl;
    console.log(`%c 111=>292行 src/utils/requestNew.js this.bUrl `, 'background:#000;color:#bada55', this.bUrl);
    
  }
  request(config) {
    console.log(`%c 222=>296行 src/utils/requestNew.js this.bUrl `, 'background:#000;color:#bada55', this.bUrl);
    
    console.log("config", config);
    console.log("defaultConfig", defaultConfig);
    let c = merge({baseUrl: this.bUrl}, defaultConfig, config)
    console.log(`318011***** c ***** 297行 src/utils/requestNew.js  `);
    console.log(JSON.stringify(c, null, '\t'));
    
    return instance(merge({}, defaultConfig, config));
  }
}

export default requestNew;
