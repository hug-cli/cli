import prompts from "prompts"
import { HugTemplates } from "../constants"

export async function runNewProject() {
    // TODO 生成新的项目
    // 提示填写项目名称
    const { projName } = await prompts({
        type: "text",
        name: "projName",
        message: "Input the project name:",
        initial: "hug-template",
    })
    console.log(projName)
    // 提示选择项目模板
    const { projTemplate } = await prompts({
        type: "select",
        name: "projTemplate",
        message: "Choose the project template:",
        choices: HugTemplates
    })
    console.log(projTemplate)
    // 下载模板文件
    // 提醒下载依赖
}
