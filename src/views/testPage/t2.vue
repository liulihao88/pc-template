<template>
  <div>
    <kd-dev sub-title="testPage/t2.vue" type="top"></kd-dev>
    <div>ff</div>
    <div>ff</div>
    <div>ff</div>
    <div>ff</div>
    <div>ff</div>
    <el-button type="primary" @click="$listeners.test">测试97</el-button>
  </div>
</template>

<script>
export default {
  name: "T2",
  components: {},
  props: {},
  data() {
    return {
      t1: "",
    };
  },
  computed: {},
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {},
  },
};
</script>
<style scoped lang="scss"></style>
