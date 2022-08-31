// 从某些角度来说, 开发中如果没有this, 很多的问题我们也是有解决方案
// 但是没有this, 会让我们编写代码变得非常的不方便
var obj100 = {
  name: "why",
  eating: function() {
  },
  running: function() {
  },
  studying: function() {
  }
}

var info = {
  name: "why",
  eating: function() {
  },
  running: function() {
  },
  studying: function() {
  }
}

var person = {
  name: "kobe",
  eating: function() {
  },
  running: function() {
  },
  studying: function() {
  }
}

obj100.eating()
obj100.running()
obj100.studying()

