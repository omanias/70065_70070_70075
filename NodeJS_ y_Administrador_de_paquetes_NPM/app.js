const crypto = require("crypto")

class UsersManager {

    static Usuarios = []

    // Metodo para crear un nuevo usuario

    static CrearUsuario(usuario) {
        // Hash de la contraseña
        const hashedPassword = crypto.createHash("sha256").update(usuario.password).digest("hex")

        const newUser = {
            nombre: usuario.nombre,
            apellido: usuario.apellido,
            nombreCompleto: usuario.nombreCompleto,
            password: hashedPassword // Para guardar la contraseña hasheada
        }

        // Agregar el usuario al arreglo
        this.Usuarios.push(newUser)
    }

    //Metodo para mostrar todos los usuarios

    static MostrarUsuarios() {
        this.Usuarios.forEach(usuario => {
            console.log(`Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}, Nombre Completo: ${usuario.nombreCompleto}`)
        })
    }


    // Validacion de usuarios -> buscar el usuario y comparar los datos del requerido con los almacenados

    static ValidarUsuario(nombreCompleto, password) {
        const usuario = this.Usuarios.find(u => u.nombreCompleto === nombreCompleto)

        if (!usuario) {
            console.log("Error. Usuario no encontrado")
            return
        }

        const hashedPassword = crypto.createHash("sha256").update(password).digest("hex") // abcde
        console.log(hashedPassword)

        // Comparar las contraseñas

        if (usuario.password === hashedPassword) {
            console.log("Usuarios logueado con éxito")
        } else {
            console.log("Error en la contraseña")
        }
    }
}

UsersManager.CrearUsuario({
    nombre: "Coder",
    apellido: "House",
    nombreCompleto: "CoderHouse",
    password: "123456"
})

UsersManager.CrearUsuario({
    nombre: "Nicolas",
    apellido: "Busso",
    nombreCompleto: "NicolasBusso",
    password: "123456"
})

// Muestra los usuarios almacenados en el arreglo
UsersManager.MostrarUsuarios()

UsersManager.ValidarUsuario("NicolasBusso", "123456") //abcde

