setTimeout(function () {

  new Promise(function (resolve) {
    resolve();
  }).then(function () {
    new Promise(function (resolve) {
      resolve();
    }).then(function () {
    });
  });
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
});

setTimeout(function () {
});

queueMicrotask(() => {
});

new Promise(function (resolve) {
  resolve();
}).then(function () {
});




























// promise1
// 2
// then1
// queueMicrotask1
// then3
// setTimeout1
// then2
// then4
// setTimeout2
