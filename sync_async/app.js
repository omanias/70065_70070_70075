// ARROW FUNCTIONS

const saludar = () => {
    console.log("Hi backend developers")
}
// saludar()

const sumar = (a, b) => {
    return a + b
}
// console.log(sumar(3, 8))

// FUNCIONES CON UNA SOLA EXPRESION

const duplicar = (num) => num * 2

// console.log(duplicar(5))

// FUNCIONES COMO METODOS EN UN OBJETO

const persona = {
    nombre: "Carlos",
    edad: 85,
    saludar: function () {
        console.log(`Hola, mi nombre es ${this.nombre}`)
    }
}

// persona.saludar()

// CALLBACKS

function obtenerDatosDelUsuario(id, callback) {
    setTimeout(() => {
        const usuario = {
            id: id,
            nombre: "Coder",
            email: "coder@house.com"
        }
        callback(usuario)
    }, 5000);
}

function mostrarDatosDelUsuario(usuario) {
    console.log(`Nombre: ${usuario.nombre}, Email: ${usuario.email}`)
}


// obtenerDatosDelUsuario(123, mostrarDatosDelUsuario)

// CALLBACK HELL

/*
obtenerDatosDelUsuario(function(resultado)){
    procesarDatos(resultado1, function(resultados2){
        realizarOtra Operacion(resultado2, function(resultado3))
        })
}
*/

// PROMISES

/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        const respuesta = false

        if (respuesta) {
            resolve("Respuesta exitosa")
        } else {
            reject("Ocurrió un error")
        }
    }, 5000);
})

promesa.then((mensaje) => {
    console.log("Éxito", mensaje)
}).catch((error) => {
    console.log("Error", error)
}) */


/*
funciones asincronas solamente cuando necesito traer externos desde la DB (async-await)
try-catch solo para el manejo de errores

async const getUser=(id)=>{
    let user = await getById(user.id)
    try... consiguió la info
    catch... si no existe informacion de la DB
}
*/

// HANDS ON LAB

function suma(a, b) {
    return new Promise((resolve, reject) => {
        if (a === 0 || b === 0) {
            reject("Operación innecesaria")
        } else if (a + b < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(a + b)
        }
    })
}

function resta(minuendo, sustraendo) {
    return new Promise((resolve, reject) => {
        if (minuendo === 0 || sustraendo === 0) {
            reject("Operación inválida")
        } else if (minuendo - sustraendo < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(minuendo - sustraendo)
        }
    })
}

function multiplicacion(factor1, factor2) {
    return new Promise((resolve, reject) => {
        if (factor1 < 0 || factor2 < 0) {
            reject("La calculadora solo debe devolver valores positivos")
        } else {
            resolve(factor1 * factor2)
        }
    })
}

function division(dividendo, divisor) {
    return new Promise((resolve, reject) => {
        if (divisor === 0) {
            reject("No se puede dividir por cero")
        } else {
            resolve(dividendo / divisor)
        }
    })
}

// Funcion asincrona para realizar los calculos

async function calculos() {
    try {
        const resultadoSuma = await suma(5, 8)
        console.log("Resultado SUMA", resultadoSuma)
        const resultadoResta = await resta(10, 7)
        console.log("Resultado RESTA", resultadoResta)
        const resultadoMultiplicacion = await multiplicacion(4, 8)
        console.log("Resultado MULTIPLICACION", resultadoMultiplicacion)
        const resultadoDivision = await division(10, 2)
        console.log("Resultado DIVISION", resultadoDivision)

    } catch (error) {
        console.log("Error", error)
    }
}

calculos()
