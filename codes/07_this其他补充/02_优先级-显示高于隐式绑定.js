// var obj = {
//   name: "obj",
//   foo: function() {
//   }
// }

// obj.foo()

// 1.call/apply的显示绑定高于隐式绑定
// obj.foo.apply('abc')
// obj.foo.call('abc')

// 2.bind的优先级高于隐式绑定
// var bar = obj.foo.bind("cba")
// bar()


// 3.更明显的比较
function foo() {
}

var obj = {
  name: "obj",
  foo: foo.bind("aaa")
}

obj.foo()
