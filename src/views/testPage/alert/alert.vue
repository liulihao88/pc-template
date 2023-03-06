<template>
  <div class="alert">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
  </div>
</template>

<script>
let seed = 0;

function getUuid() {
  return "alert_" + seed++;
}

// JS 调⽤ Alert 的⼀个⽅法 add，并 将 content 和 duration 传⼊进来：

export default {
  data() {
    //   通知可以是多个，我们⽤⼀个数组 notices 来管理每条通知
    return { notices: [] };
  },

  //   在 add ⽅法中，给每⼀条传进来的提示数据，加了⼀个不重复的 name 字段来标识，并通过 setTimeout 创建了⼀个计时器，当到 达指定的 duration 持续时间后，调⽤ remove ⽅法，将对应 name 的那条提示信息找到，并从数组中移除。 由这个思路，Alert 组件就可以⽆限扩展，只要在 add ⽅法中传递 更多的参数，就能⽀持更复杂的组件，⽐如是否显示⼿动关闭按钮、 确定 / 取消按钮，甚⾄传⼊⼀个 Render 函数都可以，完成本例 后，

  methods: {
    add(notice) {
      const name = getUuid();

      let _notice = Object.assign({ name: name }, notice);

      this.notices.push(_notice);

      // 定时移除，单位：秒

      const duration = notice.duration;

      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },

    remove(name) {
      const notices = this.notices;

      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);

          break;
        }
      }
    },
  },
};
</script>

<style>
.alert {
  position: fixed;

  width: 100%;

  top: 16px;

  left: 0;

  text-align: center;

  pointer-events: none;
}

.alert-content {
  display: inline-block;

  padding: 8px 16px;

  background: #fff;

  border-radius: 3px;

  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);

  margin-bottom: 8px;
}
</style>
