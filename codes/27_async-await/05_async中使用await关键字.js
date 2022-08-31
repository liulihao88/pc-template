// 1.await更上表达式
function requestData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(222)
      reject(1111)
    }, 2000);
  })
}

// async function foo() {
//   const res1 = await requestData()

//   const res2 = await requestData()
// }

// 2.跟上其他的值
// async function foo() {
//   // const res1 = await 123
//   // const res1 = await {
//   //   then: function(resolve, reject) {
//   //     resolve("abc")
//   //   }
//   // }
//   const res1 = await new Promise((resolve) => {
//     resolve("why")
//   })
// }

// 3.reject值
async function foo() {
  const res1 = await requestData()
}

foo().catch(err => {
})
