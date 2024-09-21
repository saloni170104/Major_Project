const Listing = require("./Models/Listing");
const Review = require("./Models/Review");

module.exports.islogedIn = (req,res,next)=>{
    // console.log(req.path ,"------",req.originalUrl);
    if(!req.isAuthenticated()){
        req.session.redirectUrl=req.originalUrl;
        req.flash("error","first logged in !!");
        return res.redirect("/User/login");
    }
    next();
}

module.exports.addredirectUrl = (req,res,next)=>{

    if(req.session.redirectUrl){
        res.locals.redirectUrl=req.session.redirectUrl;
    }
    next();
}

module.exports.isOwner= async (req,res,next)=>{
    let { id } = req.params;
    let list=await Listing.findById(id);
    if(list.owner && ! (list.owner._id.equals(res.locals.currUser._id))){
        req.flash("error" ,"You are not the owner of listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isreviewAuthor= async (req,res,next)=>{
    let { id,reviewid } = req.params;
    let review=await Review.findById(reviewid);
    if(review.author && ! (review.author._id.equals(res.locals.currUser._id))){
        req.flash("error" ,"You are not the author of the review");
        return res.redirect(`/listings/${id}`);
    }
    next();
}
