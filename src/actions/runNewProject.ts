import prompts from "prompts"
import { HugProjectTemplates } from "../utils/constants"
import { throwHugErrorMsg } from "../utils/message"

export async function runNewProject() {
    // 提示填写项目名称
    const { projName } = await prompts({
        type: "text",
        name: "projName",
        message: "Input the project name:",
        initial: "hug-template",
    })

    // 特殊字符替换
    const name = (<string>projName).replace(/([\!-\/|\:-\?]+)/g, "-")

    // 提示选择项目模板
    const { projTemplate } = await prompts({
        type: "select",
        name: "projTemplate",
        message: "Choose the project template:",
        choices: HugProjectTemplates,
    })

    // 获取远端地址
    const remote = HugProjectTemplates.filter(
        (item) => item.value === projTemplate
    )

    if (!!remote) {
        console.log(
            throwHugErrorMsg(`Here are no remote template for ${projTemplate}`)
        )
        return
    }

    // 下载模板文件
    // 获取 git 仓库信息
    // 生成 package.json
    // 提醒下载依赖
}
