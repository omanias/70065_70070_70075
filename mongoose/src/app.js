const express = require("express")
const mongoose = require("mongoose")
const userRouter = require("./routes/users.router.js")


const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://1234562024:1234562024@cluster0.3lmci0d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

    .then(() => {
        console.log("Conectado a la base de datos")
    })
    .catch(error => {
        console.error("Error al conectar con la base de datos", error)
    })

app.use("/", userRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
