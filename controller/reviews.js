const Listing = require("../Models/Listing");
const Review = require("../Models/Review");


module.exports.createReview = async (req, res) => {
    let { id } = req.params;
    let list = await Listing.findById(id);

    let newreview = new Review(req.body.review);
    newreview.author = req.user._id;
    list.reviews.push(newreview);
    await newreview.save();
    await list.save();
    req.flash("success","review is posted");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteReview = async(req, res) => {

    let { id, reviewid } = req.params;
    await Listing.findByIdAndUpdate(id, { $pull: { reviews: reviewid } });
    await Review.findByIdAndDelete(reviewid);
    req.flash("success","review id deleted")
    res.redirect(`/listings/${id}`);
}