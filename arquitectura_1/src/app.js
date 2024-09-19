const express = require("express")
const bodyParser = require("body-parser")
//Rutas
const usersRouter = require("./routes/users.js")

const app = express()
const PORT = 8080

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))

//Configurar las rutas
app.use("/users", usersRouter)


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})