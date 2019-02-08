const router = require('express').Router();
const controller = require('./controller.js');

router
  .route('/shoeList')
  .get(controller.get);

module.exports = router;