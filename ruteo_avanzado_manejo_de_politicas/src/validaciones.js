import express from 'express'
const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const pets = []

//Middleware para validar el nombre de la mascota con letras y espacios

const validatePetName = (req, res, next) => {
    const petName = req.params.pet
    if (/^[a-zA-Z\s]+$/.test(petName)) {
        req.petName = petName
        next()
    } else {
        res.status(400).json({ error: "No nombre de la mascota solo debe contener letras y espacios" })
    }
}

// MIddleware para buscar el nombre de la mascota

const findByName = (req, res, next) => {
    const pet = pets.find((p) => p.name === req.petName)
    if (pet) {
        req.pet = pet
        next()
    } else {
        res.status(404).json({ error: "Mascota no encontrada" })
    }
}

app.post("/", (req, res) => {
    const { name, specie } = req.body
    if (!name || !specie) {
        return res.status(400).json({ error: "Debe proporcionar todos los datos" })
    }

    const newPet = { name, specie }
    pets.push(newPet)
    res.status(201).json(newPet)
})


app.get("/:pet", validatePetName, findByName, (req, res) => {
    res.json(req.pet)
})

app.put("/:pet", validatePetName, findByName, (req, res) => {
    req.pet.adopted = true
    res.json({ message: "Mascota marcada como adoptada" })
})


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})