<template>
  <div class="datepick">
    <div>
      <span
        v-if="title"
        class="title"
      >{{ title }}</span>
      <el-date-picker
        :default-time="['00:00:00', '23:59:59']"
        v-model="rangeVal"
        v-bind="$attrs"
        type="datetimerange"
        value-format="yyyy-MM-dd HH:mm:ss"
        :start-placeholder="$attrs.disabled ? '' : ($attrs['start-placeholder'] || '请选择日期')"
        :end-placeholder="$attrs.disabled ? '' : ($attrs['end-placeholder'] || '请选择日期')"
        v-on="$listeners"
        @change="dateChange"
        :picker-options="pickerOptions"
      />
    </div>
  </div>
</template>

<script>
/**
  * @描述
* 日期范围组件
* title可传可不传
* v-model
* @使用方法
*  <kjDateRange
      :v-model="value"
    />
* @value 默认为'',和el-date-picker的时间范围框用法一样
* @LastEditTime: 最后更新时间
* 2022-03-30
* @Author: csG
*/
export default {
  name: "KjDateRange",
  props: {
    value: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    const oneDay = 3600 * 1000 * 24
    const end = new Date();
    return {
      pickerOptions: {
        // 时间选择器时间段
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              const start = new Date(new Date(new Date().toLocaleDateString()).getTime());
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const start = new Date(new Date(new Date().toLocaleDateString()).getTime() - oneDay);
              const yesEnd = new Date(new Date(new Date().toLocaleDateString()).getTime() - 1);
              picker.$emit("pick", [start, yesEnd]);
            }
          },
          {
            text: "最近一周",
            onClick(picker) {

              const start = new Date(new Date(new Date().toLocaleDateString()).getTime() - oneDay * 6);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "本月",
            onClick(picker) {
              const start = new Date(new Date(new Date().toLocaleDateString()).setDate(1))
              picker.$emit("pick", [start, new Date()]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - oneDay * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              start.setTime(start.getTime() - oneDay * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  computed: {
    rangeVal: {
      get() {
        if (this.value && this.value.length) {
          return this.value;
        } else {
          return '';
        }
      },
      set(v) {
        this.$emit("input", v);
      }
    }
  },
  mounted() {
  },
  methods: {
    // 本周开始的时间戳
    // new Date(new Date().toLocaleLowerCase()).getTime() - (new Date().getDay()-1) * 24 * 3600 *1000
    dateChange(v) {
      this.$emit("input", v);
    }
  }
};
</script>
<style scoped lang="scss">
.datepick {
  font-size: 0;
  .title {
    display: inline-block;
    height: 32px;
    line-height: 32px;
    font-size: 12px;
    vertical-align: top;
    border-radius: 1px;
    padding: 0 8px;
    background: #fff;
    color: rgba(39, 48, 75, 0.85);
    border: 1px solid #e3e6eb;
    border-right: 0 none;
  }
  .el-date-editor {
    border-radius: 0 1px 1px 0;
  }
}
</style>
