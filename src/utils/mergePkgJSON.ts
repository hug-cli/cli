import fs from "fs"
import path from "path"

export const deepMerge = (o: any, t: any) => {
    if (
        typeof o === "object" &&
        typeof t === "object" &&
        !(o instanceof Array)
    ) {
        let tmp = {}
        const ks = [...new Set([...Object.keys(o), ...Object.keys(t)])]
        for (let k of ks) {
            tmp[k] = deepMerge(o[k], t[k])
        }
        return tmp
    } else {
        if (!!t) {
            return t
        }
        return o
    }
}

/**
 * TODO: Should be tested
 * Merge the specified fields from hug.json to package.json
 * @param fields
 */
export const mergePkgJSON = (fields: Array<string>) => {
    // 合并指定字段的 package.json
    const p = path.join(__dirname, "package.json")
    const p_hug = path.join(__dirname, "hug.json")
    const pkg = JSON.parse(fs.readFileSync(p).toString())
    const hug = JSON.parse(fs.readFileSync(p_hug).toString())

    let new_pkg = pkg

    for (let k in pkg) {
        if (fields.includes(k)) {
            new_pkg[k] = deepMerge(pkg[k], hug[k])
        }
    }

    return new_pkg
}

/**
 * Manually remove hug.json file in current path
 */
export const removeHugJSON = () => {
    const p_hug = path.join(__dirname, "hug.json")
    if (fs.existsSync(p_hug)) {
        fs.rmSync(p_hug)
    }
}
