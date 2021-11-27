<template>
  <div>
    <div>test1</div>
    <div class='c-f c-b-b-20'>
      <div>哈哈</div>
      <div class="c-ft-50">哈哈</div>
      <div class="">哈哈</div>
    </div>
    <div class="c-red c-ft-60">你好</div>
    <div class="c-bg-cyan">你好</div>
    <div class="c-bg-blue">你好</div>
    <div class="c-fw-900">你好</div>
    <div class="c-fw-400">你好</div>
    <filtersPageVue></filtersPageVue>

    <div class="mixin">这是mixin</div>
  </div>
</template>
  
<script>
import filtersPageVue from '../componentsPage/filtersPage.vue';

export default {
  name: "HtmlPage",
  props: {

  },
  data() {
    return {

    };
  },
  components: {
    filtersPageVue
  },
  created() {

  },
  mounted() {

  },
  methods: {

  }
};
</script>
<style scoped lang='scss'>
.mixin {
  @include border-box(20px);
}
</style>
  