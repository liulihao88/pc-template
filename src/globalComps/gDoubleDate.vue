<!--
* @描述
*  element的双日期组件。 可传默认值或者不传。
* @使用方法
* <g-double-date :val.sync="doubleDate"  title="请选择日期范围" />
* @doubleDate可选你参数
* ""  [new Date(+new Date() - 24 * 60 * 60 * 1000 * 3), new Date()]  [new Date(2000, 10, 10), new Date(2000, 10, 13)]
* @LastEditTime: 最后更新时间
* 2021-07-20
-->

<template>
  <div class="double_date">
    <div>
      <span
        class="title"
        v-if="title"
      >{{title}}:</span>
      <el-date-picker
        v-model="timePicker"
        type="daterange"
        align="right"
        unlink-panels
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd HH:mm:ss"
        start-placeholder="开始日期"
        range-separator="~"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        @change="dateChange"
      ></el-date-picker>
    </div>
  </div>
</template>
  
<script>
import moment from "moment";
export default {
  name: "GDoubleDate",
  props: {
    val: {
      default: ""
    },
    title: {
      default: ""
    }
  },
  watch: {
    val(e) {
      this.timePicker = e;
    }
  },
  data() {
    return {
      timePicker: this.val,
      pickerOptions: {
        // 时间选择器时间段
        shortcuts: [
          {
            text: "本月",
            onClick(picker) {
              let start = moment(
                moment()
                  .month(moment().month())
                  .startOf("month")
                  .valueOf()
              )._d;
              let end = moment(
                moment()
                  .month(moment().month())
                  .endOf("month")
                  .valueOf()
              )._d;
              picker.$emit("pick", [start, new Date()]);
            }
          },
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      }
    };
  },
  methods: {
    dateChange(v) {
      this.timePicker = v;
      this.$emit("update:val", v);
    }
  }
};
</script>
<style scoped lang="scss" >
.title {
  margin-right: 10px;
}
</style>