import { Router } from 'express'
import CustomError from '../services/errors/CustomError.js'
import EErrors from '../services/errors/enums.js'
import { generateUserErrorInfo } from '../services/errors/info.js'

const users = []
const router = Router()

router.get("/", (req, res) => {
    res.send({ status: "success", payload: users })
})

router.post("/", (req, res) => {
    const { first_name, last_name, age, email } = req.body
    if (!first_name || !last_name || !email) {
        CustomError.createError({
            name: "Error al crear el usuario",
            cause: generateUserErrorInfo({ first_name, last_name, age, email }),
            message: "Error al intentar crear un usuario",
            code: EErrors.INVALID_TYPES_ERROR
        })
    }

    const user = {
        first_name,
        last_name,
        age,
        email
    }
    if (users.length === 0) {
        user.id = 1
    } else {
        user.id = users[users.length - 1].id + 1
    }
    users.push(user)
    res.send({ status: "success", payload: user })
})

export default router