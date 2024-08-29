import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'

const app = express()
const PORT = 8080

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    secret: 'secretCoder',
    resave: true,
    saveUninitialized: true
}))

/* app.get('/setCookie', (req, res) => {
    res.cookie('CoderCookie', 'soy una cookie', { maxAge: 10000 }).send('Cookie')
})

app.get('/getCookie', (req, res) => {
    res.send(req.cookies)
})

app.get('/deleteCookie', (req, res) => {
    res.clearCookie('CoderCookie').send("Cookie eliminada")
}) */

/* app.get('/session', (req, res) => {
    if (req.session.counter) {
        req.session.counter++
        res.send(`Se ha visitado el sitio ${req.session.counter} veces.`)
    } else {
        req.session.counter = 1
        res.send("Bienvenido")
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (!err) {
            res.clearCookie("connect.sid")
            res.send('Logout OK')
        }
        else res.send({ status: "ERROR AL INTENTAR SALIR", body: err })
    })
}) */

app.get('/login', (req, res) => {
    const { user, password } = req.query
    if (user !== "coder" || password !== "house") {
        res.send("Usuario o contraseña incorrecta")
    } else {
        req.session.user = user
        req.session.admin = true
        res.send("Login OK")
    }
})

function auth(req, res, next) {
    if (req.session?.user === "coder" && req.session?.admin) {
        return next()
    }
    res.status(401).send("No estás autorizado")
}

app.get('/privado', auth, (req, res) => {
    res.send("Bienvenido a la seccion privada")
})

app.get("/logout", (req, res) => {
    req.session.destroy(err => {
        if (!err) {
            res.clearCookie("connect.sid")
            res.send("Logout OK")
        }
        else res.send({ status: "Error", body: err })
    })
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
