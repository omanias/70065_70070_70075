import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Configuracion de Swagger
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API de Usuarios",
            version: "1.0.0",
            description: "Una API CRUD para gestionar usuarios"
        },
        servers: [
            {
                url: `http://localhost:${PORT}`
            }
        ],
    },
    apis: ["./index.js"] // Ruta de los archivos con documentación
}

const swaggerDocs = swaggerJSDoc(swaggerOptions)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))


/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              id:
 *                  type: string
 *                  description: ID del usuario
 *              name:
 *                  type: string
 *                  description: Nombre del usuario
 *              email:
 *                  type: string
 *                  description: Email del usuario
 */

/**
 * @swagger
 * /users:
 *      get:
 *          summary: Obtiene las lista de usuarios
 *          tags: [Users]
 *          responses:
 *              200:
 *                  description: Lista de usuarios
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: array
 *                              items:
 *                                  $ref: '#/components/schemas/User'
 */

app.get("/users", (req, res) => {
    res.json([{ id: "1", name: "Coderhouse", email: "coder@mail.com" }])
})

/**
 * @swagger
 * /users/{id}:
 *  get:
 *      summary: Obtiene un usuario por ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Usuario encontrado
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: "#/components/schemas/User"
 *          404:
 *             description: Usuario no encontrado
 */

app.get("/users/:id", (req, res) => {
    const { id } = req.params
    if (id === "1") {
        res.json({ id: "1", name: "Coderhouse", email: "coder@mail.com" })
    } else {
        res.status(404).json({ message: "Usuario no encontrado" })
    }
})

/**
 * @swagger
 * /users:
 *  post:
 *      summary: Crea un nuevo usuario
 *      tags: [Users]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"
 *      responses:
 *          201:
 *              description: Usuario creado exitosamente
 */

app.post("/users", (req, res) => {
    const user = req.body
    res.status(201).json(user)
})

/**
 * @swagger
 * /users/{id}:
 *  put:
 *      summary: "Actualiza un usuario existente"
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID del usuario
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      $ref: "#/components/schemas/User"  
 *      responses:
 *          200:
 *              description: Usuarios actualizado
 */

app.put("/users/:id", (req, res) => {
    const { id } = req.body
    const updatedUser = req.body
    res.json({ id, ...updatedUser })
})

/**
 * @swagger
 * /users/{id}:
 *  delete:
 *      summary: Elimina un usuario por ID
 *      tags: [Users]
 *      parameters:
 *          - in: path
 *            name: id
 *            schema:
 *              type: string
 *            required: true
 *            description: ID del usuario
 *      responses:
 *          200:
 *              description: Usuario eliminado
 *          404:
 *              description: Usuario no encontrado
 */

app.delete("/users/:id", (req, res) => {
    const { id } = req.params
    res.json({ message: `Usuario con ID ${id} eliminado` })
})


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

