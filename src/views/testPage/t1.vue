<template>
  <div>
    <el-button @click="t1" type="primary">测试1</el-button>
    <el-button @click="t2" type="info">测试2</el-button>
  </div>
</template>

<script>
export default {
  name: "T1",
  props: {},
  data() {
    return {
      num: 123,
      isShow: false,
      str: "hello world",
      arr: [11, 22, 33],
      obj: {
        name: "andy",
        age: 18,
        objArr: [{ chName: "凌云", height: 188 }],
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
      console.log(`%c 111=>35行 src/views/testPage/t1.vue this.add(10,20,30) `, 'background:#000;color:#bada55', this.add(10,20,30));
      
      console.log("t1")
      let curry = this.$pub.lhCurrying(this.add)
      console.log(`%c 222=>39行 src/views/testPage/t1.vue curry `, 'background:#000;color:#bada55', curry);
      
      curry(10)(20)(30)
    },
    t2() {
      console.log("t2")
    },
    add(a, b, c) {
      let res = a + b + c
      console.log(
        `%c 111=>3行 src/views/exercise/e1.js res `,
        "background:#000;color:#bada55",
        res
      )

      return res
    },
  },
}
</script>
<style scoped lang="scss"></style>
