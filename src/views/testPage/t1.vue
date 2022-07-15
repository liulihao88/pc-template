<template>
  <div>
    <el-button
      @click="t1"
      type="primary"
    >测试1</el-button>
    <el-button
      @click="t2"
      type="info"
    >测试2233 dsadsa打2</el-button>
    <gForm :formItems="formItems" class="p-16" :value.sync="formData" @change="changeForm"></gForm>
  </div>
</template>

<script>
import { Stack } from '../../../saveCodes/coderwhy学习-原型链'
export default {
  name: "Test5",
  props: {},
  data() {
    return {
      formData: {
        username: 'aaaa',
        password: '',
      },
      formItems: [
        {
          title: 'username', 
          label: '用户名',
          value: 'username',
        },
        {
          title: 'password',
          label: '密码',
          value: 'password',
        },
        {
          label: '选择框',
          value: 'select',
          type: 'select',
          width: '200px',
          options: [{
            label: 'andy',
            value: 111,
          }, {
            label: '凌云',
            value: 222,
          }]
        },
        {
          label: '日期范围',
          value: 'dateRange',
        },
        {
          label: '日期范围',
          value: 'dateRange',
        },

      ],
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    this.t1()
  },
  mounted() { },
  methods: {
    t1() {
      var s = new Stack()
      s.push(20000)
      s.push(10)
      s.push(100)
      s.push(77)
      console.log(s)

      console.log(s.peek())

      console.log(s.isEmpty(), s.size())

      console.log(s.toString())
      s.pop()
      s.pop()
      console.log(s.toString())
      console.log('t1');
    },
    t2() {
      console.log('t2');
    },
    changeForm(faVal){
      console.log(`obj打印***** faVal ***** 92行 ~/test/testProject/pc-template/src/views/testPage/t1.vue  10:46:30`);
      console.log(JSON.stringify(faVal, null, '\t'));
      console.log(`obj打印***** this.form ***** 94行 ~/test/testProject/pc-template/src/views/testPage/t1.vue  10:46:36`);
      console.log(JSON.stringify(this.formData, null, '\t'));
    }
  }
}
</script>
<style scoped lang='scss'>
</style>
