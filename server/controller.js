const db = require('../database/model.js');

const getRecommendedShoes = require('../database/model.js').getRecommendedShoes;
 

module.exports = {
  get: (req, res) => {
    console.log('IN GET');

    const {category} = req.query;

    getRecommendedShoes(category)
      .then(shoes => {
        res.status(200).send(shoes)
      })
      .catch(err => {
        res.status(404).send('Error getting recommended shoes', err)
      });
  }
};