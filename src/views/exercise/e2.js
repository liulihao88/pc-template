

let flag = true
console.log(`699905 4行 e2.js 333 `, 333);

if(flag){
    const res = import('./e1.js')
    res.then(r=>{
        console.log(`%c 111=>9行 src/views/exercise/e2.js r.name `, 'background:#000;color:#bada55', r.name);
        console.log(`%c 222=>10行 src/views/exercise/e2.js r.age `, 'background:#000;color:#bada55', r.age);
        
    })
}

console.log(`%c 444=>17行 src/views/exercise/e2.js 444 `, 'background:#000;color:#bada55', 444);
