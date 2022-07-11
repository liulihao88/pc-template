<template>
  <div>
    <el-form
      ref="formRef"
      :model="form"
      :rules="rules"
    >
      <el-form-item
        label="所属系统"
        prop="system"
      >
        <gSelect
          v-model="form.system"
          :options="systemOptions"
        />
      </el-form-item>
      <el-form-item
        label="字典编码"
        prop="code"
      >
        <gInput v-model="form.code"></gInput>
      </el-form-item>
      <el-form-item
        label="输入英文"
        prop="dictKey"
      >
        <gInput v-model="form.dictKey"></gInput>
      </el-form-item>
      <el-form-item
        label="输入中文"
        prop="dictValue"
      >
        <gInput v-model="form.dictValue"></gInput>
      </el-form-item>
    </el-form>

    <el-button @click="submit">测试</el-button>
  </div>
</template>

<script>
export default {
  name: "ValidateForm",
  props: {},
  data() {
    return {
      form: {},
      rules: {
        system: [this.mChangeRequired()],
        code: [this.mBlurRequired()],
        dictKey: [this.mBlurRequired(), this.mValidateName(), ],
        dictValue: [this.mBlurRequired(),this.mValidateChinese()],
      },
      systemOptions: [
        { value: 1, label: 'andy' },
        { value: 2, label: 'andy2' },
      ]
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    validateNameCh(){},
    submit() {
      this.$refs.formRef.validate((valid) => {
        if (valid) {
          $toast('成功')
        } else {
          $toast('失败')
        }
      });
    },
  }
}
</script>
<style scoped lang='scss'>
</style>
