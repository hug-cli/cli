import { Command } from "commander"
import { version } from "../package.json"
import { runNewProject } from "./actions/runNewProject"

const cli = new Command()

cli.name("hug").version(version)

// Initial a new project
cli.command("new")
    .alias("n")
    .description("Initial a new project")
    .action(() => {
        runNewProject()
    })

// TODO Add lint tool
cli.command("lint")
    .description("Add lint tool for project")
    .action(() => {
        // TODO 添加lint
    })

// Standard commit
cli.command("commit")
    .description("Add commit for the git project")
    .action(() => {
        // TODO 启动 commit
    })

// Handle argv
cli.parse(process.argv)
