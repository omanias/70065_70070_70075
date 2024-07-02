const express = require("express")

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let tasks = [
    { id: 1, title: "Estudiar metodos" },
    { id: 2, title: "repasar express" },
    { id: 3, title: "realizar un proyecto" }
]

// Endpoints

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.get('/tasks/:id', (req, res) => {
    const taskID = parseInt(req.params.id)
    const task = tasks.find((task) => task.id === taskID)

    if (task) {
        res.json(task)
    } else {
        res.status(404).json({ message: "Tarea no encontrada" })
    }
})

app.post('/tasks', (req, res) => {
    const { title } = req.body
    const newTask = { id: tasks.length + 1, title: title || "Nueva tarea" }
    tasks.push(newTask)
    res.status(201).json(newTask)
})

app.put('/tasks/:id', (req, res) => {
    const taskID = parseInt(req.params.id)
    const task = tasks.find((task) => task.id === taskID)
    if (task) {
        const { title } = req.body
        task.title = title
        res.json(task)
    } else {
        res.status(404).json({ message: "Tarea no encontrada" })
    }
})

app.delete('/tasks/:id', (req, res) => {
    const taskID = parseInt(req.params.id)
    tasks = tasks.filter((task) => task.id !== taskID)
    res.json({ message: `Tarea con id ${taskID} eliminada correctamente` })
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
