var message = "Hello Global"

function foo() {
}

function bar() {
  var message = "Hello Bar"
  foo()
}

bar()
