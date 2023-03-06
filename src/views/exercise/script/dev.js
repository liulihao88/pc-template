const {resolve} = require('path')
const CWD = process.cwd()
const {start, run} = require("./env.js")

async function runTask(name) {
    run('pnpm', ['dev'], {cwd: resolve(CWD, `./packages/${name}`)})
}

start(runTask)
