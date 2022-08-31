// ES6之前拼接字符串和其他标识符
const name = "why"
const age = 18
const height = 1.88

// ES6提供模板字符串 ``
const message = `my name is ${name}, age is ${age}, height is ${height}`

const info = `age double is ${age * 2}`

function doubleAge() {
  return age * 2
}

const info2 = `double age is ${doubleAge()}`
