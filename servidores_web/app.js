const express = require("express")
const app = express()

const PORT = 8080

// Middlewares
app.use(express.urlencoded({ extended: true }))


const alumnos = [
    { id: "1", nombre: "Fabio" },
    { id: "2", nombre: "Felipe" },
    { id: "3", nombre: "Micaela" },
    { id: "4", nombre: "Daniel" },
    { id: "5", nombre: "Fede" },
    { id: "6", nombre: "Miguel" },
    { id: "7", nombre: "Kevin" },
    { id: "8", nombre: "Nicolas" },
    { id: "9", nombre: "Alan" },
    { id: "10", nombre: "Juan" },
]

app.get("/alumnos/:idAlumno", (req, res) => {
    let idAlumno = req.params.idAlumno

    let alumno = alumnos.find(a => a.id === idAlumno)
    /*     if (!alumno) {
            return res.send({ error: "No se encuentra el alumno solicitado" })
        } else {
            res.send({ alumno })
        } */

    if (!alumno) return res.send({ error: "No se encuentra el alumno solicitado" })
    res.send({ alumno })
})

app.get("/alumnos", (req, res) => {
    let limit = parseInt(req.query.limit)

    let limitedAlumnos = [...alumnos]

    if (!isNaN(limit) && limit > 0) {
        limitedAlumnos = limitedAlumnos.slice(0, limit) // Limitar la cantidad de alumnos del parametro LIMIT
    }

    res.json(limitedAlumnos)

})




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})