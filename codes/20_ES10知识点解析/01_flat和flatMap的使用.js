// 1.flat的使用
// const nums = [10, 20, [2, 9], [[30, 40], [10, 45]], 78, [55, 88]]
// const newNums = nums.flat()

// const newNums2 = nums.flat(2)

// 2.flatMap的使用
// const nums2 = [10, 20, 30]
// const newNums3 = nums2.flatMap(item => {
//   return item * 2
// })
// const newNums4 = nums2.map(item => {
//   return item * 2
// })

// 3.flatMap的应用场景
const messages = ["Hello World", "hello lyh", "my name is coderwhy"]
const words = messages.flatMap(item => {
  return item.split(" ")
})
