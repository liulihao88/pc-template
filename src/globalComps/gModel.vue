<template>
  <div>
    <input
      v-model="value"
      type="text"
    >
  </div>
</template>

<script>
export default {
  name: "GModel",
  props: {
    modelValue: String,
  },
//   emits: ["update:modelValue"],
  data() {
    return {

    };
  },
  computed: {
    value: {
      set(value) {
        this.$emit('update:modelValue', value);
      },
      get() {
        return this.modelValue
      }
    }
  },
  components: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
</style>
