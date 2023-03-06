// alert.js

import Notification from "./notification.js";

let messageInstance;

//  getMessageInstance 函数⽤来获取实例，它不会重复创建，如 果 messageInstance 已经存在，就直接返回了，只在第⼀次调⽤ Notification 的 newInstance 时来创建实例。

import {} from "@/views/testPage/alert/alert.js";
function getMessageInstance() {
  messageInstance = messageInstance || Notification.newInstance();
  return messageInstance;
}

function notice({ duration = 1.5, content = "" }) {
  let instance = getMessageInstance();
  instance.add({ content: content, duration: duration });
}

export default {
  info(options) {
    return notice(options);
  },
};

//  alert.js 对外提供了⼀个⽅法 info，如果需要各种显示效果，⽐如 成功的、失败的、警告的，可以在 info 下⾯提供更多的⽅法，⽐如 success、fail、warning 等，并传递不同参数让 Alert.vue 知道显 示哪种状态的图标。本例因为只有⼀个 info，事实上也可以省略 掉，直接导出⼀个默认的函数，这样在调⽤时，就不⽤ this.$Alert.info() 了，直接 this.$Alert()。
