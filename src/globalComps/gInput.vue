<template>
  <el-input
    v-bind="$attrs"
    v-on="$listeners"
    :placeholder="handlePlaceholder()"
    v-model="password"
    class="ipt_box"
    @focus="focusHandler($event)"
    @keyup.delete.native="keyUpDeleteHandler()"
  >
    <div
      slot="prepend"
      v-if="$attrs.title"
    >
      {{ $attrs.title }}
    </div>
  </el-input>
</template>

<script>
/**
* @描述
* input输入框的组件封装方法
* @使用方法
  <gInput
      v-model="aa"
      @input="changeIpt"
    />
* @param
 title 左侧显示的title文字
:disabled="false" 是否不可用
* @LastEditTime: 最后更新时间
* 2022-03-17
* @Author: andy凌云
*/
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  created() { },
  computed: {
    password: {
      set(v) {
        this.$emit('input', v)
      },
      get() {
        return this.value
      }
    }
  },
  methods: {
    handlePlaceholder() {
      const { $attrs } = this;
      let res = $attrs.disabled ? "" : $attrs.placeholder || "请输入";
      return res;
    },
    keyUpDeleteHandler() {
      if (this.$attrs.type === 'password') {
        this.password = ""
      }
    },
    focusHandler(evt) {
      if (this.$attrs.type === 'password') {
        evt.currentTarget.select()
      }
    }
  },
};
</script>
<style scoped lang="scss">
.ipt_box {
  width: 316px;
}
</style> 