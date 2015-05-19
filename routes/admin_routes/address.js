var express = require('express');
var router = express.Router();
var validator = require('../../app/validator_api');
var i18n = require('../../app/i18n');
var CityMgr = require('../../app/city').CityMgr;
var AreaMgr = require('../../app/area').AreaMgr;
var MahallaMgr = require('../../app/mahalla').MahallaMgr;
var SchoolMgr = require('../../app/school').SchoolMgr;
var user =require('../../app/userHelpers');


// Mahalla //
router.post('/editMahalla', function(req, res) {
  MahallaMgr.UpdateMahallaNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editMahallaEn', function(req, res) {
  MahallaMgr.UpdateMahallaNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/deleteMahalla/:id', function(req, res) {
  MahallaMgr.DeleteMahalla(req.params.id,function(err,result){
    res.send(result);
  });
});
router.get('/getMahalla/:id', function(req, res) {
  MahallaMgr.getMahallaInfoByIdArea(req.params.id,function(err,result){
    res.send(result);
  });
});

router.post('/addMahala',function(req,res){
  validator.isMahala(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    } else {
      delete req.body['city'];
      MahallaMgr.addMahalla(req.body,function(err,result){
        MahallaMgr.getMahallaId(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
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
      CityMgr.GetCity(function(err,result1){
        res.render('adminMahala', { title: 'Mahala',mahala:result[0],pagination:pagination,cities:result1});
      });
    }
  });
});
/////////////////

// School //////
router.post('/schoolEditName', function(req, res) {
  SchoolMgr.UpdateSchoolNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/schoolEditNameEn', function(req, res) {
  SchoolMgr.UpdateSchoolNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editLatitSchool', function(req, res) {
  SchoolMgr.UpdateSchoolLatit(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editLongitSchool', function(req, res) {
  SchoolMgr.UpdateSchoolLongit(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/deleteSchool/:id', function(req, res) {
  SchoolMgr.DeleteSchool(req.params.id,function(err,result){
    res.send(result);
  });
});
router.get('/getSchool/:id', function(req, res) {
  SchoolMgr.getSchoolID(req.params.id,function(err,result){
    res.send(result);
  });
})
router.post('/addSchool',function(req,res){
  validator.isSchool(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    } else {
      delete req.body['area_idarea'];
      delete req.body['city_idcity'];
      SchoolMgr.AddSchool(req.body,function(err,result){
        SchoolMgr.getSchoolID(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
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
      CityMgr.GetCity(function(err,result1){
        res.render('adminSchools', { title: 'Schools',school:result[0],pagination:pagination,cities:result1});
      });
    }
  });
});
////////////////////


// city ///////////
router.get('/adminCities', function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('adminCities', { title: 'Cities',cities:result,NProgress:"fadeIn out"});
  });
});
router.post('/addCity',function(req, res) {
  validator.isCity(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    } else {
      CityMgr.AddCity(req.body,function(err,result){
        CityMgr.GetCityById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});
router.get('/deleteCity/:id', function(req, res) {
  CityMgr.DeleteCity(req.params.id,function(err,result){
    res.send(result);
  });
});
router.post('/editName', function(req, res) {
  CityMgr.UpdateCityNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editNameEn', function(req, res) {
  CityMgr.UpdateCityNameEN(req.body,function(err,result){
    res.send(true);
  });
});
///////////////////


// Area //////////
router.get('/deleteArea/:id', function(req, res) {
  AreaMgr.DeleteArea(req.params.id,function(err,result){
    res.send(result);
  });
});
router.get('/adminAreas', function(req, res) {
  AreaMgr.getAreaInfo(function(err,result){
    CityMgr.GetCity(function(err,result1){
      res.render('adminAreas', { title: 'Areas', areas:result,NProgress:"fadeIn out",cities:result1});
    });
  });
});
router.get('/getArea/:id', function(req, res) {
  AreaMgr.getAreaInfoByCity(req.params.id,function(err,result){
    res.send(result);
  });
});


router.post('/editAreaName', function(req, res) {
  AreaMgr.UpdateAreaNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editAreaNameEn', function(req, res) {
  AreaMgr.UpdateAreaNameEn(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/addAreas',function(req,res){
  validator.isAreas(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      AreaMgr.addArea(req.body,function(err,result){
        AreaMgr.getAreaInfoById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});
router.get('/deleteArea/:id', function(req, res) {
  AreaMgr.DeleteArea(req.params.id,function(err,result){
    res.send(result);
  });
});
router.get('/adminAreas', function(req, res) {
  AreaMgr.getAreaInfo(function(err,result){
    CityMgr.GetCity(function(err,result1){
      res.render('adminAreas', { title: 'Areas', areas:result,NProgress:"fadeIn out",cities:result1});
    });
  });
});
router.get('/getArea/:id', function(req, res) {
  AreaMgr.getAreaInfoByCity(req.params.id,function(err,result){
    res.send(result);
  });
});
router.post('/editAreaName', function(req, res) {
  AreaMgr.UpdateAreaNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/editAreaNameEn', function(req, res) {
  AreaMgr.UpdateAreaNameEn(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/addAreas',function(req,res){
  validator.isAreas(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      AreaMgr.addArea(req.body,function(err,result){
        AreaMgr.getAreaInfoById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});

/////////////////

module.exports = router;
