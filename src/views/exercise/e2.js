// import {foo} from './e1.js'
const foo = require('./e1.js')

console.log(`%c 222=>4行 src/views/exercise/e2.js foo `, 'background:#000;color:#bada55', foo);

console.log(foo.sum())
console.log(foo.substrict())