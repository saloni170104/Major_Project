
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();
}   

const express = require("express");
const app = express();

const port = 8080;
const path = require("path");

// Requiring express-session Here
const session=require("express-session");
const MongoStore = require('connect-mongo');
const flash=require("connect-flash");

const engine = require('ejs-mate');
app.engine('ejs', engine);

// Here is code for requring passport library for authentication and authorization

const passport=require("passport")
const LocalStrategy=require("passport-local");
const User=require("./Models/User.js");

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "/public")));

const mongoose = require('mongoose');

// Here is requiring router for listings request
const listingsRouter=require("./routes/listings.js");
const reviewsRouter=require("./routes/reviews.js");
const userRouter=require("./routes/user.js");

// Here is requiring our ExpressErr class
const ExpressErr = require("./utils/ExpressErr.js");
const { date } = require("joi");
const { register } = require("module");

// const MongoUrl="Succesfully Connected to DataBase";
const AtlasUrl=process.env.ATLASDB_URL;

main()
    .then(() => {
        console.log("Succesfully Connected to DataBase");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect(AtlasUrl);
}

const store=MongoStore.create({
    mongoUrl : AtlasUrl,
    crypto  : {
        secret : process.env.SECRET
    },
    touchAfter : 24 * 3600
})

store.on("error",()=>{
    console.log("Error Occur in MongoStore",err)
})

// Here is defining session options
const sessionOptions={
    store,
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
}


// here is using session-express middleware
app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req,res,next)=>{
    res.locals.success=req.flash("success");
    res.locals.error=req.flash("error");
    res.locals.currUser=req.user;
    next(); 
})

// app.get("/", (req, res) => {
//     res.send("This is home root")
// })

app.use("/listings",listingsRouter);

app.use("/listings/:id/reviews",reviewsRouter);

app.use("/User",userRouter);  

app.use

app.all("*", (req, res, next) => {
    next(new ExpressErr(404, "Page Not Found error"))
})

// middleware for custom error Handling

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    // res.send("Something went Wrong");
    // res.status(status).send(message);
    res.status(status).render("error.ejs", { message });
})


app.listen(port, () => {
    console.log("App is Listening on the port");
})