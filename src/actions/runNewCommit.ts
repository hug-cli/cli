import { execa } from "execa"
import prompts from "prompts"
import { HugStandardCommitDefault } from "../utils/constants"
import { showHugCommitMsg, throwHugWarningMsg } from "../utils/message"

const makeCommit = (
    type: string,
    subject: string,
    body: string,
    broken: string,
    issues: string
) => {
    broken = !!broken ? "BREAKING CHANGES" : ""
    return `${type}: ${subject}\n\n${body}\n\n${broken + issues}\n`
}

export async function runNewCommit() {
    const { commitType } = await prompts({
        type: "select",
        name: "commitType",
        message: "Choose commit type:",
        choices: HugStandardCommitDefault
    })

    // 提交简述
    const { commitSubject } = await prompts({
        type: "text",
        name: "commitSubject",
        message: "Input commit subject:",
        validate: subject => !!subject ? true : `Please input commit subject!`
    })

    // 提交详述
    const { commitBody } = await prompts({
        type: "text",
        name: "commitBody",
        message: "Input commit body:",
        initial: "",
    })

    // 是否存在 BREAK CHANGES
    const { commitBroken } = await prompts({
        type: "confirm",
        name: "commitBroken",
        message: "If BREAK CHANGES exist?",
        initial: false,
    })

    // 是否关闭已知issue
    const { commitIssues } = await prompts({
        type: "text",
        name: "commitIssues",
        message: "Close issues? (eg. Fix #1 #2)",
        initial: "",
    })

    // 展示提交信息
    const commit = makeCommit(
        commitType,
        commitSubject,
        commitBody,
        commitBroken,
        commitIssues
    )

    console.log(showHugCommitMsg(commit))

    // 是否确认提交
    const { commitConfirm } = await prompts({
        type: "confirm",
        name: "commitConfirm",
        message: "Confirm commit?",
        initial: true,
    })

    if (commitConfirm) {
        execa("git", ["commit", "-m", commit]).stdout.pipe(process.stdout)
        return
    } else {
        console.log(throwHugWarningMsg(`The commit was canceled by user!`))
        return
    }
}
