function foo() {
  var name = "foo"
  var age = 18

  function bar() {
  }
  return bar
}

var fn = foo()
fn()

fn = null
foo = null

// fn()
// fn()
// fn()
// fn()
// fn()
