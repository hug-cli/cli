import { bgLightCyan, bgLightRed, lightRed, white } from "kolorist"

export const throwHugErrorMsg = (msg: string) => {
    return `${bgLightRed(white("Hug Error:"))}  ${lightRed(msg)}`
}

export const showHugMsg = (msg: string) => {
    return `${bgLightCyan(white(msg))}`
}
