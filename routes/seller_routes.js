var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var uploadManager = require('../app/upload')(router);

/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('login', { title: 'Seller Login' });
});

router.get('/index', function (req, res) {
  res.render('index', { title: 'Seller Dashboard' });
});

router.get('/homePage', function(req, res) {
  i18n.setlang(req,res);
  res.render('homePage', { title: 'Seller' });
});

router.get('/products', function(req, res) {
  i18n.setlang(req,res);
  res.render('products', { title: 'Seller' });
});

router.get('/compair', function(req, res) {
  i18n.setlang(req,res);
  res.render('compair', { title: 'Seller' });
});

router.get('/components', function(req, res) {
  i18n.setlang(req,res);
  res.render('components', { title: 'Seller' });
});

router.get('/legal_notice', function(req, res) {
  i18n.setlang(req,res);
  res.render('legal_notice', { title: 'Seller' });
});

router.get('/faq', function(req, res) {
  i18n.setlang(req,res);
  res.render('faq', { title: 'Seller' });
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

router.get('/companyInfo', function(req, res) {
  i18n.setlang(req,res);
  res.render('companyInfo', { title: 'companyInfo' });
});

router.get('/:locale', function(req, res) {
  res.redirect("/seller");
});

module.exports = router;



