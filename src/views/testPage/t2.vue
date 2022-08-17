<template>
  <div>
    <el-button @click="t1" type="primary">测试1</el-button>
    <el-button @click="t2" type="info">测试2</el-button>
    <kd-dialog :visible.sync="isShow" title="哈哈哈"></kd-dialog>
    <kdDialog :visible.sync="isShow" title="哈哈哈"></kdDialog>
    <kd-title title="andy"></kd-title>
    <!-- <kd-step :active="active" :steps="steps" /> -->
  </div>
</template>

<script>
export default {
  name: "Test5",
  props: {},
  data() {
    return {
      active: 1,
      steps: [{ name: "同步配置" }, { name: "读取配置" }, { name: "任务配置" }],
      isShow: true,
      num: 123,
      str: "hello world",
      arr: [11, 22, 33],
      obj: {
        name: "andy",
        age: 18,
      },
      date: new Date(),
    }
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    this.t1()
  },
  mounted() {},
  methods: {
    t1() {
      console.log("t1")
      this.isShow = true;
    },
    t2() {
      console.log("t2")
    },
  },
}
</script>
<style scoped lang="scss"></style>
