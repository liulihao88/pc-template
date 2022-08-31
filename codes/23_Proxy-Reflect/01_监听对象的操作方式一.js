const obj = {
  name: "why",
  age: 18
}

// Object.defineProperty(obj, "name", {
//   get: function() {
//   },
//   set: function() {
//   }
// })


Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function() {
      return value
    },
    set: function(newValue) {
      value = newValue
    }
  })
})

obj.name = "kobe"
obj.age = 30

obj.height = 1.88
