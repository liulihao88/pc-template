import { _ } from "core-js";
import "./instable";
import { Message } from "element-ui";
/**
 * 格式化时间为年月日时分秒的格式， 格式可以自定义。
 * ① 时间戳10位和13位都可以转换成格式化的日期
 * ② java8格式的日期和有效的日期都可以转换成定义的日期格式
 * @param {Date, string}  都有默认参数
 * @example
 * parseTime() // 2020-07-17 09:53:07
 * parseTime('2018-02-13T06:17') // 2018-02-13 06:17:00
 * parseTime('2020/03/02 06:02') // 2020-03-02 06:02:00
 * parseTime(1541927611000); //2018-11-11 17:13:21
 * parseTime(1541927611000, "{y}年{m}月{d}日 {h}时{m}分{s}秒"); // 2018年11月11日 17时11分31秒
 * parseTime(1541927611, "{y}/{m}/{d} {h}:{m}:{s}"); // 2018/11/11 17:11:31
 * parseTime(new Date()); //2018-11-11 17:13:21
 * parseTime(new Date().getTime()); //2018-11-11 17:13:21
 */
export function parseTime(
  time = new Date(),
  cFormat = "{y}-{m}-{d} {h}:{i}:{s}"
) {
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (("" + time).length === 10) time = parseInt(time) * 1000;
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };
  const time_str = cFormat.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key]; // Note: getDay() returns 0 on Sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][value];
    }
    if (result.length > 0 && value < 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  console.log(time_str);
  return time_str;
}

// 2. 获取十六进制随机颜色 #5f283d
export function $getRandomColor() {
  let res =
    "#" +
    (function (h) {
      return new Array(7 - h.length).join("0") + h;
    })(((Math.random() * 0x1000000) << 0).toString(16));
  console.log(res);
  return res;
}

// JS对象深度合并
export function deepMerge(target = {}, source = {}) {
  target = deepClone(target);
  if (typeof target !== "object" || typeof source !== "object") return false;
  for (var prop in source) {
    if (!source.hasOwnProperty(prop)) continue;
    if (prop in target) {
      if (typeof target[prop] !== "object") {
        target[prop] = source[prop];
      } else {
        if (typeof source[prop] !== "object") {
          target[prop] = source[prop];
        } else {
          if (target[prop].concat && source[prop].concat) {
            target[prop] = target[prop].concat(source[prop]);
          } else {
            target[prop] = deepMerge(target[prop], source[prop]);
          }
        }
      }
    } else {
      target[prop] = source[prop];
    }
  }
  return target;
}

// 深拷贝函数
export function deepClone(originValue) {
  // 如果是原始类型, 直接返回
  if (!$pub.isObject(originValue)) {
    return originValue;
  }
  // 如果是对象类型, 才需要创建对象
  let newObj = Array.isArray(originValue) ? [] : {};
  for (let key in originValue) {
    newObj[key] = deepClone(originValue[key]);
  }
  return newObj;
}

/**
 * 解决Vue Template模板中无法使用可选链的问题
 * @param obj
 * @param rest
 * @returns {*}
 */
export const optChaining = (obj, ...rest) => {
  let tmp = obj;
  for (let key in rest) {
    let name = rest[key];
    tmp = tmp?.[name];
  }
  return tmp || "";
};

/**
 * 生成随机字符串
 * @param {string} chars
 * @param {number} length
 * @returns string
 */
export function uuid(chars, length = 4) {
  chars = chars || "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; // 去除了一些容易有歧义的字母和数字
  let res = Math.random() // 生成随机数字
    .toString(36) // 转化成36进制: "0.ihtkybjh3t"
    .slice(-4);
  return res;
}

export function testName() {
  this.name = 123;
}

export function randomArr(length = 10, max = 100) {
  let newArr = [];
  for (let i = 0; i < length; i++) {
    let rdm = Math.floor(Math.random() * (max - 1) + 1);
    newArr.push(rdm);
  }
  return newArr;
}

export function repeatedly(times, fun) {
  return _.map(_.range(times), fun);
}

export const pingpong = (function () {
  var inner = 0;
  return {
    inc: function (n) {
      return (inner += n);
    },
    dec: function (n) {
      return (inner -= n);
    }
  };
})();

export function _toast(str) {
  console.log(
    "%c this ",
    "background-image:color:transparent;color:blue;font-size:2em"
  );
  console.log(this);
  this.$message(str);
}

// 给字符串补位
export function leftpad(str, len, ch) {
  str = String(str);
  var i = -1;
  if (!ch && ch !== 0) ch = " ";
  len = len - str.length;
  while (++i < len) {
    str = ch + str;
  }
  return str;
}

// 加0
export function addZero(str) {
  return leftpad(str, 2, "0");
}

/**
 * 深冻结
 * 冻结对象 Object.freeze(obj)。 但是这种办法只能冻结一层。如果有多层就不起作用。 比如对象内部有数组或对象就无效。 所以需要遍历去深度冻结对象
 * @param {*} obj 传入的对象参数
 * result 结果和传参一致
 */
export function deepFreeze(obj) {
  if (!Object.isFrozen(obj)) {
    Object.freeze(obj);
  }
  for (let key in obj) {
    if (!obj.hasOwnProperty(key) || !_.isObject(obj[key])) {
      continue;
    }
    this.deepFreeze(obj[key]);
  }
}

export function add() {
  const _args = [...arguments];
  function fn() {
    _args.push(...arguments);
    return fn;
  }
  fn.toString = function () {
    let res = _args.reduce((sum, cur) => sum + cur);
    console.log("33333<<<  res  >>>33333");
    console.log(res);
    return res;
  };
  console.log("22222<<<  fn  >>>22222");
  console.log(fn);
  return fn;
}

// 后台接口返回的大图片, 返回一个较小的图片
export function getSizeImage(imgUrl, size = 20) {
  return `${imgUrl}?param=${size}x${size}`;
}

// 全局的提示， 注册到全局 使用方法 $toast('成功提示', 's')
export function $toast(str, type = "s", otherObj) {
  let handleType = type;
  if (type === "s") {
    handleType = "success";
  } else if (type === "i") {
    handleType = "info";
  } else if (type === "e") {
    handleType = "error";
  } else if (type === "w") {
    handleType = "warning";
  }

  Message({
    message: str,
    type: handleType
  });
}

/**
 * 判断传入参数的类型
 * @param {*} val
 * judgeType(new RegExp()) regexp
 * judgeType(new Date()) date
 * judgeType([]) array
 * judgeType({}) object
 * judgeType(null) null
 */
export function judgeType(val) {
  if (typeof val === "object") {
    const objVal = Object.prototype.toString
      .call(val)
      .slice(8, -1)
      .toLowerCase();
    return objVal;
  } else {
    return typeof val;
  }
}

// export function log(str, val) {
//     if (typeof val === 'object') {
//         if (judgeType(val) === 'array' || judgeType(val) === 'object') {
//             console.log(`%c ${str}` + '', 'background:#000;color:#bada55', judgeType(val));
//             console.log(JSON.stringify(val, null, '\t'))
//         } else {
//             console.log(`%c ${str}` + '', 'background:#000;color:#bada55', judgeType(val), val);
//         }
//     } else {
//         console.log(`%c ${str}` + '', 'background:#000;color:#bada55', judgeType(val), val);
//     }
// }
export function log(str, val) {
  if (typeof val === "object") {
    if (judgeType(val) === "array" || judgeType(val) === "object") {
      console.log(
        `%c ${str}` + "",
        "background:#000;color:#bada55",
        judgeType(val)
      );
      console.log(JSON.stringify(val, null, "\t"));
    } else {
      console.log(
        `%c ${str}` + "",
        "background:#000;color:#bada55",
        judgeType(val),
        val
      );
    }
  } else {
    console.log(
      `%c ${str}` + "",
      "background:#000;color:#bada55",
      judgeType(val),
      val
    );
  }
}

// Function.prototype.before = function(beforefn) {
//     var __self = this;    // 保存原函数的引用
//     return function() {    // 返回包含了原函数和新函数的"代理"函数
//         beforefn.apply(this, arguments);
//         // 执行新函数，修正this
//         return __self.apply(this, arguments);
//         // 执行原函数
//     }
// };
// Function.prototype.after = function(afterfn) { var __self = this; return function() { var ret = __self.apply(this, arguments);
// afterfn.apply(this, arguments); return ret; } };

Function.prototype.before = function (beforefn) {
  let _self = this; // 保存原函数的引用
  // 返回包含了原函数和新函数的"代理"函数
  return function () {
    beforefn.apply(this, arguments);
    // 执行新函数, 修正this
    return _self.apply(this, arguments);
    // 执行原函数
  };
};

Function.prototype.after = function (afterfn) {
  let _self = this;
  return function () {
    let ret = _self.apply(this, arguments);
    afterfn.apply(this, arguments);
    return ret;
  };
};

// 使用
export function mergeFunc(str = 2) {
  let mid = function () {
    console.log(str);
  };
  mid = mid
    .before(function () {
      console.log(1);
    })
    .after(function () {
      console.log(3);
    })
    .after(function () {
      console.log(4);
    });
  return mid();
}

// 分装函数: 自动转化科里化过程
export function lhCurrying(fn) {
  function curryFn(...args) {
    // 两类操作:
    // 第一类操作: 继续返回一个新的函数, 继续接受参数
    // 第二类操作: 执行执行fn的函数
    if (args.length >= fn.length) {
      // 执行第二类
      return fn.apply(this, args);
    } else {
      // 执行第一类
      return function (...newArgs) {
        return curryFn.apply(this, args.concat(newArgs));
      };
    }
  }
}

/**
~/test/testProject/pc-template/src/utils
src/utils/gFunc.js
*/

/**
 * function object/array true
 * null和其他 => false
 */
export function isObject(value) {
  const valueType = typeof value;
  return value !== null && (valueType === "object" || valueType === "function");
}

