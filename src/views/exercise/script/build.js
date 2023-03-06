const {resolve} = require('path')
const ora = require("ora")
const CWD = process.cwd()

const {start, run} = require("./env.js")

async function runTask(name) {
    const s = ora().start(`${name} 平台，开始打包`)
    try {
        await run('rimraf', [`./dist/${name}`])
        await run('pnpm', ['build'], {cwd: resolve(CWD, `./packages/${name}`)})
        s.succeed(`${name} 平台，打包完成`)
    } catch (e) {
        s.fail(`${name} 平台，打包失败`)
        console.error(`失败原因: ${e.toString()}`)
    }
}

start(runTask, false)
