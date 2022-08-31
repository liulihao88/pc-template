function* foo() {

  const value1 = 100
  try {
    yield value1
  } catch (error) {

    yield "abc"
  }
  const value2 = 200
  yield value2
}

const generator = foo()

const result = generator.next()
generator.throw("error message")
