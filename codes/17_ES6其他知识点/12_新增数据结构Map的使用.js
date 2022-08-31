// 1.JavaScript中对象中是不能使用对象来作为key的
const obj1 = { name: "why" }
const obj2 = { name: "kobe" }

// const info = {
//   [obj1]: "aaa",
//   [obj2]: "bbb"
// }

// 2.Map就是允许我们对象类型来作为key的
// 构造方法的使用
const map = new Map()
map.set(obj1, "aaa")
map.set(obj2, "bbb")
map.set(1, "ccc")

const map2 = new Map([[obj1, "aaa"], [obj2, "bbb"], [2, "ddd"]])

// 3.常见的属性和方法

// set
map2.set("why", "eee")

// get(key)

// has(key)

// delete(key)
map2.delete("why")

// clear
// map2.clear()

// 4.遍历map
map2.forEach((item, key) => {
})

for (const item of map2) {
}

for (const [key, value] of map2) {
}
