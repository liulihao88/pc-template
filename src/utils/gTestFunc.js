// 做缓存代码
const Event = (function(){
    let clientList = {},
    listen,
    trigger,
    remove,

    listen = function(key, fn){
        if(!clientList[key]){
            clientList[key] = []
        }
        clientList[key].push(fn);
    }

    trigger = function(){
        let key = Array.prototype.shift.call(arguments),
        fns = clientList[key]

        if(!fns || fns.length === 0){
            return false;
        }
        for(let i =0, fn; fn=fns[i++]){
            fn.apply(this, arguments)
        }
    }

    remove = function(key, fn){

    }
})()


// 2. 实现单例模式
要实现一个标准的单例模式并不复杂, 无非是用一个变量来标志当前是否已经为某个类创建过对象, 如果是, 则再下一次获取该类的实例时, 直接返回之前创建的对象. 代码如下

const Singleton = function(name){
    this.name = name
    this.instance = null
}

Singleton.prototype.getName = function () {
    alert(this.name)
}

Singleton.getInstance = function(name){
    if(!this.instance){
        this.instance = new Singleton(name)
    }
    return this.instance
}

let a = Singleton.getInstance('sven1')
let b = Singleton.getInstance('sven2')

alert(a === b)   // true