let arr = [
    {
        "TimerType": 2, // 1 和 2 
        "Countdown": 24632128, // 时间 
    },
    {
        "TimerType": 2, // 1 和 2 
        "Countdown": 12342, // 时间 
    },
    {
        "TimerType": 1,
        "Countdown": 35406,
    },
    {
        "TimerType": 1,
        "Countdown": 123456,
    },
    {
        "TimerType": 2, // 1 和 2 
        "Countdown": 444444, // 时间 
    },
];

let newArr = [[], []];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].TimerType === 1) {
        newArr[1].push(arr[i]);
        newArr[1].sort((a,b)=>{return b.Countdown-a.Countdown});
    } else if (arr[i].TimerType === 2) {
        newArr[0].push(arr[i]);
        newArr[0].sort((a,b)=>{return b.Countdown-a.Countdown});
    }
}



// ~/test/testProject/pc-template/src/test
// ~/test/testProject/pc-template/src/test/nodeTest1.js

