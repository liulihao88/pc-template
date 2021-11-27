<template>
  <div>
    <div>test1</div>
  </div>
</template>

<script>
export default {
  name: "Test1",
  props: {

  },
  data() {
    return {

    };
  },
  components: {

  },
  created() {
    console.log(this.deepClone(3))
    console.log(this.deepClone(null))
    console.log(this.deepClone(undefined))
    console.log(this.$pub.deepClone({ name: { age: null } }))
  },
  mounted() {

  },
  methods: {
    deepClone(source) {
      if (!source || typeof source !== 'object' || source === null) {
        return source
      }
    }
  }
};
</script>
<style scoped lang='scss'>
</style>
