<template>
  <div>
    t2
  </div>
</template>

<script>
import ccc from '@/views/exercise/e1.js'
console.log(`%c 666=>9行 src/views/testPage/t2.vue ccc `, 'background:#000;color:#bada55', ccc);

export default {
  name: "T2",
  components: {
     
  },
  props: {},
  data() {
    return {
       
    }
  },
  computed: {},
  watch: {},
  created() {
    this.init()
  },
  mounted() {},
  methods: {
    init(){
      let r1 = new ccc('a')
      console.log("r1", r1);
      let r2 = new ccc('b')
      console.log("r2", r2);
      
      
    }
  }
}
</script>
<style scoped lang="scss">

</style>
