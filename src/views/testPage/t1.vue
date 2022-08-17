<template>
  <div class="box">
    <!-- background: #365edf; height: 24px; line-height: 24px; margin-top: 40px padding: 8px; font-size: 40px;-->
    <div class="bg-blue h3 lh3 mt5 p ft-40 d-ib w-322">哈哈1</div>
    <!-- height: 30%; width: 30%; margin-left: 30px; padding: 50px 0;-->
    <div class="h-30% w-20% m-l-30 p-tb-50 d-ib ac">哈哈2</div>
    <!-- color: #ffb51f; position: relative; top: 2px; left: 100px; font-weight: bold-->
    <div class="cl-yellow po-r t-2 l-100 bold o-h">哈哈3</div>
    <div class="f-ar f-wrap w-100%">
      <div class="f-2 cl-65 b-b-10">左边0.15透明度 border-bottom: 10px</div>
      <div class="f-1 o-4 b">我是右边0.4的透明度</div>
    </div>

    <div class="dd">我原本是黄色背景</div>
    <div class="aa">这里是style里的红色</div>
    <div class="bg-blue cl-green">我原本是绿色背景, 但是动态改为了红色</div>
    <el-button @click="changeColor" type="primary">随机改变颜色</el-button>
    <el-button @click="changeColor" type="info">用换肤改变颜色</el-button>
  </div>
</template>

<script>
export default {
  name: "T1",
  props: {},
  data() {
    return {
      age: {
        name: "a",
      },
    }
  },
  components: {},
  computed: {},
  watch: {},

  created() {
    this.init()
  },
  mounted() {},
  methods: {
    changeColor() {
      let cl = this.$pub.$getRandomColor()
      document.body.style.setProperty("--blue", cl)
    },
    init() {
      document.body.style.setProperty("--yellow", "pink")
      // document.body.style.setProperty("--blue", "red")
    },
  },
}
</script>
<style scoped lang="scss">
// .aa {
//   background: var(--red);
// }
// .box ::v-deep .el-button--info{
//   background: var(--blue);
// }
// .dd{
//   background: $blue;
// }
</style>
