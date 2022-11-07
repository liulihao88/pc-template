// const foo = (function CoolModule(str, arr = [55]) {
//   let something = str;
//   let another = arr.slice();

//   function doSomething() {
//     console.log(something);
//   }

//   function doAnother() {
//     console.log(another.join("!"));
//   }

//   return {
//     doSomething: doSomething,
//     doAnother: doAnother,
//   };
// })();


const foo = (function(){
    let a =1;
    let b =2;
    function sum(){
        return a+b
    }
    function substrict(){
        return a-b
    }
    return {
        sub,
        substrict
    }
})()