/**
 * 深拷贝完整类型
 *   
 * let obj = {
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
*/
function deepClone(originValue) {
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
  let newObj = Array.isArray(originValue) ? [] : {};
  for (let key in originValue) {
    newObj[key] = deepClone(originValue[key]);
  }

  // 单独处理symbol
  const symbolKeys = Object.getOwnPropertySymbols(originValue);
  for (const symbolKey of symbolKeys) {
    newObj[Symbol(symbolKey.description)] = deepClone(originValue[symbolKey]);
  }
  return newObj;
}

