// async function bar() {
//   return new Promise((resolve) => {
//     resolve()
//   })
// }

// async function foo() {

//   await bar()
// }

// foo()


async function async1 () {
}

async function async2 () {

setTimeout(function () {
}, 0)
 
async1();
 
new Promise (function (resolve) {
  resolve();
}).then (function () {

// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout
