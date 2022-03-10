import { defineConfig } from "tsup"

export const tsup = defineConfig({
    entry: ["src/cli.ts"],
    outDir: "bin",
    clean: true,
    format: ["esm"],
    external: ["prompts"],
})
