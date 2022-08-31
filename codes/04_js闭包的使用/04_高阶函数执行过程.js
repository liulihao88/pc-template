function foo() {
  function bar() {
  }

  return bar
}

var fn = foo()
fn()
