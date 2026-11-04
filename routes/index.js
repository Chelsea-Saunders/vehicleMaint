const express = require('express');
const router = express.Router();
const  { ensureAuth, ensureGuest } = require('../middleware/auth');
require ('../middleware/auth');

router.get('/', ensureGuest, (req, res) => {
res.send(`
        <h3>Vehicle Mainenance API</h1>
        <p><a href="/auth/google">Login</a></p>
    `)
});

router.get('/login', ensureGuest, (req, res) => {
    res.send(`
        <h3>Login Page</h1>
        <p><a href="/auth/google">Login</a></p>
    `)
});

router.get('/dashboard', ensureAuth, (req, res) => {
    res.send(`
        <h1>Welcome ${req.user.displayName}</h1>
        <p><a href="/auth/logout">Logout</a></p>
    `);
});

module.exports = router;