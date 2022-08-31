function foo() {
  function bar() {

  }
  return bar
}

var fn1 = foo()
var fn2 = foo()

