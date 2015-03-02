var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');


/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('homeUser', { title: 'homeUser' });
});

// set a cookie to requested locale
router.get('/:locale', function (req, res) {
  i18n.setdeflan(req,res);
  res.redirect("/user");
});


module.exports = router;
