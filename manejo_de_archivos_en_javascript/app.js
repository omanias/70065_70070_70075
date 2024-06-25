//Importacion de dependencias, librerias...
// const fs = require('fs') (Para utilizacion de los metodos de manera sincronica)
const fs = require('fs').promises // Para utilizacion de funciones con promesas

/*
writeFileSync = Escritura de un archivo de manera sincronica
readFileSync = Lectura de un archivo de manera sincronica
appendFileSync = Actualizar un archivo de manera sincronica
unlinkSync = Elimina un archivo de manera sincronica
mkdirSync = Crear carpetas de manera sincronica
*/

// const data = "Contenido para escribir en un archivo"

/* try {
    fs.writeFileSync('MiArchivo.txt', data)
    console.log("Archivo creado correctamente")
} catch (error) {
    console.error("Error al escribir el archivo", error);
} */

/* try {
    const data = fs.readFileSync("MiArchivo.txt", "utf8")
    console.log("Contenido para mostrar: ", data)
} catch (error) {
    console.error("Error al leer el archivo", error)
} */

/* const otraInfo = " informacion actualizada para el archivo de texto"

try {
    fs.appendFileSync("MiArchivo.txt", otraInfo)
    console.log("Archivo actualizado con exito")
} catch (error) {
    console.error("Error al actualizar el archivo", error)
} */

/* try {
    fs.unlinkSync("MiArchivo.txt")
    console.log("Archivo eliminado con exito")
} catch (error) {
    console.error("No se puede eliminar el archivo", error)
} */

// Implementacion con Promesas y funciones asincronas



async function readFile() {
    try {
        const data = await fs.readFile("archivo.txt", "utf-8")
        console.log(data)
    } catch (error) {
        console.error("Error al leer el archivo", error)
    }
}


async function writeFile() {
    const data = "Informacion para incluir dentro de mi archivo"
    try {
        await fs.writeFile("archivo.txt", data)
        console.log("Archivo creado")
    } catch (error) {
        console.error("El archivo no se puede escribir", error)
    }
}

async function appendFile() {
    const dataAdicional = "Mas informacion para agregar"
    try {
        await fs.appendFile("archivo.txt", dataAdicional)
        console.log("Informacion actualizada")
    } catch (error) {
        console.error("No se puede actualizar", error)
    }
}

// writeFile()
// readFile()
// appendFile()