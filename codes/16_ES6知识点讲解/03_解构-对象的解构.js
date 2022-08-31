var obj = {
  name: "why",
  age: 18,
  height: 1.88
}

// 对象的解构: {}
var { name, age, height } = obj

var { age } = obj

var { name: newName } = obj

var { address: newAddress = "广州市" } = obj


function foo(info) {
}

foo(obj)

function bar({name, age}) {
}

bar(obj)

