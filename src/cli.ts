import { Command } from "commander"
import { version } from "../package.json"
import { runNewProject } from "./actions/runNewProject"

const cli = new Command()

cli.name("hug").version(version)

// Initial a new project
cli.command("new")
    .alias("n")
    .description("initial a new project")
    .action(() => {
		runNewProject()
	})

// Handle argv
cli.parse(process.argv)
