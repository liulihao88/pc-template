## 1. 根据id过滤树

```js
let testRoutes = [
    {
        code: '1',
        title: '1title',
        child: [
            {
                code: '11',
                title: '11title',
                child: [{
                    code: '111',
                    title: '111title',
                }, {
                    code: '112',
                    title: '112title',
                }]
            },
            {
                code: '12',
            },
        ]
    },
    {
        code: '123',
        title: '123title',
    },
]

const myCode = [
    { code: '1', title: '哈哈1' },
    { code: '11', title: '哈哈11' },
    { code: '123' },
]
const filterCode = (orgRoutes, sendCode) => {
    return orgRoutes.filter(item => {
        return sendCode.some(v => v.code === item.code)
    }).map(item => {
        // console.log(item, 'item')
        item = Object.assign({}, item)
        sendCode.find((v, i) => item.code = sendCode[i].title || item.title)
        if (item.child) {
            item.child = filterCode(item.child, sendCode)
        }
        return item
    })
}
// 过滤后的
const result = filterCode(testRoutes, myCode)

console.log(`obj打印***** result ***** 34行 ~/test/testProject/pc-template/src/views/exercise/t1.js  11:00:32`);
console.log(JSON.stringify(result, null, '\t'));
```

## 2. 将数组结构通过parentId生成树结构
```js
// 模拟数据
const ary = [
    { id: '1', name: '11', parent_id: '' },
    { id: '2', name: '22', parent_id: '' },
    { id: '3', name: '33', parent_id: '' },
    { id: '11', name: '11-11', parent_id: '1' },
    { id: '12', name: '11-12', parent_id: '1' },
    { id: '21', name: '22-21', parent_id: '2' },
    { id: '31', name: '33-31', parent_id: '3' },
    { id: '331', name: '33-31', parent_id: '31' },
]

/**
 * 递归通过父节点ID生成树结构
 * 思路：
 *      1. 第一次递归的时候查询出所有的父节点
 *      2. 然后通过当前父节点id不断地去查询所有子节点，直到递归完毕返回
 * @param {String} pid 父节点id
 */
function getTrees(pid = '') {
    if (!pid) {
        // 如果没有父id（第一次递归的时候）将所有父级查询出来
        return ary.filter(item => !item.parent_id).map(item => {
            // 通过父节点ID查询所有子节点
            let treeRes = getTrees(item.id)
            if (treeRes.length>0) {
                item.children = treeRes
            }
            return item
        })
    } else {
        return ary.filter(item => item.parent_id === pid).map(item => {
            // 通过父节点ID查询所有子节点
            let treeRes = getTrees(item.id)
            if (treeRes.length>0) {
                item.children = treeRes
            }
            return item
        })
    }
}

console.log(`obj打印***** getTrees() ***** 36行 ~/test/testProject/pc-template/src/views/exercise/test2.js  12:41:23`);
console.log(JSON.stringify(getTrees(), null, '\t'));
```



