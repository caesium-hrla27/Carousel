const mongoose = require('mongoose');
const shoeData = require('../shoeData.js');

let shoesSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: String, require: true },
  shoe_url: { type: String, require: true },
  category: { type: String, require: true }
});

let Shoe = mongoose.model('shoelists', shoesSchema);

let save = (shoes) => {
  shoes.forEach(shoe => {
    newShoe = new Shoe({
      name: shoe.name,
      price: shoe.price,
      shoe_url: shoe.shoe_url,
      category: shoe.category
    })
    .save()
    .then(() => console.log('Success creating new entry'))
    .catch(err => console.log('Error creating new entry', err));
  })
};

let getRecommendedShoes = (category) => {
  return Shoe.find({ category: category }).limit(12);
}

save(shoeData.shoes);

module.exports = { 
	Shoe,
	save,
	getRecommendedShoes
};


// SEEDING THE DATABASE

  // create helper functions to insert into the database;

  // invoking the helper functions With the dummy data

  // use the terminal to run this file, which will seed the database

