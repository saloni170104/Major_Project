
const mongoose = require('mongoose');
let initdata = require("./data.js")
const Listing = require('../Models/Listing')

main()
  .then((val) => console.log(val))
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Roam&Round');
}

const initdb = async () => {

  await Listing.deleteMany({});

  initdata=initdata.map((obj) => ({ ...obj, owner: "66ea965cd16ae52fb198e537"}))
  let data = await Listing.insertMany(initdata);
  console.log("Data was Inserted");
}

initdb();