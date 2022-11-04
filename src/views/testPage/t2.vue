<template>
  <div>我是t2</div>
</template>

<script>
export default {
  name: "T2",
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.init()
  },
  mounted() {},
  methods: {
    init() {
      console.log(`%c 555=>21行 src/views/testPage/t2.vue _andy `, 'background:#000;color:#bada55', _andy);
      
      let str = "我最喜欢的书是《乱世佳人》和《安娜.卡列尼娜》;"
      let reg = /(《)(.*?)(》)/gi

      let res = str.replace(reg, (...a) => {
        console.log(
          `%c 111=>25行 src/views/testPage/t2.vue a `,
          "background:#000;color:#bada55",
          a
        )
        if (a[2]) {
          return a[2]
        }
      })

      console.log(
        `%c 111=>6行 src/views/exercise/e1.js res `,
        "background:#000;color:#bada55",
        res
      )
    },
  },
}
</script>
<style scoped lang="scss"></style>
