<template>
  <div>
    <kd-slide-panel
      style="height: calc(100vh - 50px); border: 1px solid var(--gray)"
    >
      <template #left>
        <div>左侧容器</div>
      </template>
      <template #right>
        <div>右侧容器</div>
      </template>
    </kd-slide-panel>

    <kd-filter-table
      ref="tableRef"
      :data="tableData"
      :columns="columnsData"
      :total-num="totalNum"
      @selectionChange="selectionChange"
      @updatePage="init"
    >
      <template #operation>
        <kd-popover-button
          :disabled="selectList.length === 0"
          :content-text="'确定要删除当前行吗?'"
          :referenceText="mBatchTitle('删除', selectList)"
          @confirm="deleteRow"
        ></kd-popover-button>
        <el-button type="primary" class="ml" @click="deleteRow()">
          {{ mBatchTitle("移动", selectList) }}
        </el-button>
      </template>
      <template #search="{ search }"> 
        <kd-input v-model="search.name" title="任务英文名称"></kd-input>
      </template>
    </kd-filter-table>

    
  </div>
</template>

<script>
export default {
  name: "Index",
  components: {},
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss"></style>
