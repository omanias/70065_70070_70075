// Operador exponencial

/* let resultado = 2 ** 3
let base = 5
let exponente = 2
let resultado2 = base ** exponente
console.log(resultado2) */

// Includes

// const numeros = [2, 3, 45, 8, 10]

// console.log(numeros.includes(9))

// find numero[] === 9

// let numero = "3"
// == 3 simplemente evalua el valor
// === evalua el valor y el tipo de dato

// console.log(typeof numero)


/* let bebidas = ["cafe", "agua", "mates"]

console.log(bebidas.includes("gaseosa")) */

/* find => solo el primer elemento que encuentre
filter => retorna todos los elementos que cumplen con lo solicitado */

// Operador Nullish(??)

/* const nombre = undefined
const nombreXDefecto = "Coderhouse"
const nombreCompleto = nombre ?? nombreXDefecto

console.log(nombreCompleto) */


// Object.entries - Object.values - Object.keys
/* const persona = {
    nombre: "Coderhouse",
    edad: 30,
    ciudad: "Córdoba"
}

const entradas = Object.entries(persona)
const valores = Object.values(persona)
const claves = Object.keys(persona)
console.log(claves) */

// Finally

/* function ejemploPromesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = false
            if (exito) {
                resolve("Éxito")
            } else {
                reject("Error")
            }
        }, 5000)
    })
}

ejemploPromesa()
    .then((resultado) => {
        console.log(resultado)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log("La promesa ha sido finalizada")
    })
 */


class TicketManager {
    constructor() {
        this.eventos = []
        this.precioBaseDeGanancias = 0
    }

    getEventos() {
        return this.eventos
    }

    agregarEvento(nombre, lugar, precio, capacidad = 50, fecha = new Date()) {
        precio += precio * 0.15
        const evento_id = this.eventos.length + 1
        const participantes = []
        const evento = {
            id: evento_id,
            nombre,
            lugar,
            precio,
            capacidad,
            fecha,
            participantes
        }

        this.eventos.push(evento)
    }

    agregarUsuario(evento_id, usuario_id) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento no fué encontrado")
            return
        }
        const participantes = evento_encontrado.participantes
        const usuarioRegistrado = participantes.includes(usuario_id)
        if (usuarioRegistrado) {
            console.log("El usuario ya está registrado en el evento")
            return
        }

        participantes.push(usuario_id)
        console.log("El usuario ha sido agregado al evento")
    }


    ponerEventoEnGira(evento_id, nueva_localidad, nueva_fecha) {
        const evento_encontrado = this.eventos.find((evento) => evento.id === evento_id)
        if (!evento_encontrado) {
            console.log("El evento con el ID proporcionado no existe")
            return
        }

        const evento_copiado = { ...evento_encontrado }
        evento_copiado.id = this.eventos.length + 1
        evento_copiado.lugar = nueva_localidad
        evento_copiado.fecha = nueva_fecha
        evento_copiado.participantes = []

        this.eventos.push(evento_copiado)
        console.log("El evento ha sido puesto en gira correctamente")
    }
}

const ticketManager = new TicketManager()

//Agregar eventos
ticketManager.agregarEvento("Concierto de rock", "Estadio M.A.Kempes", 100, 2000, new Date("2024-07-20"))
ticketManager.agregarEvento("Concierto de pop", "Cancha de Belgrano", 200, 1000, new Date("2024-08-20"))

const eventos = ticketManager.getEventos()

ticketManager.agregarUsuario(1, "usuario1")
ticketManager.agregarUsuario(2, "usuario2")
ticketManager.agregarUsuario(1, "usuario3")

ticketManager.ponerEventoEnGira(1, "Microestadio Talleres", new Date("2024-09-20"))

const eventosActualizados = ticketManager.getEventos()
console.log(eventosActualizados)
