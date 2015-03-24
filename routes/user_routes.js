var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;
var should = require('should');
var  supertest=require('supertest');

/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('homeUser', { title: 'homeUser' });
});

router.get('/department', function(req, res) {
  res.render('department', { title: ' department' });
});

    
    router.get('/abdo', function(req,res){
      userMgr.deleteById(1,function(result){
         res.render('abdo',{title: 'abdo'});
         });
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

// set a cookie to requested locale
router.get('/:locale', function (req, res) {
  res.redirect("/user");
});

module.exports = router;
