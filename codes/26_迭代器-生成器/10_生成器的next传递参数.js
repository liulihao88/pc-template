function* foo(num) {

  const value1 = 100 * num
  const n = yield value1

  const value2 = 200 * n
  const count = yield value2

  const value3 = 300 * count
  return "123"
}

// 生成器上的next方法可以传递参数
const generator = foo(5)


