function add(x, y, z) {
  return x + y + z
}

var result = add(10, 20, 30)

function sum1(x) {
  return function(y) {
    return function(z) {
      return x + y + z
    }
  }
}

var result1 = sum1(10)(20)(30)

// 简化柯里化的代码
var sum2 = x => y => z => {
  return x + y + z
}

var sum3 = x => y => z => x + y + z

