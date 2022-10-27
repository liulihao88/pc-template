import Vue from "vue"
const Clipboard = require("clipboard")
// 1. 可拖拽的directive代码  el-drag-dialog
Vue.directive("el-drag-dialog", {
  bind(el, binding, vnode) {
    const dialogHeaderEl = el.querySelector(".el-dialog__header")
    const dragDom = el.querySelector(".el-dialog")
    dialogHeaderEl.style.cssText += ";cursor:move;"
    dragDom.style.cssText += ";top:0px;"

    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const getStyle = (function () {
      if (window.document.currentStyle) {
        return (dom, attr) => dom.currentStyle[attr]
      } else {
        return (dom, attr) => getComputedStyle(dom, false)[attr]
      }
    })()

    dialogHeaderEl.onmousedown = (e) => {
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      const dragDomWidth = dragDom.offsetWidth
      const dragDomHeight = dragDom.offsetHeight

      const screenWidth = document.body.clientWidth
      const screenHeight = document.body.clientHeight

      const minDragDomLeft = dragDom.offsetLeft
      const maxDragDomLeft = screenWidth - dragDom.offsetLeft - dragDomWidth

      const minDragDomTop = dragDom.offsetTop
      const maxDragDomTop = screenHeight - dragDom.offsetTop - dragDomHeight

      // 获取到的值带px 正则匹配替换
      let styL = getStyle(dragDom, "left")
      let styT = getStyle(dragDom, "top")

      if (styL.includes("%")) {
        styL = +document.body.clientWidth * (+styL.replace(/\%/g, "") / 100)
        styT = +document.body.clientHeight * (+styT.replace(/\%/g, "") / 100)
      } else {
        styL = +styL.replace(/\px/g, "")
        styT = +styT.replace(/\px/g, "")
      }

      document.onmousemove = function (e) {
        // 通过事件委托，计算移动的距离
        let left = e.clientX - disX
        let top = e.clientY - disY

        // 边界处理
        if (-left > minDragDomLeft) {
          left = -minDragDomLeft
        } else if (left > maxDragDomLeft) {
          left = maxDragDomLeft
        }

        if (-top > minDragDomTop) {
          top = -minDragDomTop
        } else if (top > maxDragDomTop) {
          top = maxDragDomTop
        }

        // 移动当前元素
        dragDom.style.cssText += `;left:${left + styL}px;top:${top + styT}px;`

        // emit onDrag event
        vnode.child.$emit("dragDialog")
      }

      document.onmouseup = function (e) {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  },
})

// 2.
// 全局注册clipboard

Vue.directive("clipboard", {
  bind(el, binding) {
    if (binding.arg === "success") {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === "error") {
      el._v_clipboard_error = binding.value
    } else {
      const clipboard = new Clipboard(el, {
        text() {
          return binding.value
        },
        action() {
          return binding.arg === "cut" ? "cut" : "copy"
        },
      })
      clipboard.on("success", (e) => {
        const callback = el._v_clipboard_success
        callback && callback(e) // eslint-disable-line
      })
      clipboard.on("error", (e) => {
        const callback = el._v_clipboard_error
        callback && callback(e) // eslint-disable-line
      })
      el._v_clipboard = clipboard
    }
  },
  update(el, binding) {
    if (binding.arg === "success") {
      el._v_clipboard_success = binding.value
    } else if (binding.arg === "error") {
      el._v_clipboard_error = binding.value
    } else {
      el._v_clipboard.text = function () {
        return binding.value
      }
      el._v_clipboard.action = function () {
        return binding.arg === "cut" ? "cut" : "copy"
      }
    }
  },
  unbind(el, binding) {
    if (binding.arg === "success") {
      delete el._v_clipboard_success
    } else if (binding.arg === "error") {
      delete el._v_clipboard_error
    } else {
      el._v_clipboard.destroy()
      delete el._v_clipboard
    }
  },
})

// 3. el-input自动聚焦

/**
 * 自动聚焦
 */
Vue.directive("focus", {
  // 获取光标在inserted中操作，此时元素已经插入到父节点了
  inserted(el) {
    el = el.nodeName === "INPUT" ? el : el.children[0]
    el.focus()
  },
  bind(el) {
    el = el.nodeName === "INPUT" ? el : el.children[0]
    el.focus()
  },
})

// 4. el-input价格
/**
 * @需求
 * 价格相关的input。默认居右显示，默认有placeholder请输入。聚焦后在左侧修改。 只允许输入最多2位小数。 输入完后失焦居右显示千分位数字。
 * @难点
 * 失焦后居右显示千分位数字。 v-model不支持filter, 所以本例子的思路是，新建一个input, 隐藏之前的input。 update钩子里也要写逻辑， 否则报错
 */

Vue.directive("price", {
  bind: function (el, { value = 2 }) {
    el = el.nodeName === "INPUT" ? el : el.children[0]
    el.placeholder = "请输入"
    el.style.textAlign = "right"
    var RegStr =
      value === 0
        ? `^[\\+\\-]?\\d+\\d{0,0}`
        : `^[\\+\\-]?\\d+\\.?\\d{0,${value}}`
    if (el.value === "") {
      el.value = "0.00"
    } else {
      el.value = Number(el.value).toFixed(2)
    }
    el.addEventListener("keyup", function () {
      el.value = el.value.match(new RegExp(RegStr, "g"))
      el.dispatchEvent(new Event("input"))
    })
    el.addEventListener("focus", function () {
      const newAddIpt = el.parentNode.querySelector(".thousand-ipt")
      if (newAddIpt) {
        el.parentNode.removeChild(newAddIpt)
      }
      el.style.textAlign = "left"
      el.style.opacity = 1
      el.style.position = ""
    })
    el.addEventListener("blur", function () {
      if (el.value === "") {
        el.value = "0.00"
      } else {
        el.value = Number(el.value).toFixed(2)
      }
      el.style.opacity = 0
      el.style.position = "absolute"
      el.dispatchEvent(new Event("input"))
      const newIpt = document.createElement("input") // 新建input节点
      newIpt.value = parseFloat(el.value)
        .toFixed(2)
        .replace(/\d(?=(?:\d{3})+\b)/g, `$&,`)
      newIpt.className = "el-input__inner thousand-ipt"
      newIpt.style.textAlign = "right"
      el.parentNode.appendChild(newIpt)
    })
  },
  update: function (el) {
    if (el.children[1] && el.children[1].value === undefined) {
      const newAddIpt = el.parentNode.querySelector(".thousand-ipt")
      if (newAddIpt) {
        el.removeChild(newAddIpt)
        el.children[0].style.textAlign = "left"
        el.children[0].style.opacity = 1
        el.children[0].style.position = ""
      }
    }
  },
})

/**
 * 5. copy dom
 */

Vue.directive("copy", {
  bind: function (el, { value }) {
    el.$value = value
    el.handler = () => {
      if (!el.$value) {
        // 值为空的时候，给出提示。可根据项目UI仔细设计
        return
      }
      // 动态创建 textarea 标签
      const textarea = document.createElement("textarea")
      // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
      textarea.readOnly = "readonly"
      textarea.style.position = "absolute"
      textarea.style.left = "-9999px"
      // 将要 copy 的值赋给 textarea 标签的 value 属性
      textarea.value = el.$value
      // 将 textarea 插入到 body 中
      document.body.appendChild(textarea)
      // 选中值并复制
      textarea.select()
      const result = document.execCommand("Copy")
      if (result) {
      }
      // document.body.removeChild(textarea)
    }
    // 绑定点击事件，就是所谓的一键 copy 啦
    el.addEventListener("click", el.handler)
  },
  // 当传进来的值更新的时候触发
  componentUpdated: function (el, { value }) {
    el.$value = value
  },
  // 指令与元素解绑的时候，移除事件绑定
  unbind: function (el) {
    el.removeEventListener("click", el.handler)
  },
})

Vue.directive("draggable", {
  inserted: function (el) {
    el.style.cursor = "move"
    el.onmousedown = function (e) {
      let disx = e.pageX - el.offsetLeft
      let disy = e.pageY - el.offsetTop
      document.onmousemove = function (e) {
        let x = e.pageX - disx
        let y = e.pageY - disy
        let maxX =
          document.body.clientWidth -
          parseInt(window.getComputedStyle(el).width)
        let maxY =
          document.body.clientHeight -
          parseInt(window.getComputedStyle(el).height)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }

        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }

        el.style.left = x + "px"
        el.style.top = y + "px"
      }
      document.onmouseup = function () {
        document.onmousemove = document.onmouseup = null
      }
    }
  },
})

Vue.directive("my-model", {
  inserted: function (el, ...a) {
    el.addEventListener("input", function () {})
  },
  update: function (el) {},
})

// 不太好用
Vue.directive("show-tips", {
  // el {element} 当前元素
  bind: function (el) {
    const curStyle = window.getComputedStyle(el, "") // 获取当前元素的style
    const textSpan = document.createElement("span") // 创建一个容器来记录文字的width
    // 设置新容器的字体样式，确保与当前需要隐藏的样式相同
    textSpan.style.fontSize = curStyle.fontSize
    textSpan.style.fontWeight = curStyle.fontWeight
    textSpan.style.fontFamily = curStyle.fontFamily
    // 将容器插入body，如果不插入，offsetWidth为0
    document.body.appendChild(textSpan)
    // 设置新容器的文字
    textSpan.innerHTML = el.innerText
    // 如果字体元素大于当前元素，则需要隐藏
    if (textSpan.offsetWidth > el.offsetWidth) {
      // 给当前元素设置超出隐藏
      el.style.overflow = "hidden"
      el.style.textOverflow = "ellipsis"
      el.style.whiteSpace = "nowrap"
      // 鼠标移入
      el.onmouseenter = function (e) {
        // 创建浮层元素并设置样式
        const vcTooltipDom = document.createElement("div")
        vcTooltipDom.style.cssText = `
            max-width:400px;
            max-height: 400px;
            overflow: auto;
            position:absolute;
            top:${e.clientY + 5}px;
            left:${e.clientX}px;
            background: rgba(0, 0 , 0, .6);
            color:#fff;
            border-radius:5px;
            padding:10px;
            display:inline-block;
            font-size:12px;
            z-index:19999
          `
        // 设置id方便寻找
        vcTooltipDom.setAttribute("id", "vc-tooltip")
        // 将浮层插入到body中
        document.body.appendChild(vcTooltipDom)
        // 浮层中的文字
        document.getElementById("vc-tooltip").innerHTML = el.innerText
      }
      // 鼠标移出
      el.onmouseleave = function () {
        // 找到浮层元素并移出
        const vcTooltipDom = document.getElementById("vc-tooltip")
        vcTooltipDom && document.body.removeChild(vcTooltipDom)
      }
    }
    // 记得移除刚刚创建的记录文字的容器
    document.body.removeChild(textSpan)
  },
  // 指令与元素解绑时
  unbind() {
    // 找到浮层元素并移除
    const vcTooltipDom = document.getElementById("vc-tooltip")
    vcTooltipDom && document.body.removeChild(vcTooltipDom)
  },
})

/**
 * 给空文本加中划线-
 * undefined, null, '', '   ', 均显示'-', 否则显示原本的值
 * 如果给某一项或全局设置keepOrigin为true, 则保持原始值
 * @example v-empty="/"
 */
Vue.directive("empty", {
  // el {element} 当前元素
  bind: function (el, { value = "-" }) {
    let text = el.innerHTML
    let showText = value
    if (text === null) {
      el.innerHTML = showText
    }
    switch (typeof text) {
      case "undefined":
        el.innerHTML = showText
      case "string":
        if (text.trim().length === 0) {
          el.innerText = showText
        }
    }
  },
})

/**
 * v-format
 * v-format.toFixed(2)
 */

Vue.directive("format", {
  bind: function (el, binding, vnode) {
    function formatNumber(num) {
      num += ""
      let strs = num.split(".")
      let x1 = strs[0]
      let x2 = strs.length > 1 ? "." + strs[1] : ""
      var rgx = /(\d+)(\d{3})/
      while (rgx.test(x1)) {
        x1 = x1.replace(rgx, "$1" + "," + "$2")
      }
      return x1 + x2
    }
    const { modifiers } = binding
    let value = el.innerHTML
    if (!value) return
    // 如果是数字执行下面的操作.
    if (!isNaN(parseFloat(value))) {
      let formatValue = value
      if (modifiers.toFixed) {
        value = parseFloat(value)
        formatValue = value.toFixed(binding.value || 2)
      }
      formatValue = formatNumber(formatValue)
      el.innerText = formatValue
    }
  },
})

// 防抖
Vue.directive("debounce", {
  bind: function (el, binding) {
    let clickFlag = false
    let timer = null
    el.addEventListener("click", () => {
      if (!clickFlag) {
        binding.value()
      }
      clickFlag = true
      timer && clearTimeout(timer)
      timer = setTimeout(() => {
        clickFlag = false
      }, 1000)
    })
  },
})
