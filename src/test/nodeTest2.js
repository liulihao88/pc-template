let a = [
    {
        comp: 'a',
        children: [
            {
                comp: 'aSon'
            },
            {
                comp: 'aSon2'
            },
        ],
    },
    {
        comp: 'b',
        children: [
            {
                comp: 'bSon'
            },
            {
                comp: 'bSon2'
            },
        ],
    }
]

let resJson = {
    data: [
        {
            comp: 'a',
            children: [
                {
                    comp: 'aSon2'  11  2
                },
            ]
        },
        {
            comp: 'b',
            children: [
                {
                    comp: 'bSon'
                }
            ]
        }
    ]
}

let resAllComp = [];
resJson.data.forEach(v => {
    if (v.comp) {
        resAllComp.push(v.comp)
    }
    if (v.children) {
        v.children.forEach(val => {
            if (val.comp) {
                resAllComp.push(val.comp)
            }
        })
    }
})

let res = a.map(v => {
    // if (resAllComp.indexOf(v.comp) === -1) {
    //     return false
    // } else {
        v.children = v.children.filter(val => {
            if (resAllComp.indexOf(val.comp) === -1) {
                return false
            } else {
                return true
            }
        })
        return v
    // }
})


// 下面是返回值
11111<<<  resAllComp  >>>11111
[ 'a', 'aSon2', 'b', 'bSon' ]
<<<  res  >>>
[
        {
                "comp": "a",
                "children": [
                        {
                                "comp": "aSon2"
                        }
                ]
        },
        {
                "comp": "b",
                "children": [
                        {
                                "comp": "bSon"
                        }
                ]
        }
]