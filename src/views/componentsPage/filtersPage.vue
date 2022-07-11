<template>
  <div>
    <div>filtersPage</div>
    <div class=''>
      <div>哈哈</div>
      <div>哈哈</div>
      <div>哈哈</div>
      <div>{{val1 | addEmpty}}</div>
      <div>{{val2 | addEmpty}}</div>
      <div>{{val3 | addEmpty}}</div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FiltersPage",
  props: {

  },
  data() {
    return {
      val1: '',
      val2: false,
      val2: true,
      val2: [],
      val3: {},
      val3: 'andy'
    };
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
</style>
