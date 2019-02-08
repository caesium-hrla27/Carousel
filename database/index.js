const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/shoeList', {
  useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', err => console.log('Error connecting to the database', err));
db.once('open', () => {
  console.log('Success connecting to the database!');
});

module.exports = db;