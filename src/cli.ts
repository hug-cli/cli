import { Command } from "commander"
import { version } from "../package.json"
import { runLint } from "./actions/runLint"
import { runLintAdd } from "./actions/runLintAdd"
import { runNewCommit } from "./actions/runNewCommit"
import { runNewProject } from "./actions/runNewProject"

const cli = new Command()

cli.name("hug").version(version)

// Initial a new project
cli.command("new [filename]")
    .alias("n")
    .description("Initial a new project")
    .action((filename: string) => {
        runNewProject(filename.trim())
    })

// Add lint tool
cli.command("lint [action]")
    .description("Add lint tool for project")
    .action((action: string) => {
        switch (action) {
            case "add": {
                runLintAdd()
                break
            }

            default: {
                runLint()
                break
            }
        }
    })

// Standard commit
cli.command("commit")
    .description("Add commit for the git project")
    .action(() => {
        runNewCommit()
    })

// Handle argv
cli.parse(process.argv)
