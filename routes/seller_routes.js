var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');

/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('index', { title: 'Seller' });
});


router.get('/homePage', function(req, res) {
  i18n.setlang(req,res);
  res.render('homePage', { title: 'Seller' });
});

router.get('/products', function(req, res) {
  i18n.setlang(req,res);
  res.render('products', { title: 'Seller' });
});

router.get('/tac', function(req, res) {
  i18n.setlang(req,res);
  res.render('tac', { title: 'Seller' });
});

router.get('/special_offer', function(req, res) {
  i18n.setlang(req,res);
  res.render('special_offer', { title: 'Seller' });
});

router.get('/register', function(req, res) {
  i18n.setlang(req,res);
  res.render('register', { title: 'Seller' });
});


router.get('/product_summary', function(req, res) {
  i18n.setlang(req,res);
  res.render('product_summary', { title: 'Seller' });
});


router.get('/product_details', function(req, res) {
  i18n.setlang(req,res);
  res.render('product_details', { title: 'Seller' });
});


router.get('/:locale', function (req, res) {
  i18n.setdeflan(req,res);
  res.redirect("/seller");
});


module.exports = router;



