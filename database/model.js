const mongoose = require('mongoose');
const shoeData = require('../shoeData.js');

let shoesSchema = new mongoose.Schema({
  id: { type: String, require: true },
  name: { type: String, require: true },
  price: { type: Number, require: true },
  salePrice: { type: Number },
  shoeUrl: { type: String, require: true },
  colors: { type: Number, require: true},
  reviewsNum: { type: Number },
  reviewsAvg: { type: Number },
  category: { type: String, require: true }
});

let Shoe = mongoose.model('shoelists', shoesSchema);

let save = (shoes) => {
  shoes.forEach(shoe => {
    newShoe = new Shoe({

      id: shoe.id,
      name: shoe.name,
      price: shoe.price,
      salePrice: shoe.salePrice,
      shoeUrl: shoe.shoeUrl,
      colors: shoe.colors,
      reviewsNum: shoe.reviewsNum,
      reviewsAvg: shoe.reviewsAvg,
      category: shoe.category
    })
      .save()
      .then(() => console.log('Success creating new entry'))
      .catch(err => console.log('Error creating new entry', err));
  });
};

let getRecommendedShoes = (category) => {
  return Shoe.find({ category: category }).limit(25);
};

<<<<<<< HEAD
//save(shoeData.shoes);
=======
save(shoeData.shoes);
>>>>>>> 7af4ac6d91214347f5112b96f662aee45998045b

// drop the database

module.exports = { 
  Shoe,
  save,
  getRecommendedShoes
};


// SEEDING THE DATABASE

// create helper functions to insert into the database;

// invoking the helper functions With the dummy data

// use the terminal to run this file, which will seed the database

