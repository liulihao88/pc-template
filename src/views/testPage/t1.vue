<template>
  <div v-water  class="" style="height: 1000px;">
    <kd-dev sub-title="testPage/t1.vue" type="top"></kd-dev>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <div ref="cc" >{{ name }}</div>
    <t-2 @test="changeName"></t-2>
    <t-2 @test="changeName"></t-2>
    <t-2 @test="changeName"></t-2>
  </div>
</template>

<script>
import T2 from "./t2.vue";
export default {
  name: "T1",
  components: { T2 },
  props: {},
  data() {
    return {
      t1: "",
      name: "aaa",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.init();
  },
  mounted() {
    this.$refs.cc.innerHTML = '我想啥你懂吗'
  },
  methods: {
    changeName() {
      // this.name = "凌云志";
      this.$Alert.info({ content: '我是提示信息 1' })
      this.$Alert.info({ content: '我是提示信息 2', duration: 3 })
    },
    init() {},
  },
};
</script>
<style scoped lang="scss"></style>
