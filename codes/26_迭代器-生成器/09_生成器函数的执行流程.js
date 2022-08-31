// 当遇到yield时候值暂停函数的执行
// 当遇到return时候生成器就停止执行
function* foo() {

  const value1 = 100
  yield value1

  const value2 = 200
  yield value2

  const value3 = 300
  return "123"
}

// generator本质上是一个特殊的iterator
const generator = foo()
