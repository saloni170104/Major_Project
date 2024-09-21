const User = require("../Models/User.js");


module.exports.signUpFormRender =  (req, res) => {
    res.render("Users/signUp.ejs");
}

module.exports.usersignedUp = async (req, res, next) => {
    try {
        let { username, password, email } = req.body;
        let user = new User({
            username: username,
            email: email
        })
        let registerdUser = await User.register(user, password);
        req.login(registerdUser, (err) => {
            if (err) {
                return next(err)
            }
            req.flash("success", "Welcome to Roam&Round !!");
            res.redirect("/listings");
        })
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/User/signUp");
    }
}

module.exports.loginFormRender = (req, res) => {
    res.render("Users/login.ejs")
}

module.exports.userloggedIn = (req, res) => {

    req.flash("success", "Welcome back to Roam&Round");

    let redirectUrl=res.locals.redirectUrl || "/listings";
    res.redirect(redirectUrl);
}

module.exports.userlogOut = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err)
        }
        req.flash("success", "You are Logged Out !!");
        res.redirect("/listings");
    })
};