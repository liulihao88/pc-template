const inquirer = require("inquirer")
const fs = require("fs-extra")
const ora = require("ora")
const exists = async filePath => await fs.access(filePath).then(() => true).catch(_ => false)

async function start() {
    const {template} = await inquirer.prompt([
        {
            type: 'list',
            message: `请选择页面类型:`,
            name: 'template',
            choices: [
                {name: '列表', value: 'list-template'},
                {name: '详情', value: 'detail-template'},
            ]
        }
    ])
    const {name} = await inquirer.prompt([
        {
            type: 'input',
            message: `请输入您想创建的页面（eg：baseweb user/user-list）:`,
            name: 'name',
            validate: function (name) {
                const done = this.async()
                if (!name) {
                    done('页面名称不能为空')
                    return
                }
                done(null, true)
            }
        }
    ])
    const [package, page] = name.split(" ")
    const lastName = page.split("/").reverse()[0]
    const pagePath = `./packages/${package}/src/pages/${page}.vue`
    const routerPath = `./packages/${package}/src/router/${page}.js`
    const pageConfigPath = `./packages/${package}/src/pages/${page}-config`
    const apiPath = `./api/services/modules/${package}/${page}.js`
    const apiConfigPath = `api/services/modules/${package}/${page}.js`
    const s = ora().start(`页面: ${pagePath}，开始创建`)
    try {
        let isExists = await exists(pagePath)
        s.stop()
        if (isExists) {
            s.fail(`页面: ${pagePath}，存在同名页面，创建失败`)
            return false
        }
        s.start()
        fs.ensureFile(pagePath)
        fs.ensureFile(routerPath)
        fs.ensureFile(apiPath)
        fs.ensureDirSync(pageConfigPath)

        let pageContent = await fs.readFile(`./template/${template}/page.vue`, "utf-8")
        let pageStr = pageContent.toString()
        pageStr = pageStr.replace("configName", lastName).replace("apiConfigPath", apiConfigPath)
        fs.writeFile(pagePath, pageStr)

        let routerContent = await fs.readFile(`./template/${template}/router.js`, "utf-8")
        let routerStr = routerContent.toString()
        routerStr = routerStr.replace("nameAlias", lastName).replaceAll("pageAlias", page)
        fs.writeFile(routerPath, routerStr)

        let apiContent = await fs.readFile(`./template/${template}/api.js`, "utf-8")
        let apiStr = apiContent.toString()
        fs.writeFile(apiPath, apiStr)

        fs.copy(`./template/${template}/pageConfig`, pageConfigPath, async err => {
            let tableContent = await fs.readFile(`${pageConfigPath}/table.js`, "utf-8")
            let tableStr = tableContent.toString()
            tableStr = tableStr.replace("apiConfigPath", apiConfigPath)
            fs.writeFile(`${pageConfigPath}/table.js`, tableStr)

            setTimeout(() => {
                s.succeed(`页面: ${pagePath}，创建完成!`)
            }, 2000)
        })


    } catch (e) {
        s.fail(`页面: ${package}/src/pages/${name}.vue，创建失败`)
        console.error(`失败原因: ${e.toString()}`)
    }
}

start()
