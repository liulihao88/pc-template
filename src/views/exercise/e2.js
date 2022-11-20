const kdUtils = require("@kd/utils");
console.log("kdUtils", kdUtils);



import requestNew  from "@/utils/requestNew";

console.log(`%c 111=>3行 src/views/exercise/e2.js requestNew `, 'background:#000;color:#bada55', requestNew);

let a = new requestNew('ccc')

console.log(`%c 333=>7行 src/views/exercise/e2.js a `, 'background:#000;color:#bada55', a);

a.request({
  url: 'andy', 
  method: 'post'
})



