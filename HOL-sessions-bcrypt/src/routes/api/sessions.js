import { Router } from 'express';
import User from '../../models/user.js';
import { createHash, isValidPassword } from '../../utils.js';

const router = Router();

router.post('/register', async (req, res) => {
    const { first_name, last_name, email, age, password } = req.body;
    try {
        const newUser = new User({ first_name, last_name, email, age, password: createHash(password) });
        await newUser.save();
        res.redirect('/login');
    } catch (err) {
        res.status(500).send('Error al registrar usuario');
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) return res.status(400).send({ status: "error", error: "Valores incompletos" })

        const user = await User.findOne({ email }, { email: 1, first_name: 1, last_name: 1, password: 1 });
        if (!user) return res.status(400).send({ status: "error", error: "Usuario no encontrado" });
        if (!isValidPassword(user, password)) return res.status(403).send({ status: "error", error: "Password incorrecto" })
        delete user.password
        req.session.user = user
    } catch (error) {
        console.error(error)
    }
    res.redirect('/profile');
});

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión');
        res.redirect('/login');
    });
});

export default router;
