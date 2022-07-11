<template>
  <div>
    <!--接口附表参数-->
    <el-row>
      <el-button
        style="margin:2% 3%;"
        type="primary"
        plain
        class="a_n"
        icon="el-icon-plus"
        size="mini"
        @click="addFrame"
      >新增</el-button>
      <el-form :model="form" ref="formRef">
        <div v-for="(item,index) in form.dataForm">
          <el-row>
            <el-col :span="10">
              <el-form-item
                label="中文名"
                :prop="`dataForm.${index}.csmc`"
                :rules="rules.csmc"
              >
                <el-input
                  v-model="item.csmc"
                  placeholder="请输入中文名"
                />
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10">
              <el-form-item
                label="参数名"
                :prop="`dataForm.${index}.csbm`"
                :rules="rules.csbm"
              >
                <el-input
                  v-model="item.csbm"
                  placeholder="请输入参数名"
                />
              </el-form-item>
            </el-col>
            <el-col :span="10">
              <el-form-item
                label="参数值"
                :prop="`dataForm.${index}.csz`"
                :rules="rules.csz"
              >
                <el-input
                  v-model="item.csz"
                  placeholder="请输入参数值"
                />
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>

    </el-row>

    <el-button @click="submit">提交</el-button>
  </div>
</template>

<script>
export default {
  name: "Test4",
  props: {},
  data() {
    return {
      // 表单参数
      form: {
        dataForm: [],
      },
      // 表单校验
      rules: {
        cslx: [
          { required: true, message: "参数类型不能为空", trigger: "change" }
        ],
        csmc: [
          { required: true, message: "中文名不能为空", trigger: "change" }
        ],
        csbm: [
          { required: true, pattern: /(^_([a-zA-Z0-9]_?)*$)|(^[a-zA-Z](_?[a-zA-Z0-9])*_?$)/, message: '格式不正确；提示：【首位可以是字母以及下划线。首位之后可以是字母，数字以及下划线。下划线后不能接下划线】', trigger: 'blur' }
          // { required: true, message: "参数名不能为空", trigger: "change" }
        ],
        csz: [
          { required: true, message: "参数值不能为空", trigger: "change" }
        ],
        sjylx: [
          { required: true, message: "数据源类型不能为空", trigger: "change" }
        ],
        sjy: [
          { required: true, message: "数据源不能为空", trigger: "change" }
        ],
        jkmc: [
          { required: true, message: "接口名称不能为空", trigger: "blur" }
        ],
        jkdz: [
          { required: true, message: "接口地址不能为空", trigger: "blur" }
        ],
      },
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    //添加
    addFrame() {
      var list = {
        csbm: null,
        csmc: null,
        cslx: null,
        csz: null,
        sfbt: 1,
      };
      this.form.dataForm.push(list);
    },
    //删除
    deletecsjh(index) {
      this.form.dataForm.splice(index, 1)
    },
    submit(){
      this.$refs.formRef.validate((valid)=>{
        if(valid){
          $toast('成功')
        }else{
          $toast('失败')
        }
      })
    },
  }
}
</script>
<style scoped lang='scss'>
</style>
