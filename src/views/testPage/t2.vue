<template>
  <div>
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
  name: "T1",
  components: {},
  props: {},
  data() {
    return {
      tableData: [
        { name: "andy", status: 1, id: 1 },
        { name: "andy2", status: 0, id: 2 },
        { name: "andy3", status: 0, id: 3 },
      ],
      totalNum: 0,
      selectList: [],
    };
  },
  computed: {
    col
    columnsData() {
      return [
        {
          type: "selection",
          selectableFn: (row, index) => {
            return index % 2 === 0;
          },
        },
        {
          title: "任务英文名称",
          key: "name",
        },
        {
          title: "任务状态",
          key: "status",
          width: 1000,
          filter: (key, row) => {
            return row.name;
          },
          filters: [
            { text: "是", value: 1 },
            { text: "否", value: 0 },
          ],
          useSlot: true,
          render: (h, params) => {
            return h("span", {}, params.row.status ? "是" : "否");
          },
        },
        {
          key: "operation",
          title: "操作",
          fixed: "right",
          maxBtns: 4,
          btns: [
            {
              content: "编辑",
              handler: this.deleteRow,
              isShow: (row) => {
                return row.status === "RUNNING";
              },
            },
            {
              content: "删除",
              disabled: (row) => this.mDisabled("UPDATE", row),
              confirm: this.deleteRow,
              confirmInfo: "您确定要删除此文件嘛? ",
            },
          ],
        },
      ];
    },
  },
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    editRow(row) {
      console.log("row", row);
    },
    init() {
      this.totalNum = this.tableData.length;
      console.log("init初始化");
    },
    deleteRow(row) {
      console.log("row", row);
    },
    selectionChange(val) {
      this.selectList = val;
    },
  },
};
</script>
