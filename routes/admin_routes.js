var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson');
var CityMgr = require('../app/city').CityMgr;
var validator = require('../app/validator_api');


router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Admin Login' });
});

router.get('/adminPage', function(req, res) {
  res.render('adminPage', { title: 'Admin Page' });
});

router.get('/adminTest', function(req, res) {
  res.render('adminTest', { title: 'Admin Test' });
});

router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Register Users'});
});

router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Show Users',username:users });
});

router.get('/adminShowOrder', function(req, res) {
  res.render('adminShowOrder', { title: 'Admin Show Order'});
});

router.get('/adminSchools', function(req, res) {
  res.render('adminSchools', { title: 'Schools'});
});

router.get('/adminCities', function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('adminCities', { title: 'Cities',citys:result});
  });
});

router.post('/addcity',function(req, res) {
  validator.isCity(req,function(result){
    if(result!=true){
      res.send(result);
    }else{
      CityMgr.AddCity(req.body,function(err,result){
        res.send(true);
      });
    }
  });
});

router.get('/adminAreas', function(req, res) {
  res.render('adminAreas', { title: 'Areas'});
});

router.get('/adminMahala', function(req, res) {
  res.render('adminMahala', { title: 'Mahala'});
});

router.get('/adminSerialNumber', function(req, res) {
  res.render('adminSerialNumber', { title: 'Prepaid Card Manger'});
});


module.exports = router;

