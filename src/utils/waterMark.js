/********* src/directives/waterMark.ts ***********/

const directives = {
  mounted(el) {
    el.onload = () => {
      const { clientWidth, clientHeight, parentElement } = el;

      const waterMark = document.createElement("div");

      // 创建 waterMark 父元素
      waterMark.setAttribute("style", `width: ${clientWidth}px; height: ${clientHeight}px;`);
      waterMark.className = `water-mark`; // 方便自定义展示结果

      // 将 waterMark 插入到对应的位置
      parentElement?.insertBefore(waterMark, el);
      // 将图片元素移动到 waterMark 中
      waterMark.appendChild(el);
    };
  },
};

export default {
  name: "watermark",
  directives,
};
