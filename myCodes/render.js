export default {
  render(h) {
    return h("h1", {}, [h("span", {}, "这是一个span")]);
  },

  render(h) {
    return h("h1", {
      // 类名
      class: {
        test: true,
        "another-class": true,
      },
      // 样式
      style: {
        color: "red",
        fontSize: "100px",
      },
      // id
      attrs: {
        id: "test",
      },
      // 事件响应
      on: {
        click: this.xxx,
      },
    });
  },
};
