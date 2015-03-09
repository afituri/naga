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
         //console.log(result);
         res.render('abdo',{title: 'abdo'});
         });
      });



// set a cookie to requested locale
router.get('/:locale', function (req, res) {
  i18n.setdeflan(req,res);
  res.redirect("/user");
});


module.exports = router;
