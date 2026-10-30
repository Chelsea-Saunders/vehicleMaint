const passport = require('passport');
const oauth = require('passport-google-oauth20').Strategy;
const User = require('../models/User.js');

module.exports = function(passport) {
    passport.use(
        new oauth(
            {
                clientID: process.env.GOOGLE_CLIENT_ID, 
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: process.env.GOOGLE_CALLBACK
            },
            async (accessToken, refreshToken, Profile, done) => {
                try {
                    let existingUser = await User.findOne({ googleId: Profile.id });
                    if (existingUser) {
                        return done(null, existingUser);
                    }

                    const newUser = await User.create({
                        googleId: Profile.id, 
                        displayName: Profile.displayName,
                        firstName: Profile.name?.givenName, 
                        lastName: Profile.name?.familyName,
                        email: Profile.emails?.[0]?.value
                    });

                    return done(null, newUser);
                } catch (err) {
                    return done(err, null);
                }
            }
        )
    );

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}