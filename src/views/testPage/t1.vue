<template>
  <div>
    <el-button @click="t1" type="primary">测试1</el-button>
    <el-button @click="t2" type="info">测试2</el-button>
  </div>
</template>

<script>
export default {
  name: "T1",
  components: {},
  props: {},
  data() {
    return {
      num: 123,
      isShow: false,
      str: "hello world",
      arr: [11, 22, 33],
      obj: {
        name: "andy",
        age: 18,
        objArr: [{ chName: "凌云", height: 188 }]
      },
      date: new Date()
    };
  },
  computed: {},
  watch: {},
  created() {
    this.t1();
    this.t2();
  },
  mounted() {},
  methods: {
    t1() {
      const set = new Set(["abc", "cba", "nba"]);
      const s1 = Symbol("a");
      const s2 = Symbol("b");
      let obj = {
        name: "andy",
        age: 18,
        height: 1.88,
        arr: [1, 2, 3],
        // 特殊类型 set类型
        set: set,
        // 特殊类型, 函数类型
        running: function () {},
        // 特殊类型, symbol类型
        symbolKey: Symbol("abc"),
        // key是symbol类型
        [s1]: "aaa",
        [s2]: "bbb"
      };

      /**
       * 深拷贝完整类型
       * 
       */
      function deepClone(originValue, map=new WeakMap()) {
        // 0. 如果是Symbol类型
        if (typeof originValue === "symbol") {
          return Symbol(originValue.description);
        }

        // 1. 如果是原始类型, 直接返回
        if (!$pub.isObject(originValue)) {
          return originValue;
        }
        // 2. 如果是set类型
        if (originValue instanceof Set) {
          let newSet = new Set();
          for (const setItem of originValue) {
            newSet.add(deepClone(setItem));
          }

          return newSet;
        }

        // 3. 如果是函数类型
        if (typeof originValue === "function") {
          return originValue;
        }

        // 如果是对象类型, 才需要创建对象
        if(map.get(originValue)){
          debugger;
          return map.get(originValue);
        }

        let newObj = Array.isArray(originValue) ? [] : {};
        for (let key in originValue) {
          newObj[key] = deepClone(originValue[key], map);
        }

        // 单独处理symbol
        const symbolKeys = Object.getOwnPropertySymbols(originValue);
        for (const symbolKey of symbolKeys) {
          newObj[Symbol(symbolKey.description)] = deepClone(
            originValue[symbolKey], map
          );
        }
        return newObj;
      }
      let res = deepClone(obj);
      res.self = res;
    },
    t2() {}
  }
};
</script>
<style scoped lang="scss"></style>
