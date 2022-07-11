<template>
  <div class="box">
    <el-form
      :model="form"
      label-width="70px"
    >
      <el-row>
        <template v-for="(v,i) in formItems">
          <el-col :span="span">
            <el-form-item :label="v.label">
              <template v-if="v.type==='select'">
                <el-select
                  v-model="form[v.value]"
                  placeholder="请选择"
                  :style="{width: v.width}"
                >
                  <el-option
                    v-for="item in v.options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </template>
              <template v-else>
                < v-model="form[v.value]"></>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <el-button @click="t1">测试</el-button>
  </div>
</template>

<script>
import { log } from '@/utils/gFunc';
export default {
  name: "GForm",
  props: {
    formItems: {
      type: Array,
      default: () => [],
    },
    span: {
      type: [String, Number],
      default: 8,
    },

  },
  data() {
    return {
      form: {
        username: 'andy',
      },
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    t1() {
      log('this.form 41行 src/globalComps/gForm.vue 10:31:00', this.form)




    },

  }
}
</script>
<style scoped lang='scss'>
// .box ::v-deep .el-col{
//     padding: 0 8px;
// }
</style>
