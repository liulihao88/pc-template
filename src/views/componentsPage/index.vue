<template>
  <div class="c-box">
    <g-title
      t="1. 单日期公共组件"
      style="--lc: blue"
    ></g-title>
    <g-title
      title="2. 双日期公共组件"
      style="--lc:green;"
    ></g-title>
    <g-title
      title="3. 可拖拽的dialog"
      style="--lc: green"
    ></g-title>
    <el-button
      type="primary"
      @click="isShow = true"
    >显示弹出框</el-button>
    <g-dialog
      :showDialog.sync="isShow"
      title="弹出框卡号"
      @confirm="confirmDialog"
    ></g-dialog>
    <g-title title="4. 回到顶部"></g-title>
    <g-title
      t="左侧粉色"
      style="--lc: pink"
    />
    <g-to-top></g-to-top>
  </div>
</template>

<script>
export default {
  name: "companentsPage",
  props: {

  },
  data() {
    return {
      simpleDate: '',
      doubleDate: '',
      isShow: false,
    };
  },
  created() {
    var array = [1];
    var other = _.flatten(_.concat(array, 2, [3], [[4]], [4,5,6]));
    // => [1]
  },
  mounted() {

  },
  methods: {
    confirmDialog() {
      
    }
  }
};
</script>
<style scoped lang='scss'>
.title {
  color: blue;
}
</style>
