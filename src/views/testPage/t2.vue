<template>
  <div>
    <el-button @click="t1" type="primary">测试1</el-button>
    <el-button @click="t2" type="info">测试222</el-button>
  </div>
</template>

<script>
export default {
  name: "Test5",
  props: {},
  data() {
    return {
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
    },
    t2() {
      console.log("t2")
    },
  },
}
</script>
<style scoped lang="scss"></style>
