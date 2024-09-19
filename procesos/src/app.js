// console.log(process.pid)
// console.log(process.version)
// console.log(process.memoryUsage)
// console.log(process.cwd())

// console.log(process.argv.slice(2))

// console.log(process.argv.slice(2))

// console.clear()

/*  */
// console.log("Demas argumentos", program.args)

import { Command } from 'commander'
import config from "./config/config.js";
import dotenv from "dotenv"


const program = new Command()

program
    .option("-d", "Variable de desarrollo", true)
    .option("-p", "Variable de produccion", true)

const environment = "PRODUCTION"
dotenv.config({
    path: environment === "DEVELOPMENT" ? './env.development' : './env.production'
})

console.log(environment)