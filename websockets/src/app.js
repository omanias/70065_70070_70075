import express from 'express'
import handlebars from 'express-handlebars'
import __dirname from './utils.js'
import viewsRouter from './routes/views.router.js'
import { Server } from 'socket.io'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.engine('handlebars', handlebars.engine())
app.set('views', __dirname + '/views')
app.set('view engine', 'handlebars')
app.use(express.static(__dirname + '/public'))


app.use('/', viewsRouter)
const httpServer = app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

const socketServer = new Server(httpServer)

socketServer.on('connection', socket => {
    console.log("Nuevo cliente conectado")

    socket.on('message', data => {
        console.log(`soy la data ${data}`)
    })
})
