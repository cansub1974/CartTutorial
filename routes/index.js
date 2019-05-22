//jshint esversion:6


var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();

router.use(csrfProtection);

/* GET home page. */
router.get('/', function (req, res, next) {
  Product.find(function (err, docs) {

    //this breaks the products into chunks so that when the products reach the chunkSize then it starts a new row
    var productChucks = [];
    var chunkSize = 3;
    for (let i = 0; i < docs.length; i += chunkSize) {
      productChucks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', {
      title: 'Shopping Cart',
      products: productChucks,
    });
  });
});

// Signup Page
router.get('/user/signup', function (req, res, next) {
  res.render('user/signup', {
    csrfToken: req.csrfToken()
  });
});

router.post('/user/signup', function (req, res, next) {
  res.redirect('/');
});

module.exports = router;