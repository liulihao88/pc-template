function createArrayIterator(arr) {
  let index = 0
  return {
    next: function() {
      if (index < arr.length) {
        return { done: false, value: arr[index++] }
      } else {
        return { done: true, value: undefined } 
      }
    }
  }
}

const names = ["abc", "cba", "nba"]
const nums = [10, 22, 33, 12]

const namesIterator = createArrayIterator(names)

const numsIterator = createArrayIterator(nums)

// 创建一个无限的迭代器
function createNumberIterator() {
  let index = 0
  return {
    next: function() {
      return { done: false, value: index++ }
    }
  }
}

const numberInterator = createNumberIterator()

