var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var CityMgr = require('../app/city').CityMgr;
var AreaMgr = require('../app/area').AreaMgr;
var validator = require('../app/validator_api');
var rand= require('../app/serialnumber').rand;


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
  res.render('adminShowUsers', { title: 'Admin Show Users',users:users });
});

router.get('/adminShowOrder', function(req, res) {
  res.render('adminShowOrder', { title: 'Admin Show Order'});
});

router.get('/adminSchools', function(req, res) {
  res.render('adminSchools', { title: 'Schools'});
});

router.get('/adminCities', function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('adminCities', { title: 'Cities',cities:result});
  });
});

router.post('/addcity',function(req, res) {
  console.log(req.body);
  validator.isCity(req,function(err,result){
    console.log(result);

    if(result!=true){
      console.log("err");
      res.send(result);
    }else{
      CityMgr.AddCity(req.body,function(err,result){
        console.log("true");
        res.send(true);
      });
    }
  });
});

router.post('/editnameEn', function(req, res) {
  CityMgr.UpdateCityNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editname', function(req, res) {
  CityMgr.UpdateCityNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.get('/adminAreas', function(req, res) {
  AreaMgr.getAreaInfo(function(err,result){
    console.log(result);
    res.render('adminAreas', { title: 'Areas',areas:result});
  });
});

router.get('/adminMahala', function(req, res) {
  res.render('adminMahala', { title: 'Mahala'});
});

router.get('/adminSerialNumber', function(req, res) {
   rand.NumberActiveprepaidCard(function(result){
    rand.getTotalmony(function(result1){
      rand.ActiveprepaidCard(20,function(result2){
        rand.ActiveprepaidCard(50,function(result3){
          rand.ActiveprepaidCard(100,function(result4){
            rand.usedCard(function(result5){
              rand.UseitActiveprepaidCard(20,function(result6){ 
                rand.UseitActiveprepaidCard(50,function(result7){ 
                  rand.UseitActiveprepaidCard(100,function(result8){ 
                    console.log(result8[0].c);
                    var notusedCard = result[0].c - result5[0].c;
                    var precent = 100/result[0].c;
                    var total=(result5[0].c)*precent;
                    res.render('adminSerialNumber', { title: 'Prepaid Card Manger',cardNumber:result[0].c,mony:result1[0].totalMony,
                    twentyMony : result2 , fmony : result3,hmony:result4
                    ,all:result5 
                    ,Tused:result6[0].c,Fused:result7[0].c,Hused:result8[0].c
                    ,TTused:result6[0].s,FFused:result7[0].s,HHused:result8[0].s,usedPercent:total
                    ,notUsed : notusedCard});
                  });
                });
              });
            });
          });
        });
      }); 
    });
  });
});

router.get('/showAdmin', function(req, res) {
  res.render('showAdmin', { title: 'Show Admins' ,users:users});
});

router.get('/loadingImg', function(req, res) {
  res.render('loadingImg', { title: 'Loading....' ,users:users});
});


module.exports = router;
