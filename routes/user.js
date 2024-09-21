const express = require("express");
const router = express.Router({ mergeParams: true });

const User = require("../Models/User.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { addredirectUrl } = require("../middleware.js");
const usersController= require("../controller/user.js");

router.get("/signUp",usersController.signUpFormRender);

router.post("/signUp", wrapAsync(usersController.usersignedUp));

router.get("/login", usersController.loginFormRender);

router.post("/login", addredirectUrl, passport.authenticate("local", { failureRedirect: '/User/login', failureFlash: true }),
    usersController.userloggedIn)

router.get("/logout", usersController.userlogOut);

module.exports = router;