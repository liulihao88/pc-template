const names = ["abc", "cba", "nba"]

// const iterator1 = names[Symbol.iterator]()

for (const item of names) {
}

// Map/Set
const set = new Set()
set.add(10)
set.add(100)
set.add(1000)

for (const item of set) {
}

// 函数中arguments也是一个可迭代对象
function foo(x, y, z) {arguments) {
  }
}

foo(10, 20, 30)
