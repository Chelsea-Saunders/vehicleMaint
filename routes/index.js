const express = require('express');
const router = express.Router();
const  { ensureAuth, ensureGuest } = require('../middleware/auth');
require ('../middleware/auth');

router.get('/', ensureGuest, (req, res) => {
res.send('Login or landing page here');
});

router.get('/login', ensureGuest, (req, res) => {
    res.send('Login page here');
});

router.get('/dashboard', ensureAuth, (req, res) => {
    res.send(`Welcome ${req.user.displayName}`);
});

module.exports = router;