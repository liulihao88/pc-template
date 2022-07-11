function foo() {
  console.log(this)
}

// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")
// foo.call("aaa")

// 默认绑定和显示绑定bind冲突: 优先级(显示绑定)

var newFoo = foo.bind("aaa")

newFoo()
newFoo()
newFoo()
newFoo()
newFoo()
newFoo()

var bar = foo
console.log(bar === foo)
console.log(newFoo === foo)


/**
~/test/testProject/pc-template/codes/06_js中this的指向
~/test/testProject/pc-template/codes/06_js中this的指向/07_绑定规则三-显示绑定-bind.js
*/