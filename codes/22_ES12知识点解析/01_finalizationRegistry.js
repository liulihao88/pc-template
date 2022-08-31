// ES12: FinalizationRegistry类
const finalRegistry = new FinalizationRegistry((value) => {
})

let obj = { name: "why" }
let info = { age: 18 }

finalRegistry.register(obj, "obj")
finalRegistry.register(info, "value")

obj = null
info = null
