import { createWriteStream } from "fs"
import ora from "ora"
import fetch from "node-fetch"

import { throwHugErrorMsg } from "./message"

export const download = (url: string, savePath: string) => {
    const tmpPath = savePath + ".tmp"
    const spinner = ora("Download the template files")

    // 文件流
    const fileStream = createWriteStream(tmpPath)
        .on("error", (e: Error) => {
            spinner.fail()
            console.log(throwHugErrorMsg(e.message))
            return
        })
        .on("ready", () => {
            // 开始下载文件
            spinner.start()
        })
        .on("finish", () => {
            // TODO 下载完成动作
            spinner.succeed()
        })

    // 请求文件
    fetch(url, {
        method: "GET",
        headers: { "Content-Type": "application/octet-stream" },
    }).then(res => {
        const fSize = res.headers.get("content-length")
    })
}
