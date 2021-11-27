<template>
  <div class="c-box">
    <g-title title="1. 格式化日期 parseTime"></g-title>
    <g-title title="2. 获取十六进制随机颜色$getRandomColor"></g-title>
  </div>
</template>

<script>
export default {
  name: "JsFunc",
  props: {

  },
  data() {
    return {

    };
  },
  beforeCreate() {
    // this.init();
    // this.$pub.parseTime(1541927611000);
  },
  created() {
    // this.init();
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      // 转换年月日
      this.$pub.parseTime(1541927611000);
    }
  }
};
</script>
<style scoped lang='scss'>
</style>
