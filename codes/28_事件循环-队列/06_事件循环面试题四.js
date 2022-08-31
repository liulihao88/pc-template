async function async1() {
}

async function async2() {

setTimeout(function () {
}, 0)

setTimeout(function () {
}, 300)

setImmediate(() =>

process.nextTick(() =>

async1();

process.nextTick(() =>

new Promise(function (resolve) {
})

// script start
// async1 start
// async2
// promise1
// promise2
// script end
// nexttick1
// nexttick2
// async1 end
// promise3
// settimetout0
// setImmediate
// setTimeout2
