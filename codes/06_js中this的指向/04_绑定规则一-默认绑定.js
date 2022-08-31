// 默认绑定: 独立函数调用
// 1.案例一:
// function foo() {
// }

// foo()

// 2.案例二:
// function foo1() {
// }

// function foo2() {
//   foo1()
// }

// function foo3() {
//   foo2()
// }

// foo3()


// 3.案例三:
// var obj = {
//   name: "why",
//   foo: function() {
//   }
// }

// var bar = obj.foo
// bar() // window


// 4.案例四:
// function foo() {
// }
// var obj = {
//   name: "why",
//   foo: foo
// }

// var bar = obj.foo
// bar() // window

// 5.案例五:
function foo() {
  function bar() {
  }
  return bar
}

var fn = foo()
fn() // window

var obj = {
  name: "why",
  eating: fn
}

obj.eating() // 隐式绑定
