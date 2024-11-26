import cluster from 'cluster'

// console.log(cluster.isPrimary)

/* if (cluster.isPrimary) {
    console.log("Proceso primario, generando proceso trabajador")
    cluster.fork()
}
else {
    console.log("Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary=false. ¡Entonces soy un worker!")
} */

/**/

import { cpus } from 'os'
/* 

const nroDeProcesadores = cpus().length
console.log(nroDeProcesadores) */

/**/

const nroDeProcesadores = cpus().length

if (cluster.isPrimary) {
    console.log("Proceso primario, generando proceso trabajador")
    for (let i = 0; i < nroDeProcesadores; i++)
        cluster.fork()
}
else {
    console.log("Al ser un proceso forkeado, no cuento como primario, por lo tanto isPrimary=false. ¡Entonces soy un worker!")
    console.log(`Soy un proceso worker con el ID: ${process.pid}`)
}