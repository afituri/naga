var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var CityMgr = require('../app/city').CityMgr;
var AreaMgr = require('../app/area').AreaMgr;
var MahallaMgr = require('../app/mahalla').MahallaMgr;
var SchoolMgr = require('../app/school').SchoolMgr;
var validator = require('../app/validator_api');
var rand= require('../app/serialnumber').rand;
var MeasureMgr = require('../app/measure').MeasureMgr;
var SizeMgr  = require('../app/size').SizeMgr ;
var ColorMgr =require('../app/color').ColorMgr;
var user =require('../app/userHelpers');

router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Login' });
});

router.get('/adminPage', function(req, res) {
  res.render('adminPage', { title: 'Admin Page',NProgress:"fadeIn out" });
});

router.get('/adminTest', function(req, res) {
  res.render('adminTest', { title: 'Admin Test' });
});

router.get('/search/:name', function(req, res) {
  req.session.back = req.originalUrl;
  var page = user.getPage(req);
  var limit =user.getLimit(page);
  MeasureMgr.searchMng(req.params.name,limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.send(result[0]);
    } 
  });  
});

router.get('/getMeasure', function(req, res) {
  req.session.back = req.originalUrl;
  var page = user.getPage(req);
  var limit =user.getLimit(page);
  MeasureMgr.GetMeasure(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.send(result[0]);
    }   
  });  
});


router.get('/adminRegUsers', function(req, res) {
  res.render('adminRegUsers', { title: 'Admin Register Users',NProgress:"fadeIn out"});
});

router.get('/adminShowUsers', function(req, res) {
  res.render('adminShowUsers', { title: 'Admin Show Users',users:users,NProgress:"fadeIn out" });
});

router.get('/adminShowOrder', function(req, res) {
  res.render('adminShowOrder', { title: 'Admin Show Order',NProgress:"fadeIn out"});
});

router.get('/adminMeasure', function(req, res) {
  req.session.back = req.originalUrl;
  var page = user.getPage(req);
  var limit =user.getLimit(page);
  MeasureMgr.GetMeasurelimit(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.render('adminMeasure', { title: 'Measure',measure:result[0],pagination:pagination});
    }
  });
});

//MeasurEditNameEn
router.post('/MeasurEditNameEn', function(req, res) {
  MeasureMgr.UpdateMeasureNameEN(req.body,function(err,result){
    res.send(true);
  });
});
// SizeEditNameEn

router.post('/SizeEditNameEn', function(req, res) {
 SizeMgr.UpdateSizeNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/SizeEditNameAr', function(req, res) {
 SizeMgr.UpdateSizeNameAR(req.body,function(err,result){
    res.send(true);
  });
});



router.post('/MeasurEditName', function(req, res) {
  MeasureMgr.UpdateMeasureNameAR(req.body,function(err,result){
    res.send(true);
    res.render('adminMeasure', { title: 'Measure',measure:result[0],pagination:pagination,NProgress:"fadeIn out"});
  });
});


router.post('/saveMeasure',function(req,res){
  MeasureMgr.AddMeasure(req.body,function(result){
    res.redirect('/adminMeasure');
  });

});

router.get('/sizes/:id', function(req, res) {
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.render('sizes', { title: 'sizes',size:result});
  });
});

router.get('/adminColors', function(req, res) {
  ColorMgr.GetColor(function(err,result){
    res.render('adminColors', { title: 'Colors',color:result});
  }); 
});

router.get('/adminTypeBusiness', function(req, res) {
  res.render('adminTypeBusiness', { title: 'Type of Business'});
});

router.get('/adminGenre', function(req, res) {
  res.render('adminGenre', { title: 'Genre'});
});

router.get('/adminTypeGenre', function(req, res) {
  res.render('adminTypeGenre', { title: 'Type of Genre'});
});

router.get('/adminCities', function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('adminCities', { title: 'Cities',cities:result,NProgress:"fadeIn out"});
  });
});

router.post('/addcity',function(req, res) {
  validator.isCity(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
      }  else {
      CityMgr.AddCity(req.body,function(err,result){
        CityMgr.GetCityById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});

router.post('/editnameEn', function(req, res) {
  CityMgr.UpdateCityNameEN(req.body,function(err,result){
    res.send(true);
  });
});
 


router.post('/editColorNameEn', function(req, res) {
  ColorMgr.UpdateColorNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editColorNameAr', function(req, res) {
  ColorMgr.UpdateColorNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editname', function(req, res) {
  CityMgr.UpdateCityNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.get('/delete/:id', function(req, res) {
  //console.log(req.params.id);
  MeasureMgr.DeleteMeasure(req.params.id,function(err,result){
    res.send(true);
  });
});

router.get('/deleteSize/:id', function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      // console.log(resultt);
      res.send(resultt);
    });
  });
});

router.get('/deleteColor/:id', function(req, res) {
   ColorMgr.DeleteColor(req.params.id,function(err,result){
    res.send(result);
   });
});


router.get('/adminAreas', function(req, res) {
  AreaMgr.getAreaInfo(function(err,result){
    res.render('adminAreas', { title: 'Areas', areas:result,NProgress:"fadeIn out"});
  });
});

router.get('/adminMahala', function(req, res) {
  req.session.back = req.originalUrl;
  var page = user.getPage(req);
  var limit = user.getLimit(page);
  MahallaMgr.getMahallaLimit(limit,function(result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.render('adminMahala', { title: 'Mahala',mahala:result[0],pagination:pagination});
    }
  });
});

router.get('/adminSchools', function(req, res) {
  req.session.back = req.originalUrl;
  var page = user.getPage(req);
  var limit = user.getLimit(page);
  SchoolMgr.getSchoolLimit(limit,function(result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.render('adminSchools', { title: 'Schools',school:result[0],pagination:pagination});
    }
  });
});

router.get('/adminInvoice', function(req, res) {
  res.render('adminInvoice', { title: 'Invoice'});
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
                   // console.log(result8[0].c);
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

router.get('/viewAdmin', function(req, res) {
  res.render('viewAdmin', { title: 'view Admins' ,users:users,NProgress:"fadeIn out"});
});

router.get('/loadingImg', function(req, res) {
  res.render('loadingImg', { title: 'Loading....'});
});

router.get('/addAdmin', function(req, res) {
    res.render('addAdmin', { title: 'Add Admin'});
});

module.exports = router;
