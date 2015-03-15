var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');

/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Admin Login' });
});

// router.get('/:locale', function (req, res) {
//   i18n.setdeflan(req,res);
//   res.redirect("/admin");
// });

router.get('/adminPage', function(req, res) {
  res.render('adminPage', { title: 'Admin Page' });
});

router.get('/testBlockPage', function(req, res) {
  res.render('testBlockPage', { title: 'test Block Page' });
});

router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Page' });
});

router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Page' });
});


router.get('/adminSerialNumber', function(req, res) {
  res.render('adminSerialNumber', { title: 'Admin Page' });
});


module.exports = router;

