<!--
* @描述
* element的单日期组件。 可传默认值或者不传。
* title可传可不传， initDate中传递的是字符串日期或者 new Date()格式的日期
* @使用方法
* <g-date :val.sync="initDate"  title="请选择单日期" />
* @initDate可选你参数
*  new Date()  "2020-03-02"  "2020/03/02"  "" 
* @LastEditTime: 最后更新时间
* 2021-07-20
-->
<template>
  <div class="single_date">
    <div>
      <span
        class="title"
        v-if="title"
      >{{title}}:</span>
      <el-date-picker
        v-model="timePicker"
        value-format="yyyy-MM-dd HH:mm:ss"
        type="date"
        @change="dateChange"
        :picker-options="pickerOptions"
        placeholder="选择日期"
      ></el-date-picker>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "GDate",
  props: {
    val: {
      type: [String, Date],
      default: ""
    },
    title: {
      type: String,
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
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
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
<style scoped lang="scss">
.title {
  margin-right: 10px;
}
</style>
  