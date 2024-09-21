const express=require("express");
const route=express.Router({mergeParams : true});

const Listing = require("../Models/Listing");
const Review = require("../Models/Review.js");
const { reviewSchema } = require("../schema.js");
const ExpressErr = require("../utils/ExpressErr.js");
const wrapAsync = require("../utils/wrapAsync.js");
const { islogedIn, isreviewAuthor } = require("../middleware.js");
const reviewController = require("../controller/reviews.js");



// here is middileware function for validatereview which can be pass in every methods like get,post ,patch
const validatereview = (req, res, next) => {
    const { error } = reviewSchema.validate(req.body.review);

    if (error) {
        throw new ExpressErr(400, error)
    } else {
        next();
    }
}

// here is post request for adding review in database

route.post("/",islogedIn,validatereview, wrapAsync(reviewController.createReview));

// here is delete request for deleting comment from list

route.delete("/:reviewid",islogedIn,isreviewAuthor, wrapAsync(reviewController.deleteReview));

module.exports=route;