<template>
  <div>
    <el-button @click="t1" type="primary">测试</el-button>
  </div>
</template>

<script>
export default {
  name: "SingleExample",
  props: {},
  data() {
    return {
      loginLayer: null,
    }
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    t1() {
      this.loginLayer = this.loginLayerHandler()
      console.log(
        `%c 111=>25行 src/views/componentsPage/singleExample.vue this.loginLayer. `,
        "background:#000;color:#bada55",
        this.loginLayer
      )

      this.loginLayer.style.display = "block"
    },
    loginLayerHandler() {
      if (!this.loginLayer) {
        let div = document.createElement("div")
        div.innerHTML = "我是浮窗"
        div.style.display = "none"
        div.style.width = "100px"
        div.style.height = "100px"
        div.style.position = "fixed"
        div.style.top = "20%"
        div.style.left = "20%"
        document.body.appendChild(div)
        return div
      } else {
        console.log(
          `*****<<<  哈哈  46行 ~/test/testProject/pc-template/src/views/componentsPage/singleExample.vue  16:01:58`
        )
        return this.loginLayer;
      }
    },
  },
}
</script>
<style scoped lang="scss"></style>
