<template>
  <div class="box_select">
    <div
      class="left_title"
      v-if="title"
    >{{ title }}</div>
    <el-select
      v-bind="$attrs"
      v-on="$listeners"
      :placeholder="$attrs.disabled ? '' : $attrs.placeholder || '请选择'"
      v-loading="loading"
      :clearable="_handleClearable"
      @change="changeHandler"
    >
      <el-option
        v-for="item in options"
        :key="type === 'simple' ? item : item[optValue]"
        :label="type === 'simple' ? item : handleLabel(item)"
        :value="type === 'simple' ? item : item[optValue]"
      >
      </el-option>
    </el-select>

  </div>
</template>

<script>
/**
* @描述
* 下拉选择框的组件封装
* @使用方法
   1. 简单的options, 纯数组
    <gSelectNew
      v-model="tt"
      :options="TEST_DATA2"
      :clearable="false"
      type="simple"
    />
     TEST_DATA2: ['andy', '凌云', 18],
  2. 复杂的options, 数组对象
   <gSelectNew
      v-model="tt2"
      :options="TEST_DATA"
    />
    TEST_DATA: [
    {
      value: '选项1',
      label: '去年今日此门中'
    }, {
      value: '选项2',
      label: '人面桃花相映红'
    }
  ],
  3. 如果是多个参数拼接出来的选项  :optLabel="['label', 'other', 'other2']"
  4. 如果是自定义显示label。 :cusLabel="cusLabelFunc"
* @param
*
* @LastEditTime: 最后更新时间
* 2022-03-17
* @Author: andy凌云
*/
export default {
  name: "GSelect",
  props: {
    optValue: {
      type: [String, Number],
      default: "value"
    },
    optLabel: {
      type: [String, Number, Array],
      default: "label"
    },
    loading: {
      type: Boolean,
      default: false
    },
    options: {
      type: Array,
      default: () => []
    },
    // 是简单的options 还是复杂options。默认复杂
    type: {
      type: String,
      default: '', // 简单选项'simple'
    },
    title: {
      type: String,
      default: ''
    },
    // 如果label显示多个参数的连接符
    connect: {
      type: String,
      default: '/',
    },
    // 自定义label显示多个参数的函数
    cusLabel: {
      type: [Function, String],
      default: '',
    }
  },
  computed: {
    // 如果不选, 默认都加clearable。 否则以传进来的为准
    _handleClearable() {
      if (this.$attrs.clearable === undefined) {
        return true
      } else {
        return this.$attrs.clearable
      }
    },
  },
  watch: {

  },
  data() {
    return {

    };
  },
  components: {},
  created() { },
  mounted() { },
  methods: {
    // 将label作为多个值连接起来。 比如 admin/管理员, 这是两个属性拼接出来的
    handleLabel(item) {
      // 如果cusLabel是函数就执行cusLabel的函数去处理label显示
      if (typeof this.cusLabel === 'function') {
        return this.cusLabel(item)
      } else {
        // 如果label是数组, 就拼接数组。
        if (Array.isArray(this.optLabel)) {
          let str = ''
          this.optLabel.forEach((v) => {
            str += item[v] + this.connect
          })
          let res = str.slice(0, -1)
          return res;
        } else {
          // 直接显示label
          return item[this.optLabel]
        }
      }

    },
    changeHandler(val) {
      if (!val) {
        this.$emit("selectChange", []);
        return
      }
      let selectObj = this.options.filter(v => {
        if (this.type === 'simple') {
          return v === val
        } else {
          return v[this.optValue] === val;
        }
      })[0];
      let selectLabel = selectObj[this.optLabel];
      this.$emit("selectChange", [val, selectLabel, selectObj]);
    }
  }
};
</script>
<style scoped lang="scss">
.left_title {
  // background-color: #f5f7fa;
  background: #fff;
  vertical-align: middle;
  display: table-cell;
  position: relative;
  border: 1px solid #dcdfe6;
  border-right: 0 none;
  padding: 0 8px;
  white-space: nowrap;
  border-radius: 2px 0 0 2px;
  align-items: center;
  height: 30px;
  line-height: 30px;
  color: #909399;
}
.box_select {
  //   display: flex;
  display: flex;
}
.box_select ::v-deep .el-input__inner {
  border-radius: 0px 2px 2px 0 !important;
}
.box_select .el-select {
  display: table-cell;
}
</style>
