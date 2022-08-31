// function foo(arg) {
// }

// foo(123)

// 将函数作为另外一个函数的参数
// function foo(aaaaa) {
//   aaaaa()
// }

// function bar() {
// }

// foo(bar)

// 案例
function calc(num1, num2, calcFn) {
}

function add(num1, num2) {
  return num1 + num2
}

function sub(num1, num2) {
  return num1 - num2
}

function mul(num1, num2) {
  return num1 * num2
}

var m = 20
var n = 30

calc(m, n, mul)
