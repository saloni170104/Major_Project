const express = require("express");
const router = express.Router();

const { islogedIn, isOwner } = require("../middleware.js");

// Here is wrapAsync function reqiure code
const wrapAsync = require("../utils/wrapAsync.js")
    ;
const Listing = require("../Models/Listing.js");

// Here is requiring our ExpressErr class
const ExpressErr = require("../utils/ExpressErr.js");

// here is requiring listingSchema
const { listingSchema } = require("../schema.js");
const listingController = require("../controller/listings.js");

const multer  = require('multer')
const {storage}=require("../cloudConfig.js");
const upload = multer({storage})
// const upload = multer({ dest: 'uploads/'})


// here is middileware function for validatelisting which can be pass in every methods like get,post ,patch

const validatelisting = (req, res, next) => {
    console.log(req.body);
    const { error } = listingSchema.validate(req.body);
    if (error) {
        throw new ExpressErr(400, error)
    } else {
        next();
    }
}


// for diplaying all list <-- index route -->

router.get("/", wrapAsync(listingController.index));

// for displaying paricular section of listing

router.get("/parti/:category", wrapAsync(listingController.showpartisectlist))

// for showing new form for adding new list

router.get("/new", islogedIn, listingController.renderNewform)

// for displaying single list (show route)

router.get("/:id", wrapAsync(listingController.showlisting));


// for adding new list in database

router.post("/", islogedIn,upload.single("listing[image]"),wrapAsync(listingController.createListing))



// for showing details for edit option

router.get("/:id/edit", islogedIn, isOwner, wrapAsync(listingController.renderEditform))


// here is put request for updating list data

router.patch("/:id", islogedIn, isOwner,upload.single("listing[image]"), validatelisting, wrapAsync(listingController.editListing));

// delete request

router.delete("/delete/:id", islogedIn, isOwner, wrapAsync(listingController.deleteListing));

module.exports = router;