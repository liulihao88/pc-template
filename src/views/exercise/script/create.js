const inquirer = require("inquirer")
const fs = require("fs-extra")
const ora = require("ora")
const exists = async filePath => await fs.access(filePath).then(() => true).catch(_ => false)

async function start() {

    const {name} = await inquirer.prompt([
        {
            type: 'input',
            message: `请输入您想创建的子项目名称:`,
            name: 'name',
            validate: function (name) {
                const done = this.async()
                if (!name) {
                    done('子项目名称不能为空')
                    return
                }
                done(null, true)
            }
        }
    ])
    const s = ora().start(`子项目: ${name}，开始创建`)
    try {
        let isExists = await exists(`./packages/${name}`)
        s.stop()
        if (isExists) {
            const {next} = await inquirer.prompt([
                {
                    type: 'list',
                    message: `子项目: ${name} 存在同名目录，是否继续？`,
                    name: 'next',
                    choices: [
                        {name: '否', value: 0},
                        {name: '是', value: 1},
                    ]
                }
            ])
            if (next === 0) {
                return false
            }
        }
        let {templateName} = await inquirer.prompt([
            {
                type: 'list',
                message: `请选择项目模板？`,
                name: 'templateName',
                default: 0,
                choices: [
                    {name: 'vue', value: 0},
                    {name: 'react', value: 1},
                ]
            }
        ])
        templateName = templateName === 0 ? "vue-template" : "react-template"
        s.start()
        fs.ensureDirSync(`./packages/${name}`)
        fs.copySync(`./template/${templateName}`, `./packages/${name}`)
        fs.readFile(`./packages/${name}/package.json`, "utf-8").then(data => {
            let str = data.toString()
            str = str.replace("space", name)
            fs.writeFile(`./packages/${name}/package.json`, str, () => {
                setTimeout(() => {
                    s.succeed(`子项目: ${name}，创建完成!`)
                }, 2000)
            })
        })
    } catch (e) {
        s.fail(`子项目: ${name}，创建失败`)
        console.error(`失败原因: ${e.toString()}`)
    }
}

start()
