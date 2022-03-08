import { createWriteStream } from "fs"
import ora from "ora"
import fetch from "node-fetch"
import * as progressStream from "progress-stream"

import { throwHugErrorMsg } from "./message"

/**
 * download from remote
 * @param url remote
 * @param savePath local path
 */
export const download = (name: string, url: string, savePath: string) => {
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
        const fSize = parseFloat(res.headers.get("content-length"))

        let progress = progressStream({
            length: fSize,
            time: 100
        })

        progress.on("progress", (data) => {
            let percent = Math.round(data.percentage) + `%`
            console.log(`${name} downloading: ${percent}`)
        })

        res.body.pipe(progress).pipe(fileStream)
    }).catch(e => {
        console.log(throwHugErrorMsg(e.message))
    })
}
