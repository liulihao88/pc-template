<template>
  <div>
    <div class="bg-color">changeBody</div>
    <div class="c-tc2">你干哈</div>
    <el-button @click="changeBody">老大哥让换你丫就换啊</el-button>
  </div>
</template>

<script>
export default {
  name: "ChangeBody",
  props: {

  },
  data() {
    return {

    };
  },
  components: {

  },
  created() {

  },
  mounted() {

  },
  methods: {
    changeBody() {
        document.body.style.setProperty("--tc", "blue");
        document.body.style.setProperty("--tc2", "purple");
    },
  }
};
</script>
<style scoped lang='scss'>
.bg-color {
  color: var(--tc);
}
</style>
