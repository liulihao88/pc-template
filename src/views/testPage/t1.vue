<template>
  <div>
    <kd-filter-table
      ref="tableRef"
      :data="tableData"
      :columns="columnsData"
      :totalNum="totalNum"
      @selection-change="selectionChange"
      @updatePage="init"
    >
      <template #operation>
        <kd-popover-button
          :content-text="'确定要删除当前行吗?'"
          :referenceText="mBatchTitle('删除', selectArr)"
          @confirm="deleteRow"
        ></kd-popover-button>
        <el-button type="primary" class="ml" @click="deleteRow()">
          {{ mBatchTitle("移动", selectArr) }}
        </el-button>
      </template>
      <template #search="{ search }">
        <kd-input
          v-model="search.name"
          title="任务英文名称"
          width="200"
          class="mr"
        ></kd-input>
        <kd-select
          v-model="search.cnName"
          title="任务中文名称"
          :options="options"
          width="200"
        ></kd-select>
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
      options: [
        { label: "小泽泽", value: "xzz" },
        { label: "小月月", value: "xyy" },
        { label: "小鑫鑫", value: "xxx" }
      ],
      tableData: [
        { name: "andy", status: 1, id: 1 },
        { name: "andy2", status: 2, id: 2 },
        { name: "andy3", status: 0, id: 3 }
      ],
      totalNum: 0,
      selectArr: []
    };
  },
  computed: {
    columnsData() {
      return [
        {
          type: "selection",
          selectableFn: (row, index) => {
            return index % 2 === 0;
          }
        },
        {
          title: "任务英文名称",
          key: "name"
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
            { text: "否", value: 0 }
          ],
          render: (h, params) => {
            return h("span", {}, params.row.status ? "是" : "否");
          }
        },
        {
          key: "operation",
          title: "操作",
          fixed: "right",
          btns: [
            {
              content: "编辑",
              handler: this.deleteRow
            },
            {
              content: "删除",
              disabled: (row) => this.mDisabled("UPDATE", row),
              confirm: this.deleteRow,
              confirmInfo: "您确定要删除此文件嘛? "
            }
          ]
        }
      ];
    }
  },
  watch: {},
  created() {
    this.init();
  },
  mounted() {},
  methods: {
    init() {
      this.totalNum = this.tableData.length;
      console.log("init初始化");
    },
    deleteRow(row) {
      if (row) {
        console.log("行内按钮", row);
      } else {
        console.log("顶部按钮", this.selectArr);
      }
    },
    selectionChange(val) {
      this.selectArr = val;
    }
  }
};

/**
#### 全局属性
 |选项|类型|默认值|说明|
|---|---|---|---|
|data|Array|[]|表格数据|
|columns|Array|[]|列描述数据对象|
|totalNum|Number|0|总条数|
|tableExpand|Boolean|true|允许全表切换是否展示全部内容（不用...显示）|
|trExpand|Boolean|true|允许每行切换是否展示全部内容（不用...显示）|
|searchTypes|Object|{}|筛选规则定义，默认是like：模糊，还有 eq：精确 in：数组 between：日期，比如：{owner: 'eq',endTime:'between'}表示owner列按照精确搜索，endTime列按照between搜索|
|searchTitle|String|搜索关键字|关键字搜索title|
|placeholder|String|请输入|关键字搜索placeholder|
|showSearch|Boolean|true|是否显示头部搜索|
|searchareaWidth|Number|1000|搜索栏宽度|
|wordSearchFlag|Boolean|true|是否支持关键字筛选|
|searchFlag|Boolean|true|是否支持精准筛选|
|pageFlag|Boolean|true|是否包含分页|
|stripe|Boolean|false|是否显示间隔斑马纹|
|border|Boolean|false|是否显示纵向边框|
|showOverflowTooltip|Boolean|true|内容过长时隐藏，鼠标悬浮显示tooltip|
|loading|Boolean|false|表格loading|
|maxHeight|Number|5000|表格最大高度，超出滚动|
|rowKeys|String/Array|''|行数据的key，可以是数组，作为联合key|

#### column属性
|选项|类型|默认值|说明|
|---|---|---|---|
|title|String||列字段名|
|key|String||列名|
|filters|Array|[]|筛选项：eg:[{ text: '未物化', value: false }, { text: '已物化', value: true }]|
|filter|Function||如果要显示的内容不是本列对应的字段值，可使用filter返回真正要显示的内容，eg:filter: (val, row) => row.showName|
|useSlot|Boolean|false|如果某列显示逻辑复杂，可以使用插槽实现。|
|render|Function||如果某列显示逻辑复杂，也可以使用render函数实现。|
|width|Number||列宽度|
|minWidth|Number||列最小宽度|
|fixed|String/Boolean|false|'right' 右侧固定, true 默认左侧固定|
|sortable|Boolean|false|是否可排序|
|headerAlign|String|left|el-table原生属性|
|align|String|left|el-table原生属性|
|type|String|''|el-table原生属性，可以配置index selection等|
|tooltipFlag|Boolean|false|是否显示自带的tooltip，可以配合useSlot或render函数设置本列自己的tooltip|
|handler|Function||本列点击事件函数，配置后，本列内容自动加上链接样式|
|maxBtns|Number|2|只能配置在操作那一列，最多显示几个操作按钮，超出此个数需要点击...才能看到更多按钮|
|isTxtButton|Boolean|true|true：表示使用文字按钮 false：表示使用icon按钮|
|popoverTitle|String|'删除'|点击按钮需要弹出确认弹框时，指定弹框的标题|
|confirmInfo|String|''|有的按钮点击后有确认信息提示，确认框点击后确认后才执行handler|
|filterPlacement|String|'bottom-end'|el-column原生属性|
|filterMethod|Function|\|el-column原生属性|
|headerSlot|String|''|表头自定义插槽|
|headerTooltipText|String|''|移入表头文字提示|
|filteredValue|String|''|el-column原生属性|
|isShow|Boolean|true|列是否显示|

### 方法（ref调用）
|方法名称|说明|参数|
|---|---|---|
|clearSelection|清空表格选中项|无|
|refreshTableData|刷新表格，不改变筛选条件和分页|无|
|initTableData|初始化表格数据|无|
 */
</script>
