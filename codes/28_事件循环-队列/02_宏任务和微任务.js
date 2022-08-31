setTimeout(() => {
}, 1000)

queueMicrotask(() => {
})

Promise.resolve().then(() => {
})

function foo() {
}

function bar() {
  foo()
}

bar()
