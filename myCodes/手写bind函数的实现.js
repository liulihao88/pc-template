Function.prototype.lhBind = function (thisArg, ...otherArgs) {
  thisArg =
    thisArg === null || thisArg === undefined ? window : Object(thisArg);
  Object.defineProperty(thisArg, "fn", {
    enumerable: false,
    configurable: true,
    writable: false,
    value: this
  });

  return (...newArgs) => {
    var allArgs = otherArgs.concat(newArgs);
    thisArg.fn(...allArgs);
  };
};

function sum(a, b, c, d) {
  console.log(a + b + c + d);
}

let newSum = sum.lhBind("", 1, 2, 3);
const res = newSum(4);
console.log(`281082 22行 手写bind函数的实现.js res `, res); // 10
