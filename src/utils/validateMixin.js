export const validateMixin = {
  methods: {
    // 建议下拉框和输入框的校验, 全改为mRequired。 mBlurRequired和mChangeRequired废弃
    mBlurRequired(str = '请输入') {
      return { required: true, message: str, trigger: ['blur','change'] }
    },
    mChangeRequired(str = '请选择') {
      return { required: true, message: str, trigger: 'change' }
    },
    mNameLength(str = '长度最大为64个字符') {
      return { min: 1, max: 64, message: str, trigger: ['blur','change'] }
    },
    // 通用
    // 校验英文
    mValidateName(errorInfo = '请输入支持英文、下划线、数字64个字符内名称') {
      const validator = (rule, value, callback) => {
        // /^[0-9a-zA-Z_\-\.\u4e00-\u9fa5]{1,}$/
        // eslint-disable-next-line
        let validFlag = /^[0-9a-zA-Z_\-]{1,}$/.test(value);
        console.log(`44444***** validFlag ***** 21行 ~/kj/qiankun-fe/main/src/share/mixin/validateMixin.js  11:53:59`);
        console.log(validFlag);
        if (!validFlag) {
          callback(new Error(errorInfo));
        } else {
          callback();
        }
      }
      return { validator, trigger: ['blur','change'] }
    },
    // 中文
    mValidateChinese(errorInfo = '请输入支持中文、英文、数字、下划线64个字符内名称') {
      const validator = (rule, value, callback) => {
        if (!value) {
          callback();
        } else {
          // eslint-disable-next-line
          let reg = /[`~!@#$%^&*()+=<>?:"{}|,\/;'\\[\]·！￥……（）——《》？：“”【】、；‘，。、\s]/g
          let validFlag = reg.test(value);
          if (validFlag) {
              callback(new Error(errorInfo));
          } else {
              callback();
          }
        }
      }
      return { validator, trigger: ['blur','change'] }
    },
    // 校验IP
    mValidateIP(errorInfo) {
      return (rule, value, callback) => {
        let validFlag = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/.test(value);
        if (!validFlag) {
          callback(new Error(errorInfo));
        } else {
          callback();
        }
      }
    },
    // 校验host
    mValidateHost(errorInfo) {
      return (rule, value, callback) => {
        let validFlag = /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?$/.test(value);
        if (!validFlag) {
          callback(new Error(errorInfo));
        } else {
          callback();
        }
      }
    },
    // 校验mobile
    mValidateMobile(errorInfo) {
      return (rule, value, callback) => {
        if (!value) {
          callback();
        } else {
          // let validFlag = /^[1][0-9]{10}$/.test(value);
          let validFlag = new RegExp("^[1][0-9]{10}$").test(value);
          if (!validFlag) {
            callback(new Error(errorInfo));
          } else {
            callback();
          }
        }
      }
    },

    // 验证电子邮箱格式
    mValidateEmail(errorInfo) {
      return (rule, value, callback) => {
        if (!value) {
          callback();
        } else {
          // let validFlag = /^[1][0-9]{10}$/.test(value);
          let validFlag = /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/.test(value);
          if (!validFlag) {
            callback(new Error(errorInfo));
          } else {
            callback();
          }
        }
      }
    }
  }
}
