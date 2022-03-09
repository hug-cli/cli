import {
    bgLightCyan,
    bgLightRed,
    bgYellow,
    lightCyan,
    lightRed,
    red,
    white,
    yellow,
} from "kolorist"

/**
 * Generate Hug Error Msg
 * @param msg
 * @returns
 */
export const throwHugErrorMsg = (msg: string) => {
    return `${bgLightRed(white("Hug Error:"))}  ${lightRed(msg)}`
}

/**
 * Generate Hug Info Msg
 * @param msg
 * @returns
 */
export const showHugMsg = (msg: string) => {
    return `${bgLightCyan(white(msg))}`
}

/**
 * Generate Hug Commit Msg
 * @param msg
 * @returns
 */
export const showHugCommitMsg = (msg: string) => {
    return `${lightCyan(msg)}`
}

/**
 * Generate Hug Warning Msg
 * @param msg
 * @returns
 */
export const throwHugWarningMsg = (msg: string) => {
    return `${bgYellow(red(`Hug Warning:`))}  ${yellow(msg)}`
}
