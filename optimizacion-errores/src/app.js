import express from 'express'
import usersRouter from './routes/users.js'
import errorHandler from './middlewares/errors/index.js'
// import compression from 'express-compression'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', usersRouter)
app.use(errorHandler)

/* app.use(compression({
    brotli: { enabled: true, zlib: {} }
})) */

/* app.get("/string", (req, res) => {
    let string = `Hola coders, soy un string largo`
    for (let i = 0; i < 100000; i++) {
        string += `Soy un string largo`
    }

    res.send(string)
}) */

app.listen(PORT, () => console.log(`Server running on port PORT`))

