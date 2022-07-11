Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4)
}).then((res) => {
  console.log(res)
})


Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})


/**
~/test/testProject/pc-template
~/test/testProject/pc-template/02_事件循环面试题二.js
*/