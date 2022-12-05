1. 使用方法

## 1. 可以传递属性和方法的用法
<kd-dialog
  v-on="$listeners"
  v-bind="$attrs"
  width="200px"
  ref="drawerRef"
  title="可以传递方法和属性的用法"
  :visible.sync="isShow"
  @confirm="confirm"
></kd-dialog>
## 2.确认按钮加loading
<kd-dialog
  ref="drawerRef"
  title="按钮加loading"
  :visible.sync="isShow"
  @confirm="confirm"
  :confirmAttrs="{
    loading: isLoading,
  }"
  theme="simple"
>
</kd-dialog>
## 3.一些常用属性
<kd-dialog
  ref="drawerRef"
  width="200px"
  title="常用属性"
  :visible.sync="isShow"
  :closeOnClickModal="false"
  @confirm="confirm"
  confirmText="关闭"
  :showFooter="true"
  :showClose="false"
  theme="simple"
  :border="false"
>
 <template #title>
   <div>自定义title</div>
 </template> 
 <template #footer>
   <div>自定义footer</div>
 </template>
</kd-dialog>

2. 属性

### 属性
#### 全局属性
|选项|类型|默认值|说明|
|---|---|---|---|
|title|String|""|弹框标题名称|
|theme|String|""|弹框样式：norm norm16 simple|
|confirmDisabled|Boolean|false|确认按钮是否禁止点击|
|cancelDisabled|Boolean|false|取消按钮是否禁止点击|
|cancelText|String|"取消"|取消按钮文本|
|confirmText|String|"确认"|确认按钮文本|
|showFullscreen|Boolean|false|是否显示可全屏|
|showFooter|Boolean|true|是否显示底部按钮|
|cancelThrottleNumber|Number|1000|取消按钮节流|
|confirmThrottleNumber|Number|1000|确定按钮节流|
|border|Boolean|true|是否显示弹框标题下边线|
|destroyOnClose|Boolean|true|关闭时是否销毁Dialog中的元素|
|width|String|50%|Dialog的宽度|
|top|String|15vh|Dialog CSS中的margin-top值|
|append-to-body|Boolean|false|Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true|
|close-on-click-modal|Boolean|true|是否可以通过点击 modal 关闭 Dialog|

### 事件
|事件名称|说明|回调参数|
|---|---|---|
|cancel|弹框取消按钮|-|
|confirm|弹框确定按钮|-|

### slot
|名称|说明|参数|
|---|---|---|
|title|自定义弹框标题|-|
|footer|自定义弹框底部按钮|-|

3. 源码

<template>
  <div class="kd-dialog">
    <!-- :close-on-click-modal="mIsDev ? true : false" -->
    <el-dialog
      v-el-drag-dialog
      :fullscreen="fullscreen"
      :custom-class="getThemeClass"
      :destroy-on-close="destroyOnClose !== false"
      v-bind="$attrs"
      :width="$attrs.width || '640px'"
      :class="!border && 'hide-title-border'"
      v-on="$listeners"
    >
      <template slot="title">
        <slot name="title">
          <div>{{ title }}</div>
        </slot>
        <button
          v-if="showFullscreen"
          class="el-dialog__headerbtn dialog_fullscreen__icon"
          @click="fullscreen = !fullscreen"
        >
          <i :class="fullscreen ? 'kd-icon-fullscreen-exit' : 'kd-icon-fullsreen'"></i>
        </button>
      </template>
      <div class="dialog_slot_box">
        <slot></slot>
      </div>
      <div v-if="showFooter" slot="footer" class="dialog_footer">
        <slot name="footer">
          <el-button
            v-if="showCancel"
            v-throttle="cancelThrottleNumber"
            :type="cancelAttrs.type || 'info'"
            v-bind="cancelAttrs"
            @click="handleClose"
            >{{ cancelText }}</el-button
          >
          <el-button
            v-if="showConfirm"
            v-throttle="confirmThrottleNumber"
            :type="confirmAttrs.type || 'primary'"
            v-bind="confirmAttrs"
            @click="confirmHandle"
            >{{ confirmText }}</el-button
          >
        </slot>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'KdDialog',
  props: {
    title: {
      type: String,
      default: '', // 弹框标题名称
    },
    theme: {
      type: String,
      default: '', // 弹框样式: 默认空, norm norm16 simple
    },
    cancel: {
      type: [Function, String],
      default: '', //
    },
    confirmDisabled: {
      type: Boolean,
      default: false, // 确认按钮是否禁止点击
    },
    cancelDisabled: {
      type: Boolean,
      default: false, // 取消按钮是否禁止点击
    },

    cancelText: {
      type: String,
      default: '取消',
    },
    confirmText: {
      type: String,
      default: '确认',
    },
    showFullscreen: {
      type: Boolean,
      default: false, // 是否显示可全屏
    },
    showFooter: {
      type: Boolean,
      default: true, // 是否显示底部操作按钮
    },
    showCancel: {
      type: Boolean,
      default: true,
    },
    showConfirm: {
      type: Boolean,
      default: true,
    },
    cancelThrottleNumber: {
      type: Number,
      default: 1000, // 取消按钮节流
    },
    confirmThrottleNumber: {
      type: Number,
      default: 2000,
    },
    border: {
      type: Boolean,
      default: true,
    },
    destroyOnClose: {
      type: Boolean,
      default: true,
    },
    confirmAttrs: {
      type: Object,
      default: () => ({}),
    },
    cancelAttrs: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      fullscreen: false,
    };
  },
  computed: {
    getThemeClass() {
      if (this.theme === 'norm') {
        return 'kd-norm-dialog';
      } else if (this.theme === 'norm16') {
        return 'kd-norm16-dialog';
      } else if (this.theme === 'simple') {
        return 'kd-simple-dialog';
      } else {
        return '';
      }
    },
  },
  watch: {
    showDialog() {},
  },
  methods: {
    confirmHandle() {
      if (this.$listeners.confirm) {
        this.$emit('confirm');
      } else {
        this.$emit('update:visible', false);
      }
    },
    handleClose() {
      if (this.$listeners.cancel) {
        this.$emit('cancel');
      } else {
        this.$emit('update:visible', false);
      }
    },
  },
};
</script>


