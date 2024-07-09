import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//configurar Handlebars para leer el contenido de los endpoints

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))

let food = [
    { name: "Hamburguesa", price: "1000" },
    { name: "Pizza", price: "2000" },
    { name: "Lomo", price: "3000" }
]

// Ruta que no deberia estar aca
app.get('/', (req, res) => {
    let testUser = {
        name: "Keyla",
        last_name: "Muñoz",
        role: "admin"
    }

    res.render('index', {
        user: testUser,
        isAdmin: testUser.role === "admin",
        food
    })
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
