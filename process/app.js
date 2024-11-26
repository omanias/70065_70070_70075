// console.log(process.cwd())
// console.log(process.pid)
// console.log(process.memoryUsage())
// console.log(process.version)

// console.log(process.argv.slice(2))

/* import { Command } from 'commander'

const program = new Command()

program
    .option('-d', 'Variable de desarrollo', false)
    .option('-p <port>', 'puerto del servidor', 8080)

program.parse()

console.log("Options", program.opts()) */

/* import config from './config.js'

console.log(config) */

/* process.loadEnvFile()

console.log(process.env.PORT)
console.log(process.env.MONGO_URL) */


function listNumbers(...numbers) {
    const types = numbers.map(num => typeof num)
    if (types.some(type => type !== 'number')) {
        console.error("Parametro inválido", types)
        process.exit(-4)
    }
}

process.on("exit", (code) => {
    if (code === -4) {
        console.log("Proceso finalizado por argumentacion inválida en la función")
    }
})

listNumbers(1, 2, "a", true)