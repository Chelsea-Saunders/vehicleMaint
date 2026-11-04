module.exports = {
    ensureAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        res.redirect('/login');
    },

    ensureGuest: function(req, res, next) {
        if(!req.isAuthenticated()) {
            return next()
        }
        res.redirect('/dashboard');
    },

    ensureApiAuth: function(req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        return res.status(401).json({ message: 'Unauthorized.' });
    }
}