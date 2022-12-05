new Promise((resolve, reject) => {
  console.log(2);
  resolve(3);
  console.log(4);
}).then((res) => {
  console.log(res);
  return new Promise((resolve, reject) => {
    console.log(5);
  });
})
async function async1() {
  console.log(6);
  let res = await async2();
  console.log(7);
  console.log(res);
}
async1();
async function async2() {
  console.log(8);
  // setImmediate(() => console.log(9));
  let res = await new Promise((resolve, reject) => {
    resolve(10);
  });
  await setTimeout(() => {
     console.log(`%c 777=>28行 markdown/code/28_事件循环-队列/自定义循环.js 777 `, 'background:#000;color:#bada55', 777);
  }, 0);
  await new Promise((resolve, reject) => {
    resolve(44)
  })
  await new Promise((resolve, reject) => {
    console.log(66)
    resolve(66)
  })

  // process.nextTick(() => console.log(11));
  new Promise(function(resolve) {
    resolve(88);
    console.log(13);
  }).then(function(res) {
    console.log(`%c 444=>33行 markdown/code/28_事件循环-队列/自定义循环.js res `, 'background:#000;color:#bada55', res);
  }).catch((err) => {
    console.log(err);
  });
  return res;
}
