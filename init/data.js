let initdata = [
  {
    title: "Sunny Farmhouse",
    description: "A beautiful farmhouse located in the sunny plains, perfect for family vacations.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-657011800148868945/original/a1083c29-58e1-4acf-b79d-14da9dad3d26.jpeg?im_w=720",
      filename: "sunnyfarmhouse.jpg"
    },
    price: 150,
    location: "California",
    country: "USA",
    category: "Farm"
  },
  {
    title: "Mountain Retreat",
    description: "A cozy mountain retreat with stunning views of the peaks.",
    image: {
      url: "https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2018/09/house-in-mountains.jpg?fit=400%2C684&ssl=1",
      filename: "mountainretreat.jpg"
    },
    price: 200,
    location: "Aspen",
    country: "USA",
    category: "Mountain"
  },
  {
    title: "Island Paradise",
    description: "An exotic island getaway with private beaches and crystal-clear waters.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-853512929423214729/original/f3d27f22-5175-467a-97fa-d040a08892cc.png?im_w=720",
      filename: "islandparadise.jpg"
    },
    price: 450,
    location: "Maui",
    country: "USA",
    category: "Island"
  },
  {
    title: "City Lights Apartment",
    description: "A modern apartment in the heart of the city, perfect for business travelers.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-657011800148868945/original/a1083c29-58e1-4acf-b79d-14da9dad3d26.jpeg?im_w=720",
      filename: "citylights.jpg"
    },
    price: 300,
    location: "New York City",
    country: "USA",
    category: "Top Cities"
  },
  {
    title: "Lakefront Cottage",
    description: "A charming lakefront cottage perfect for a quiet and relaxing vacation.",
    image: {
      url: "https://a0.muscache.com/im/pictures/0dd8a016-61ac-4e4b-9f67-5732e72c6543.jpg?im_w=720",
      filename: "lakefrontcottage.jpg"
    },
    price: 180,
    location: "Lake Tahoe",
    country: "USA",
    category: "Lake"
  },
  {
    title: "Rajasthani Desert Camp",
    description: "Experience the traditional desert life with this luxurious Rajasthani camp.",
    image: {
      url: "https://a0.muscache.com/im/pictures/8ed47c5c-e6cd-46a5-98ad-530a6e3bc404.jpg?im_w=720",
      filename: "rajasthani-desert-camp.jpg"
    },
    price: 250,
    location: "Jaisalmer",
    country: "India",
    category: "Camping"
  },
  {
    title: "Kashmir Mountain Resort",
    description: "A serene mountain resort in the picturesque valleys of Kashmir.",
    image: {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBsYbnqcEmDwtf45oTbYLbWVuWUZnmgvnd2R1jLBYmr6jaBPhV6Fnc9fX6Gk9EkXugt2M&usqp=CAU",
      filename: "kashmir-mountain-resort.jpg"
    },
    price: 350,
    location: "Srinagar",
    country: "India",
    category: "Mountain"
  },
  {
    title: "Goan Beach Villa",
    description: "A stunning beach villa with private access to the scenic beaches of Goa.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=720",
      filename: "goan-beach-villa.jpg"
    },
    price: 500,
    location: "Goa",
    country: "India",
    category: "Island"
  },
  {
    title: "Backwater Houseboat",
    description: "Enjoy a peaceful stay on the famous Kerala backwaters with this traditional houseboat.",
    image: {
      url: "https://a0.muscache.com/im/pictures/3cd46b51-c1c4-44e8-838e-f164a48146fc.jpg?im_w=720",
      filename: "backwater-houseboat.jpg"
    },
    price: 300,
    location: "Alleppey",
    country: "India",
    category: "Lake"
  },
  {
    title: "Mumbai Skyline Apartment",
    description: "A modern apartment offering breathtaking views of the Mumbai skyline.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-820896778503897920/original/bdd370e0-63fa-4852-a6f2-4c23a2f12356.jpeg?im_w=720",
      filename: "mumbai-skyline-apartment.jpg"
    },
    price: 450,
    location: "Mumbai",
    country: "India",
    category: "Top Cities"
  },
  {
    title: "Himalayan Farmhouse",
    description: "A cozy farmhouse in the foothills of the Himalayas, ideal for a peaceful retreat.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-657011800148868945/original/a1083c29-58e1-4acf-b79d-14da9dad3d26.jpeg?im_w=720",
      filename: "himalayan-farmhouse.jpg"
    },
    price: 200,
    location: "Manali",
    country: "India",
    category: "Farm"
  },
  // here is new data

  {
    title: "Rajasthani Desert Camp",
    description: "Experience the traditional desert life with this luxurious Rajasthani camp.",
    image: {
      url: "https://a0.muscache.com/im/pictures/eb0afb10-6c88-4022-a816-8c84535e99fb.jpg?im_w=720",
      filename: "rajasthani-desert-camp.jpg"
    },
    price: 250,
    location: "Jaisalmer",
    country: "India",
    category: "Camping"
  },
  {
    title: "Kashmir Mountain Resort",
    description: "A serene mountain resort in the picturesque valleys of Kashmir.",
    image: {
      url: "https://a0.muscache.com/im/pictures/c93a2038-656c-485b-96aa-ceaba008cbfa.jpg?im_w=720",
      filename: "kashmir-mountain-resort.jpg"
    },
    price: 350,
    location: "Srinagar",
    country: "India",
    category: "Mountain"
  },
  {
    title: "Goan Beach Villa",
    description: "A stunning beach villa with private access to the scenic beaches of Goa.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1197777285369554575/original/8eef2b07-cf0e-4bb7-997c-0b67c6df46b8.jpeg?im_w=720",
      filename: "goan-beach-villa.jpg"
    },
    price: 500,
    location: "Goa",
    country: "India",
    category: "Island"
  },
  {
    title: "Backwater Houseboat",
    description: "Enjoy a peaceful stay on the famous Kerala backwaters with this traditional houseboat.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-1197777285369554575/original/8eef2b07-cf0e-4bb7-997c-0b67c6df46b8.jpeg?im_w=720",
      filename: "backwater-houseboat.jpg"
    },
    price: 300,
    location: "Alleppey",
    country: "India",
    category: "Lake"
  },
  {
    title: "Mumbai Skyline Apartment",
    description: "A modern apartment offering breathtaking views of the Mumbai skyline.",
    image: {
      url: "https://a0.muscache.com/im/pictures/3b75e6d7-1186-4a71-bd68-94cf9a12f3dc.jpg?im_w=720",
      filename: "mumbai-skyline-apartment.jpg"
    },
    price: 450,
    location: "Mumbai",
    country: "India",
    category: "Top Cities"
  },
  {
    title: "Himalayan Farmhouse",
    description: "A cozy farmhouse in the foothills of the Himalayas, ideal for a peaceful retreat.",
    image: {
      url: "https://a0.muscache.com/im/pictures/c93a2038-656c-485b-96aa-ceaba008cbfa.jpg?im_w=720",
      filename: "himalayan-farmhouse.jpg"
    },
    price: 200,
    location: "Manali",
    country: "India",
    category: "Farm"
  },
  {
    title: "Andaman Island Hideaway",
    description: "A secluded hideaway on the pristine beaches of the Andaman Islands.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-54392028/original/82b8ac88-cca4-4e5b-84c6-aa7ac6eae5ca.jpeg?im_w=720",
      filename: "andaman-island-hideaway.jpg"
    },
    price: 550,
    location: "Havelock Island",
    country: "India",
    category: "Island"
  },
  {
    title: "Nainital Lakeside Retreat",
    description: "A peaceful lakeside retreat in the hills of Nainital, surrounded by nature.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-893299413276501902/original/a9806664-7949-4193-b0a4-5bf84b4d0637.jpeg?im_w=720",
      filename: "nainital-lakeside-retreat.jpg"
    },
    price: 280,
    location: "Nainital",
    country: "India",
    category: "Lake"
  },
  {
    title: "Bangalore Urban Loft",
    description: "A sleek and stylish urban loft in the bustling city of Bangalore.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-10983311/original/32b7e523-d81a-4534-b39c-f8337fb918f6.jpeg?im_w=720",
      filename: "bangalore-urban-loft.jpg"
    },
    price: 400,
    location: "Bangalore",
    country: "India",
    category: "Top Cities"
  },
  {
    title: "Sundarbans Jungle Safari Camp",
    description: "Adventure awaits at this jungle safari camp deep in the Sundarbans mangrove forests.",
    image: {
      url: "https://a0.muscache.com/im/pictures/eb0afb10-6c88-4022-a816-8c84535e99fb.jpg?im_w=720",
      filename: "sundarbans-jungle-safari-camp.jpg"
    },
    price: 275,
    location: "Sundarbans",
    country: "India",
    category: "Camping"
  },
  {
    title: "Coorg Coffee Estate Homestay",
    description: "Stay amidst the rolling hills and coffee plantations of Coorg in this homestay.",
    image: {
      url: "https://a0.muscache.com/im/pictures/miso/Hosting-52844386/original/30562e85-22ae-4e6f-aa80-8bf400ef301a.jpeg?im_w=720",
      filename: "coorg-coffee-estate-homestay.jpg"
    },
    price: 220,
    location: "Coorg",
    country: "India",
    category: "Farm"
  }
];

module.exports=initdata;