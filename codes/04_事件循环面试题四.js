async function async1() {
  await async2()
}

async function async2() {
}

setTimeout(function () {
}, 0)

setTimeout(function () {
}, 300)

setImmediate(() =>

process.nextTick(() =>

async1();

process.nextTick(() =>

new Promise(function (resolve) {
  resolve();
}).then(function () {
})

/**
~/test/testProject/pc-template
~/test/testProject/pc-template/04_事件循环面试题四.js
*/