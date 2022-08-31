// 封装一个响应式的函数
let reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
}

// 对象的响应式
const obj = {
  name: "why",
  age: 18
}

watchFn(function() {
  const newName = obj.name
})

watchFn(function() {
})

function bar() {
}

obj.name = "kobe"
reactiveFns.forEach(fn => {
  fn()
})
