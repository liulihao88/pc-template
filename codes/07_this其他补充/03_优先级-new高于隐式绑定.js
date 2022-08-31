var obj = {
  name: "obj",
  foo: function() {
  }
}

// new的优先级高于隐式绑定
var f = new obj.foo()

