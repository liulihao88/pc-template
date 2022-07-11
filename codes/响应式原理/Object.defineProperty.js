const obj = {
    name: 'andy',
    age: 18,
}

// Object.defineProperty(obj, 'name', {
//     set: function() {
//         console.log(`*****<<<  监听到obj对象被访问了  8行 ~/test/testProject/pc-template/CODE/响应式原理/Object.defineProperty.js  11:50:35`);
//     },
//     get: function() {
//         console.log(`*****<<<  监听到obj对象被获取了  11行 ~/test/testProject/pc-template/CODE/响应式原理/Object.defineProperty.js  11:50:45`);
//     }
// })

Object.keys(obj).forEach(key =>{
    let value = obj[key]
    console.log(`22222***** key ***** 17行 ~/test/testProject/pc-template/CODE/响应式原理/Object.defineProperty.js  11:54:29`);
    console.log(key);
    Object.defineProperty(obj, key, {
        get: function(){
            console.log('set', key)
            return value
        },
        set: function(newValue){
            console.log('get', key)
            value = newValue
        }
    })
})

obj.name="凌云"
console.log(obj.name)

/**
~/test/testProject/pc-template/CODE/响应式原理
~/test/testProject/pc-template/CODE/响应式原理/Object.defineProperty.js
*/

# 这样做有什么缺点? 
## 1. Object.defineProperty设计的初衷， 不是为了去监听截止一个对象中所有属性的。  我们在定义某些属性的时候， 初衷其实是定义普通的属性， 但是后面我们强行将它变成了数据属性描述符。
## 2. 如果我们想监听更加丰富的操作。 比如新增属性， 删除输出， 那么Object.defineProperty是无能为力的。 
所以我们要知道， 存取数据描述符设计的初衷并不是为了去监听一个完整的对象的。 