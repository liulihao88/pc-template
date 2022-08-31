<template>
  <div>
    <div
      class="top-box"
      :style="{ 'height': (200 - topHeight) + 'px'}"
    >
      <div
        class="middle-txt"
        :style="{'opacity': headerOpacity}"
      >中间标题</div>
      <div class="
        c-f">
        <div :style="{'width': width + 'px', 'opacity': 1 - headerOpacity}">搜索</div>
        <el-input
          style="width: 100%"
          v-model="val"
          placeholder="哈哈哈哈哈哈哈哈"
        ></el-input>
      </div>
    </div>
    <div class="item-box">
      <div
        v-for="(v,i) in list"
        :key="i"
        class="item"
      >
        <div>{{v}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Scroll",
  props: {

  },
  data() {
    return {
      val: '',
      list: [],
      headerOpacity: 1,
      width: 0,
      topHeight: 0,
      isUp: true,
    };
  },
  created() {
    this.init()
  },
  mounted() {
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    window.addEventListener('scroll', this.onScroll)
    document.onmousewheel = (e) => {
      e = e || window.event;
      var wheelDelta = e.wheelDelta;
      if (wheelDelta > 0) {
        this.isUp = false;
      } else {
        this.isUp = true;
      }
    }
  },
  methods: {
    init() {
      for (let i = 0; i < 100; i++) {
        this.list.push(i);
      }
    },

    onScroll(e) {
      const scrollTop = Math.max(
        window.scrollY,
        document.documentElement.scrollTop
      )
      if (this.topHeight <= 100) {
        if (this.isUp) {
          this.width += 1;
          if (this.headerOpacity >= 0) {
            this.headerOpacity -= 0.01;
          }
          this.topHeight += 1;
        } else {
          this.width -= 1;
          if (this.headerOpacity <= 1) {
            this.headerOpacity += 0.01;
          }
          if (this.topHeight >= 0) {
            this.topHeight -= 1;
          }
        }
      }
    },
  }
};
</script>
<style scoped lang='scss'>
.top-box {
  position: fixed;
  width: 1000px;
  background: red;
  padding: 20px;
  box-sizing: border-box;
}
.item-box {
  padding-top: 100px;
}
.middle-txt {
  text-align: center;
}
</style>
