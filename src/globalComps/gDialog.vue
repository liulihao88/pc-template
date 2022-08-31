<template>
  <div>
    <el-dialog
      :modal="true"
      :modal-append-to-body="true"
      :title="title"
      v-el-drag-dialog
      :width="width"
      :height="height"
      :visible.sync="isShow"
      :close-on-click-modal="modelClose"
      :show-close="true"
      :close-on-press-escape="true"
      @close="cancelHandle"
    >
      <slot></slot>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button @click="cancelHandle">取 消</el-button>
        <el-button
          type="primary"
          @click="confirmHandle"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  name: 'GDialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    showDialog: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: "45%"
    },
    height: {
      type: String,
      default: "60%"
    },
    cancel: {
      type: [Function, String],
      default: ''
    },
    modelClose: {
      type: Boolean,
      default: true,
    },

  },
   
   
  data() {
    return {
      isShow: this.showDialog
    };
  },
  watch: {
    showDialog() {
      this.isShow = this.showDialog;
    
    }
  },
  created() {
     
  },
  mounted() {
  },
  methods: {
    confirmHandle() {
      this.$emit('confirm');
    },
    cancelHandle() {
      if (typeof this.cancel === 'function') {
        this.cancel();
      } else {
        this.$emit("update:showDialog", false);
      }
    }
  }
};
</script>
<style scoped lang='scss'>
</style>