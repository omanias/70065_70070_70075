import express from 'express'
import jwt from 'jsonwebtoken'
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Middleware para validacion de politicas

const handlePolicies = (policies) => {
    return (req, res, next) => {
        if (policies.includes("PUBLIC")) {
            next()
        } else {
            const token = req.headers.authorization
            if (!token) {
                return res.status(401).json({ message: "Token no ha sido proporcionado" })
            }

            try {
                const decoded = jwt.verify(token.split(" ")[1], "coderSecret")
                if (policies.includes(decoded.role)) {
                    next()
                } else {
                    return res.status(403).json({ message: "Acceso denegado por politicas insuficientes" })
                }
            } catch (error) {
                return res.status(401).json({ message: "Token de autorizacion inválido" })
            }
        }
    }
}


const sessionRouter = express.Router()

sessionRouter.post("/login", (req, res) => {
    //Hardcoderar el user
    const user = { id: 1, username: "usuario", role: "user" }
    const token = jwt.sign(user, "coderSecret", { expiresIn: '1h' })
    res.json({ token })
})

const userRouter = express.Router()

// Ruta privada para usuarios con token de privilegio
userRouter.get("/user", handlePolicies(["user"]), (req, res) => {
    res.json({ message: "Acceso a ruta exitoso" })
})

userRouter.get("/public", handlePolicies(["PUBLIC"]), (req, res) => {
    res.json({ message: "Acceso a ruta publica exitoso" })
})

app.use("/session", sessionRouter)
app.use("/user", userRouter)


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})