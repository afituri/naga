var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Media' });
});

router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

router.get('/404', function(req, res) {
  res.render('404', { title: '404' });
});

router.get('/authentication', function(req, res) {
  res.render('authentication', { title: 'Authentication' });
});

router.get('/blog', function(req, res) {
  res.render('blog', { title: 'Blog' });
});

router.get('/blog-fullwidth', function(req, res) {
  res.render('blog-fullwidth', { title: 'Blog-fullwidth' });
});

router.get('/blog-post', function(req, res) {
  res.render('blog-post', { title: 'Blog-post' });
});

router.get('/cart', function(req, res) {
  res.render('cart', { title: 'Cart' });
});

router.get('/category-grid', function(req, res) {
  res.render('category-grid', { title: 'Category-grid' });
});

router.get('/category-grid-2', function(req, res) {
  res.render('category-grid-2', { title: 'Category-grid-2' });
});

router.get('/checkout', function(req, res) {
  res.render('checkout', { title: 'Checkout' });
});

router.get('/compare', function(req, res) {
  res.render('compare', { title: 'Compare' });
});

router.get('/contact', function(req, res) {
  res.render('contact', { title: 'Contact' });
});

router.get('/sendContact/:id',function(req,res){
  console.log("Sss");
  res.send(true);
    
});



router.get('/faq', function(req, res) {
  res.render('faq', { title: 'FAQ' });
});

router.get('/index-2', function(req, res) {
  res.render('index-2', { title: 'Index-2' });
});

router.get('/single-product', function(req, res) {
  res.render('single-product', { title: 'Single-product' });
});

router.get('/single-product-sidebar', function(req, res) {
  res.render('single-product-sidebar', { title: 'Single-product-sidebar' });
});

router.get('/terms', function(req, res) {
  res.render('terms', { title: 'Terms' });
});

router.get('/track-your-order', function(req, res) {
  res.render('track-your-order', { title: 'Track-your-order' });
});

router.get('/wishlist', function(req, res) {
  res.render('wishlist', { title: 'Wishlist' });
});

router.get('/profile', function(req, res) {
  res.render('profile', { title: 'Profile' });
});

module.exports = router;
