<template>
  <div class="c-box">
    <g-title title="1. dialog可拖拽"></g-title>
    <el-button type="primary" @click="isShow = true">显示弹出框</el-button>
    <g-dialog
      :showDialog.sync="isShow"
      title="弹出框卡号"
      @confirm="confirmDialog"
    ></g-dialog>

    <g-title title="2. 复制文本内容"></g-title>
    <div class="app-container">
      <el-button
        v-clipboard="testVal"
        v-clipboard:success="clipboardSuccess"
        type="primary"
        icon="el-icon-document"
      >
        复制内容
      </el-button>
      <div v-clipboard="copyVal" v-clipboard:success="clipboardSuccess">
        {{ copyVal }}
      </div>
    </div>

    <g-title title="3. el-input自动聚焦"></g-title>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="iptVal" placeholder="哈哈哈" v-focus></el-input>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="6">
        <el-input v-model="iptVal2" placeholder="这里自动聚焦"></el-input>
      </el-col>
    </el-row>

    <g-title title="4. el-price处理价格问题"></g-title>
    <el-col :span="10">
      <el-input v-model="price" v-price placeholder="" clearable></el-input>
    </el-col>
  </div>
</template>

<script>
export default {
  name: "DirectivesPage",
  props: {},
  data() {
    return {
      testVal: "O(∩_∩)O哈哈~",
      copyVal: "复制的内容文本",
      isShow: false,
      iptVal: "",
      iptVal2: "",
      price: "128",
    }
  },
  created() {},
  mounted() {},
  methods: {
    clipboardSuccess(val) {
      this.$message({
        message: `内容(${val.text})复制成功`,
        type: "success",
      })
    },
    confirmDialog() {},
  },
}
</script>
<style scoped lang="scss"></style>
