import prompts from "prompts"

export async function runNewCommit() {
    const { commitType } = await prompts({
        type: "select",
        name: "commitType",
        message: "Choose commit type:",
    })

    // 提交简述
    const { commitSubject } = await prompts({
        type: "text",
        name: "commitSubject",
        message: "Input subject:",
        validate: (subject: string) => {
            if (!!subject) {
                return false
            }

            return true
        },
    })
    // 提交详述
    // 是否存在 BREAK CHANGES
    // 是否关闭已知issue
    // 展示提交信息
    // 是否确认提交
}
