import prompts from "prompts"
import degit from "degit"
import ora from "ora"

import { remoteLintRepo } from "../utils/remote"
import { throwHugErrorMsg } from "../utils/message"

export async function runLintAdd() {
    const { confirm } = await prompts({
        type: "confirm",
        name: "confirm",
        message: "Comfirm add lint for current project?",
        initial: false
    })

    if (confirm) {
        // BUG
        const spinner = ora("Get lint config from remote")
        spinner.start()
        const emiter = degit(remoteLintRepo, {
            cache: true,
            force: true,
            verbose: true,
        })
        emiter.clone("").then(() => {
            console.log("Done!")
            spinner.succeed("Done!")
        }).catch((e: Error) => {
            spinner.fail(throwHugErrorMsg(e.message))
            console.error(e.message)
        })
        // TODO 下载依赖
    }
}
