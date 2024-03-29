## 1. 创建文件的硬链接
mac下: `ln foo.js foo_hard.js`
windows下: `mklink foo.js foo_hard.js`
> 下面介绍的是mac下的命令
+ ln [选项] 源文件 目标文件
+ -s：建立软链接文件。如果不加 "-s" 选项，则建立硬链接文件；
+ -f：强制。如果目标文件已经存在，则删除目标文件后再建立链接文件；
这里需要注意，软链接文件的源文件必须写成绝对路径，而不能写成相对路径（硬链接没有这样的要求）；否则软链接文件会报错。这是初学者非常容易犯的错误

> 硬链接的特点如下：
+ 不论是修改源文件（test 文件），还是修改硬链接文件（test-hard 文件），另一个文件中的数据都会发生改变。
+ 不论是删除源文件，还是删除硬链接文件，只要还有一个文件存在，这个文件（inode 号是 262147 的文件）都可以被访问。
+ 硬链接不会建立新的 inode 信息，也不会更改 inode 的总数。
+ 硬链接不能跨文件系统（分区）建立，因为在不同的文件系统中，inode 号是重新计算的。
+ 硬链接不能链接目录，因为如果给目录建立硬链接，那么不仅目录本身需要重新建立，目录下所有的子文件，包括子目录中的所有子文件都需要建立硬链接，这对当前的 Linux 来讲过于复杂

> 软链接的特点（软链接的特点和 Windows 中的快捷方式完全一致）。
+ 不论是修改源文件（check），还是修改硬链接文件（check-soft)，另一个文件中的数据都会发生改变。
+ 删除软链接文件，源文件不受影响。而删除原文件，软链接文件将找不到实际的数据，从而显示文件不存在。
+ 软链接会新建自己的 inode 信息和 block，只是在 block 中不存储实际文件数据，而存储的是源文件的文件名及 inode 号。
+ 软链接可以链接目录。
+ 软链接可以跨分区。

链接: `http://c.biancheng.net/view/740.html`



## 2. 将命令行的部分命令过滤掉不保存在历史记录里
`export HISTIGNORE="pwd:ls:clear"`

## 3. 逻辑代码中导入模块
> 不允许在逻辑代码中编写import导入声明语法. 只能写到js代码顶层. 如果确实是逻辑成立时, 才需要导入某个模块
```js
// e1.js
export const name="abd"
export const age=18
export const name2="刘月鹏小伙砸"

// e2.js
let flag = true
if (flag) {
    // import函数.
    let res = import('./e1.js')
    res.then(resolve => {
        console.log(resolve.name, resolve.age);
    })
}
```

## 4. DefilePlugin的使用
> DefinePlugin允许在编译时创建配置的全局常量, 是一个webpack内置的插件(不需要单独安装). 在vue.config.js中书写以下代码. 

```js
const {DefinePlugin} = require('webpack')

module.exports = {
    // 其他省略
    new DefinePlugin({
        ANDY: '"_ANDY"',
        __DEV2: '18 === 18',
        __DEV: 'new Date()'
    })
}
```

## 5. vscode中command+鼠标左键跳转文件
+ 项目根目录下配置`jsconfig.json`
```javascript
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "u/*": ["src/utils/*"],
      "v/*": ["src/views/*"],
      "s/*": ["src/styles/*"],
    }
  },
  "exclude": ["node_modules", "dist"]
}
+ jsconfig.json配置以上的参数, 无法让省略了.vue的文件跳转; 这时可以安装vue-peek插件即可
```

## 6. 如果有a.js和b.js需要导出, 很多框架里都会写一个index.js统一导出. 方法及简写如下
```js
// import {sum, substract} from './e2.js'
// import {multy} from './e1.js'

// export {
//     sum, 
//     substract,
//     multy
// }

// 优化一:
// export {sum, substract} from './e2.js'
// export {multy} from './e1.js

// 优化二:
export * from './e1.js'
export * from './e2.js'
```



