const inquirer = require("inquirer")
const execa = require("execa")

const run = (bin, args, opts = {}) => execa(bin, args, {stdio: 'inherit', ...opts})
const fs = require("fs")

async function start(callback, dev = true) {
    console.log(`%c 1171 8行 exercise/script/env.js callback `, 'background:#000;color:#ba5', callback);
    
    const list = fs.readdirSync("./packages")
    console.log(`%c 10行 src/views/exercise/script/env.js list`, "color:blue", list);
    const {name} = await inquirer.prompt([
        {
            type: 'list',
            message: `请选择您要${dev ? "运行" : "打包"}的子项目:`,
            name: 'name',
            choices: list.map(item => ({
                name: item,
                item,
            })),
        }
    ])
    callback && callback(name)
}

module.exports = {
    start: start,
    run: run,
}
