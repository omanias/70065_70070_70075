import express from 'express'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import FileStore from 'session-file-store'
import MongoStore from 'connect-mongo'

const fileStorage = FileStore(session)

const app = express()
const PORT = 8080


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://ojmanias1985:1234562024@cluster0.bxjfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        mongoOptions: {},
        ttl: 15
    }),
    secret: "abc123",
    resave: false,
    saveUninitialized: false
}))


app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`<p>Visitas: ${req.session.views}</p>`);
    } else {
        req.session.views = 1;
        res.send('Bienvenido a la página por primera vez! Actualiza para contar las visitas.');
    }
    console.log('Sesión:', req.session);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

