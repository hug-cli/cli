import commonjs from "@rollup/plugin-commonjs"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import babel from "@rollup/plugin-babel"
import json from "@rollup/plugin-json"

import pkg from "./package.json"

const extensions = [".ts", ".js"]

export default {
    input: "./src/cli.ts",
    extends: ["node"],

    plugins: [
        json(),
        // Allows node_modules resolution
        nodeResolve({ extensions, preferBuiltins: true }),

        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs({ ignoreDynamicRequires: true }),

        // Compile TypeScript/JavaScript files
        babel({ extensions, babelHelpers: "runtime", include: ["src/**/*"] }),
    ],

    output: {
        file: pkg.main,
        format: "cjs",
        banner: "#!/usr/bin/env node",
    },
}
