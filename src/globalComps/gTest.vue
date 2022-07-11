<!--
* @描述
* 公共title组件。可以设置title,  可以设置左侧竖条颜色
* @使用方法
* <g-title t="4. 回到顶部"></g-title>  <g-title t="左侧粉色" style="--lc: pink"/>
* 
<g-title
  t="测试哈"
  class="aa"
  ref="titleRef"
  cc="cc"
  borderBottom
  style="--lc: pink;"
  :customStyle="myStyle"
></g-title>
* @LastEditTime: 最后更新时间
* 2021-10-30
-->
<template>
  <div
    v-if="title || t"
    class="bb"
  >
    <p
      class="title"
      :class="{'has-border':borderBottom, cc}"
      :style="[{color: color}, customStyle, {transform: 'rotate(calc(var(--ht) * 1deg))'}, setBorderRadius]"
      data-color="blue"
    >{{title || t}}</p>

    <div
      class="hh "
      style="background: blue"
    >哈哈</div>
  </div>
</template>
    
<script>
let cl = "yellow";
export default {
  name: "GTitle",
  props: {
    title: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '',
    },
    t: {
      type: String,
      default: ''
    },
    cc: {
      type: String,
      default: ''
    },
    other: {

    },
    customStyle: {
      type: Object,
      default: () => { },
    },
    borderBottom: {
      type: Boolean,
      default: false,
    },
    br: {
      type: String,
      default: '20',
    }
  },
  computed: {
    setBorderRadius() {
      let obj = {};
      // 这里可以根据var(--lc)得到父组件传入变量的值。 如果--lc没值， 就取第二个参数的值
      if (this.br) {
        obj = {
          borderRadius: this.br + 'px',
          borderTop: this.br + 'px solid var(--lc, yellow)',
          // transform: 'rotate(calc(var(--ht) * 1deg))',
        }
      }
      return obj;
    }
  },
};
</script>
<style scoped lang='scss'>
$dfColor: lightblue;
.title {
  width: 100%;
  padding-left: 22px;
  line-height: 28px;
  position: relative;
  margin: 20px 0;
  font-weight: 600;
  box-sizing: border-box;
  color: var(--cl, $dfColor); // 如果不传--cl。 默认使用第二个参数的变量
}
.hh {
  height: calc(var(--ht) * 1px);
  transform: rotate(calc(var(--ht) * 1deg));
}
.title::before {
  position: absolute;
  top: 3px;
  bottom: 0;
  left: 0;
  content: "";
  width: 6px;
  height: 22px;
  z-index: 1;
  background-color: var(--lc, $dfColor); // 左侧的竖条颜色
}
.has-border {
  border-bottom: 1px solid var(--lc, $dfColor);
}
.cc {
  margin: 100px;
}
</style>
