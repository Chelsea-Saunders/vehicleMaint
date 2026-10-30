const express = require('express');
const router = express.Router();
const passport = require('passport');

// @desc Auth with Gooogle
router.get('/google',passport.authenticate('google', 
    { scope: ['profile', 'email'] }));


// @desc google oauth callback
//@route GET /auth/google/callback
router.get(
    '/google/callback', 
    passport.authenticate('google', { failureRedirect: '/login'}), 
    (req, res) => {
    res.redirect('/dashboard')
    }
)

//@desc logout user
//@ route. /auth/logout
router.get('/logout', (req, res, next) => {
    req.logout((err) => {
        if(err) { return next(err); }
        req.session.destroy(() => {
            res.redirect('/');
        });
    });
});

module.exports = router;
