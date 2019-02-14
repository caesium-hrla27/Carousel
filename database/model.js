const mongoose = require('mongoose');
const shoes = require('../dummyData.js');

let shoesSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: String, require: true },
  shoeUrl: { type: String, require: true },
  category: { type: String, require: true }
});

let Shoe = mongoose.model('shoelists', shoesSchema);

let save = (shoes) => {
  shoes.forEach(shoe => {
    newShoe = new Shoe({
      name: shoe.name,
      price: shoe.price,
      shoeUrl: shoe.shoeUrl,
      category: shoe.category
    })
      .save()
      .then(() => console.log('Success creating new entry'))
      .catch(err => console.log('Error creating new entry', err));
  });
};

let getRecommendedShoes = (category) => {
  return Shoe.find({ category: category }).limit(12);
};

// save(shoes.shoes);

module.exports = { 
  Shoe,
  save,
  getRecommendedShoes
};


// SEEDING THE DATABASE

// create helper functions to insert into the database;

// invoking the helper functions With the dummy data

// use the terminal to run this file, which will seed the database

