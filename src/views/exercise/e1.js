class a {
  constructor(baseUrl) {
    this.instance = {
        timeout: 3000,
    }
    this.instance.baseUrl = baseUrl
  }
  test() {
    console.log(`***** 11  3行 src/views/exercise/e1.js  20:03:52`);
  }
  test2() {
    console.log(`530558 6行 src/views/exercise/e1.js this `, this);
    console.log(`%c 111=>10行 src/views/exercise/e1.js this.baseUrl `, 'background:#000;color:#bada55', this.instance);
    
  }
}

console.log(
  `%c 111=>10行 src/views/exercise/e1.js a `,
  "background:#000;color:#bada55",
  a
);

export default a;
