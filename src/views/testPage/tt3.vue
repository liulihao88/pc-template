<template>
  <div>
    {{ value }}
    <input :value="val" @input="changeInput" />
    <el-button @click="changeInput" type="primary">测试214453</el-button>
    {{ modelValue }}
  </div>
</template>

<script>
export default {
  name: "Tt3",
  components: {},
  props: {
    value: {
      type: String,
      default: "",
    },
    emits: ["update:value"],
    modelValue: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      val: this.value
    };
  },
  computed: {},
  watch: {
    value(val) {
      console.log(
        `%c 333=>25行 src/views/testPage/tt3.vue val `,
        "background:#000;color:#bada55",
        val
      );
    },
  },
  created() {},
  mounted() {},
  methods: {
    changeInput(evt) {
      console.log(
        `%c 222=>30行 src/views/testPage/tt3.vue evt `,
        "background:#000;color:#bada55",
        evt
      );
      console.log(
        `%c 333=>31行 src/views/testPage/tt3.vue this.value `,
        "background:#000;color:#bada55",
        this.value
      );
      console.log(
        `%c 333=>49行 src/views/testPage/tt3.vue evt.target.value `,
        "background:#000;color:#bada55",
        evt.target.value
      );

      this.$emit("update:value", evt.target.value);
    },
  },
};
</script>
<style scoped lang="scss"></style>
