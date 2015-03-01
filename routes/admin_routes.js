var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');

/* GET home page. */
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('index', { title: 'Admin' });
});

router.get('/:locale', function (req, res) {
  i18n.setdeflan(req,res);
  res.redirect("/admin");
});


module.exports = router;



