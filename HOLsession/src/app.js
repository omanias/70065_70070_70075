const express = require('express');
const session = require("express-session")
const handlebars = require("express-handlebars")
const sessionRouter = require("./routes/sessions")
const viewsRouter = require("./routes/views")
const MongoStore = require("connect-mongo")
const path = require('path');

const port = 5000;
const app = express();

app.use(express.urlencoded({ extended: true }))

app.use(session({
    store: MongoStore.create({
        mongoUrl: "mongodb+srv://ojmanias1985:1234562024@cluster0.bxjfm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
        mongoOptions: {
            useNewUrlParser: true,
            useUnifiedTopology: true, // Esto asegura la reconexión automática con el nuevo driver
            retryWrites: true // Habilita la opción de reintentar escrituras fallidas
        },
        ttl: 1000
    }),
    secret: "coderhouse",
    resave: false,
    saveUninitialized: false
}))

app.engine("handlebars", handlebars.engine())
app.set("views", "./src/views")
app.set("view engine", "handlebars")


app.use("/api/sessions", sessionRouter)
app.use("/", viewsRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`));