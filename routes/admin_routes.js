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

router.get('/adminTest', function(req, res) {
  res.render('adminTest', { title: 'Admin Test' });
});

router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Register Users' ,collapseIn:"in", chosenRU:"chosen"});
});

router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Show Users' ,collapseIn:"in",chosenSU:"chosen",username:users });
});


router.get('/adminSerialNumber', function(req, res) {
  res.render('adminSerialNumber', { title: 'Admin Serial Number' });
});


module.exports = router;

