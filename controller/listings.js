const Listing = require("../Models/Listing");

module.exports.index = async (req, res) => {
    const allListings = await Listing.find();
    res.render("listings/index.ejs", { allListings })
}

module.exports.renderNewform = (req, res) => {
    res.render("listings/newlist.ejs");
}

module.exports.showlisting = async (req, res) => {
    let { id } = req.params;
    let list = await Listing.findById(id).populate({
        path: "reviews",
        populate: {
            path: "author"
        }
    }).populate("owner");
    if (!list) {
        req.flash("error", "list you searching for doesn't exist");
        res.redirect("/listings");
    }
    res.render("listings/show.ejs", { list });
}

module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    let { category } = req.body;
    // console.log(category);
    let { title, description, price, location, country } = req.body;
    let listdata = new Listing({
        title: title,
        description: description,
        image: "",
        price: price,
        location: location,
        country: country,
        // category : category
    })
    listdata.category=category;
    listdata.owner = req.user._id;
    listdata.image = { url, filename };
    await listdata.save();
    req.flash("success", "New listing Created");
    res.redirect("/listings");
}

module.exports.renderEditform = async (req, res) => {
    let { id } = req.params;

    const list = await Listing.findById(id);
    if (!list) {
        req.flash("error", "list you searching for doesn't exist");
        res.redirect("/listings");
    }
    originalimage=list.image.url;
    mini_pixel_image = originalimage.replace("/upload","/upload/w_250");
    res.render("listings/edit.ejs", { list ,mini_pixel_image});
}

module.exports.editListing = async (req, res, next) => {
    let { id } = req.params;
    let listing = req.body;

    if (!listing) {
        next(new ExpressErr(400, "Invalid Data"))
    }

    let list = await Listing.findByIdAndUpdate(id, { ...listing }, { new: true });

    if (typeof req.file !== "undefined") {
        let url = req.file.path;
        let filename = req.file.filename;

        list.image = { url, filename };
        await list.save();
    }

    req.flash("success", "List is Updated");
    res.redirect(`/listings/${id}`);
}

module.exports.deleteListing = async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndDelete(id);
    req.flash("success", "List is deleted")
    res.redirect("/listings");
}

module.exports.showpartisectlist = async(req,res)=>{
    let category=req.params;
    let listings= await Listing.find({ category : category.category});
    res.render("listings/showsection.ejs",{listings});
}