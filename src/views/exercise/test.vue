<template>
  <div>
    <kd-drawer
      ref="drawerRef"
      :title="mSetTitle('提示', 'test', type)"
      :visible.sync="isShow"
      @confirm="confirm"
    >
      <el-form ref="formRef" :model="form" :rules="rules">
        <el-form-item label="名称" prop="name">
          <kd-input v-model="form.name" />
        </el-form-item>
      </el-form>
    </kd-drawer>
  </div>
</template>

<script>
export default {
  name: "T3",
  components: {},
  props: {},
  data() {
    return {
      isShow: false,
      type: "add",
      form: {
        name: "",
      },
      originForm: {},
      rules: {
        name: [this.mBlurRequired()],
      },
    };
  },
  computed: {},
  watch: {},
  created() {
    this.originForm = this.$pub.deepClone(this.form);
  },
  mounted() {},
  methods: {
    isDev() {
      if (this.mIsDev) {
        this.form = {
          name: this.$pub.uuid(),
        };
      }
    },
    open(row) {
      if (row) {
        this.type = "edit";
        this.form = Object.assign(this.originForm, row);
      } else {
        this.type = "add";
        this.form = this.$pub.deepClone(this.originForm);
        this.isDev();
      }
      this.isShow = true;
    },
    async confirm() {
      await this.mValidForm();

      if (type === "add") {
      } else {
      }

      let res = await this.$pub.sleep(1000);
      this.isShow = false;
      this.$emit("update");
    },

    confirm() {
      this.$refs.formRef.validateForm((valid) => {
        if (valid) {
          if (type === "add") {
          } else {
          }
        } else {
          this.$pub.$toast("验证不通过");
        }
      });
    },
  },
};
</script>
<style scoped lang="scss"></style>
