const students = [
  {
    name: "Nathalie",
    grade: 3
  },
  {
    name: "Nick",
    grade: 10
  },
  {
    name: "John",
    grade: 15
  },
  {
    name: "Julia",
    grade: 19
  },
  {
    name: "Julia",
    grade: 61
  }
];

// 计算students中大于等于10的grade总分数。使用map,filter和reduce方法
// const res = students
//   .filter((v) => v.grade >= 10)
//   .map((v) => v.grade)
//   .reduce((p, t) => p + t);
let res = students.reduce((p, t) => {
  if (t.grade >= 10) {
    t.grade = (p.grade ?? 0) + t.grade;
    t;
    return t;
  } else {
    return p;
  }
}, 0);

console.log(
  `%c 444=>40行 src/views/exercise/e1.js res `,
  "background:#000;color:#bada55",
  res
);
console.log(
  `%c 333=>46行 src/views/exercise/e1.js students `,
  "background:#000;color:#bada55",
  students
);
