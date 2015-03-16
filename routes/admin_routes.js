var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson');


router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Admin Login' });
});

router.get('/adminPage', function(req, res) {
	console.log("test");
  res.render('adminPage', { title: 'Admin Page' });
});

router.get('/testBlockPage', function(req, res) {
  res.render('testBlockPage', { title: 'test Block Page' });
});

router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Page' });
});

router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Page' ,username:users });
});


router.get('/adminSerialNumber', function(req, res) {
  res.render('adminSerialNumber', { title: 'Admin Page' });
});


module.exports = router;

