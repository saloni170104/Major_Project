const { Schema, default: mongoose } = require("mongoose");
const Review = require("./Review");
const { string } = require("joi");

const listSchema=new mongoose.Schema({

    title : {
        type : String,
        required : true
    },
    description : {
        type : String
    },
    image :{
        url : {
            type : String
        },
        filename : {
            type : String
        }
    },
    price : {
        type : Number
    },
    location : {
        type : String
    },
    country : {
        type : String
    },
    reviews : [
        {
            type : Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner : {
        type : Schema.Types.ObjectId,
        ref: "User"
    },
    category : {
        type : String,
        enum : ["Farm","Mountain","Island","Camping","Top Cities","Lake"]
    }
})


listSchema.post("findOneAndDelete",async (list)=>{
    console.log(list);

    if(list.reviews.length){
        await Review.deleteMany({_id : {$in : list.reviews}})
    }
});

const Listing=mongoose.model("Listing",listSchema);

module.exports=Listing;
