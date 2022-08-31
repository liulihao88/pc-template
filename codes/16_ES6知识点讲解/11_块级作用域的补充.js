const names = ["abc", "cba", "nba"]

// 不可以使用const
// for (let i = 0; i < names.length; i++) {
// }

// {
//   let i = 0
// }

// {
//   let i = 1
// }

// {
//   let i = 2
// }

// for...of: ES6新增的遍历数组(对象)
for (const item of names) {
}

// {
//   const item = "abc"
// }

// {
//   const item = "cba"
