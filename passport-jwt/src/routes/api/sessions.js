import { Router } from 'express';
import User from '../../models/user.js';
import { createHash, isValidPassword } from '../../utils.js';
import passport from 'passport';

const router = Router();

/* router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({ status: "success", message: "usuario registrado" })
});

router.get('/failregister', async (req, res) => {
    console.log('Estrategia fallida')
    res.send({ error: "Failed" })
})

router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), async (req, res) => {
    // const { email, password } = req.body;
    if (!req.user) return res.status(400).send({ status: "error", error: "Credenciales invalidas" })

    req.session.user = {
        first_name: req.user.first_name,
        last_name: req.user.last_name,
        age: req.user.age,
        email: req.user.email
    }

    res.send({ status: "success", payload: req.user })
});

router.get('/faillogin', (req, res) => {
    res.send("Login fallido")
})

router.post('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) return res.status(500).send('Error al cerrar sesión');
        res.redirect('/login');
    });
}); */


router.get('/github', passport.authenticate('github', { scope: ['user:email'] }), async (req, res) => { })

router.get('/githubcallback', passport.authenticate('github', { failureRedirect: '/login' }), async (req, res) => {
    req.session.user = req.user
    res.redirect('/')
})

export default router;
