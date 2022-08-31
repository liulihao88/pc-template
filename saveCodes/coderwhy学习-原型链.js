/**
 * 栈的操作
 * 1. push 添加一个新元素到站定位置
 * 2. pop 移除栈顶的元素， 同时返回被移除的元素
 * 3. peek 返回栈顶的元素， 不对栈做任何修改(这个方法不会移除栈顶的元素， 仅仅返回它)
 * 4. isEmpty 如果栈里没有任何元素就返回true, 否则返回false
 * 5. size 返回栈里的元素个数， 这个方法和数组的length属性很类似
 * 6. toString 将栈结构的内容以字符形式返回
 *  */ 


// 封装栈类
export function Stack(){
    // 栈中的属性
    this.items = []

    // 栈的相关操作
    // 1. 将元素压入栈
    Stack.prototype.push = function(element){
        this.items.push(element)
    }
    // 2. 从栈中取出元素
    Stack.prototype.pop = function(){
        return this.items.pop()
    }
    // 3. 查看一下栈顶的元素
    Stack.prototype.peek = function(){
        return this.items[this.items.length - 1]
    }
    // 4. 判断栈是否为空
    Stack.prototype.isEmpty = function(){
        return this.items.length === 0
    }
    // 5. 获取栈中元素的个数
    Stack.prototype.size = function(){
        return this.items.length;
    }

    // 6. toString方法
    Stack.prototype.toString = function(){
        // 20 10 12 8 7
        var resultString = ''
        for(var i =0;i<this.items.length; i++){
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}

// 栈的使用
// var s = new Stack()

// s.push(20)
// s.push(10)
// s.push(100)
// s.push(77)

// s.pop()
// s.pop()