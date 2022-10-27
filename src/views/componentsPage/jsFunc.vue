<template>
  <div class="c-box">
    <g-title title="11. 格式化日期 parseTime"></g-title>
    <g-title title="2. 获取十六进制随机颜色$getRandomColor"></g-title>
    <el-button @click="t1" type="primary">测试防抖</el-button>
  </div>
</template>

<script>
import debounce from "lodash/debounce" // 防抖函数
export default {
  name: "JsFunc",
  props: {},
  data() {
    return {}
  },
  beforeCreate() {
    // this.init();
    // this.$pub.parseTime(1541927611000);
  },
  created() {
    // this.init();
  },
  mounted() {
    this.init()
  },
  methods: {
    // 注意：不可使用箭头函数代替，如 fun: _.debounce( (e)=> {…},100},箭头函数会导致里面的this指向undefined
    t1: debounce(function (e) {
      this.init()
    }, 300),
    init() {
      // 转换年月日
      console.log(
        `***** 防抖  37行 ~/test/testProject/pc-template/src/views/componentsPage/jsFunc.vue  20:42:09`
      )
    },
  },
}
</script>
<style scoped lang="scss"></style>
