import { execa } from "execa"

export async function runLint() {
    // lint the code
    execa("eslint", ["--fix", "--ext", "src/**/*.ts"]).stdout.pipe(
        process.stdout
    )
}
