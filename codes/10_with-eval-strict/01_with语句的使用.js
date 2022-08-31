"use strict";

var message = "Hello World"

// with语句: 可以形成自己的作用域
var obj = {name: "why", age: 18, message: "obj message"}

function foo() {
  function bar() {
    with(obj) {
    }
  }
  bar()
}

foo()

var info = {name: "kobe"}
with(info) {
}

