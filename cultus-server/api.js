const express = require('express');
const mongoose = require("mongoose");
const localDB = process.env.MONGO_URL;
const passport = require("passport");
const bodyParser = require("body-parser");
const LocalStrategy = require("passport-local");
const { check, validationResult } = require('express-validator')


require('dotenv/config');

//Connect to DB
mongoose.connect(localDB, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    console.log(err)
    mongoose.use
});

app.use(require("express-session")({
    secret: "password",
    resave: false,
    saveUninitialized: false
}));

passport.serializeUser(User.serializeUser());       //session encoding
passport.deserializeUser(User.deserializeUser());   //session decoding
passport.use(new LocalStrategy(User.authenticate()));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded(
    { extended: true }
))

module.exports = connectDB;
app = express();

//user register function with validation
app.post("/register",
    check("username").isLength({ min: 3 }),
    check("email").isEmail(),
    check("password").isStrongPassword(),
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: "The inputed values were Invalid. Pick a valid E-Mail and watch out for the password minimum conditions." });
        }
        User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, function (err, user) {
            if (err) {
                console.log(err);
                res.render("register");
            }
            passport.authenticate("local")(req, res, function () {
                res.redirect("/login");
            })
        })
    })




app.use(express.static(__dirname));

app.post("/login", passport.authenticate("local", {
    successRedirect: "/main",
    failureRedirect: "/login"
}), function (req, res) {

});

app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
});

app.listen(process.env.PORT, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Server Started At Port " + process.env.PORT);
    }

});