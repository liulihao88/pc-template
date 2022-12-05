// 返回true，表示无权限；返回false，表示有权限
mDisabled(sendStr, row = '') {
  // 行内按钮权限和全局按钮权限对应字段。
  const dict = {
    CREATE: 'create',
    UPDATE: 'edit',
    DELETE: 'del',
    CONFIG: 'config',
  };
  // 如果是走后台逻辑登录
  try {
    let nowPageMenuKey = '';
    if (this.$route && this.$route.meta) {
      nowPageMenuKey = this.$route.meta.menuKey;
    }
    // 如果当前路由没有menuKey, 那么按钮权限全部放开都可以点击
    if (!nowPageMenuKey) {
      return false;
    }
    const btnList = this.$route.meta.btnList || [];
    // 如果当前路由有menuKey且本地缓存中有权限控制。 过滤出按钮的权限
    let isDisabled = true;
    let rowDisabled = false;
    if (nowPageMenuKey) {
      if (btnList.length > 0) {
        btnList.forEach((val) => {
          if (val.action_mode === sendStr || val.code === sendStr) {
            isDisabled = false;
          }
        });
      }
    }
    if (row && row.permissionTypes) {
      let matchStr = dict[sendStr];
      rowDisabled = !row.permissionTypes.includes(matchStr);
    }
    return isDisabled || rowDisabled;
  } catch (error) {
    // 如果有错误， 按钮都不可点击
    console.error('pageMixin进入到catch错误', error);
    return true;
  }
},
/**
 * dom 加载完成，计算高度并发送给iframe接收
 * @param id
 */
mPostMessageHeight(id) {
  let newWindow = new Function('return window')();
  if (newWindow.parent) {
    let domH = document.querySelector(id).scrollHeight || 0; //获取自身高度
    newWindow.parent.postMessage(domH, '*');
  }
},
/**
 * 向iframe 发送 message
 * @param params
 */
mPostMessage(params) {
  let newWindow = new Function('return window')();
  if (newWindow.parent) {
    newWindow.parent.postMessage(params, '*');
  }
},
/**
 * 设置iframe 高度
 * @param event
 */
mSetIframeHeight(event) {
  document.querySelector('#kdIframe').style.height = event.data + 'px';
},
// 如果本地路由没有存menuKey返回空， 否则返回当前menuKey
mMenuKey() {
  if (!this.$route.meta || !this.$route.meta.menuKey) {
    return '';
  }
  return this.$route.meta.menuKey;
},

// 清空form表单的校验
mClearValidate(formRef = 'formRef') {
  if (this.$refs[formRef]) {
    this.$nextTick(() => {
      this.$refs[formRef].clearValidate();
    });
  }
},
// 根据传入的width, 返回处理后的width
mHandleWidth() {
  if (this.block) {
    return { width: '100%' };
  }
  if (!this.width) {
    return {};
  }
  if (typeof this.width === 'string' && (this.width.indexOf('px') !== -1 || this.width.indexOf('%') !== -1)) {
    return { width: this.width };
  }
  return { width: this.width + 'px' };
},
/**
 * 用于不写computed属性来展示删除, 移动个数
 * @param {*} str 要展示的字符串
 * @param {*} arr 要显示的数组长度. 如果为空数组, 则
 * @example
 * 删除相关, 如果selectArr为[], 显示`删除`; 如果selectArr长度为3, 显示`删除(3)`
 * {{ mBatchTitle('删除', selectArr) }}
 * :referenceText="mBatchTitle('删除', selectArr)"
 * {{mBatchTitle('删除', selectArr)}}
 */
mBatchTitle(str, arr = []) {
  if (Array.isArray(arr) && arr.length > 0) {
    return `${str}(${arr.length})`;
  }
  return str;
},
/**
 *
 * @param {*} str 要显示的最基础文本
 * @param {*} fileName 当前文件的文件名
 * @param {*} type 当为true或者'add'的时候为新增, 为edit或false的时候是编辑, 否则为基础文本
 * @param {*} otherParams 待开发
 * @example
 *  :title="mSetTitle('项目', 'project')" => 项目(project)
 *  :title="mSetTitle('项目', 'project', type)" => 新增项目(project)
 *  :title="mSetTitle('项目', 'project', type==='add')" => 新增项目(project)
 */
mSetTitle(str, fileName, type = '', otherParams = {}) {
  let devFile = '';
  if (process.env.NODE_ENV === 'development' && fileName) {
    devFile = `(${fileName})`;
  }
  if (type === 'add' || type === true) {
    return `新建${str}${devFile}`;
  } else if (type === 'edit' || type === false) {
    return `编辑${str}${devFile}`;
  }
  return `${str}${devFile}`;
},

/**
 * 验证表单是否可以提交
 * this.mValidForm()
 * this.mValidForm("formRef", {errorText: "不允许提交"})
 */
mValidForm(formName = 'formRef', { errorText = '验证未通过' } = {}) {
  return new Promise((resolve, reject) => {
    this.$refs[formName].validate((valid) => {
      if (valid) {
        resolve();
      } else {
        this.$pub.$toast(errorText, 'e');
        reject();
      }
    });
  });
},

