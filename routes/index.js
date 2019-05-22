var express = require('express');
var router = express.Router();
var product = require('../models/product');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('shop/index', {
    title: 'Hello There!'
  });
});

module.exports = router;