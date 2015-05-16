var express = require('express');
var router = express.Router();
var i18n = require('../../app/i18n');
var MeasureMgr = require('../../app/measure').MeasureMgr;
var SizeMgr  = require('../../app/size').SizeMgr ;
var ColorMgr =require('../../app/color').ColorMgr;
var user =require('../../app/userHelpers');
var validator = require('../../app/validator_api');



 // Measure//
router.post('/measurEditNameEn', function(req, res) {
  MeasureMgr.UpdateMeasureNameEN(req.body,function(err,result){
    res.send(true);
  });
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
router.post('/measurEditName', function(req, res) {
  MeasureMgr.UpdateMeasureNameAR(req.body,function(err,result){
    res.send(true);   
  });
});
router.post('/addMeasure',function(req,res){
  MeasureMgr.AddMeasure(req.body,function(err,result){
    MeasureMgr.GetMeasureId(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});
router.get('/deleteMeasure/:id', function(req, res) {
  MeasureMgr.DeleteMeasure(req.params.id,function(err,result){
    res.send(true);
  });
});
router.get('/searchMeasure/:name', function(req, res) {
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
 ////////////

// Size //
router.post('/addSizes',function(req,res){
  console.log(idSize);
  validator.isSize(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      SizeMgr.AddSize(req.body,function(result){
         SizeMgr.GetSizebyId(result.insertId,function(err,resultid){
          console.log(resultid);
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});
router.post('/SizeEditNameEn', function(req, res) {
  SizeMgr.UpdateSizeNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/sizeEditNameAr', function(req, res) {
  SizeMgr.UpdateSizeNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.post('/sizeEditNameAr', function(req, res) {
  SizeMgr.UpdateSizeNameAR(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/sizes/:id', function(req, res) {
  idSize=req.params.id;
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.render('sizes', { title: 'sizes',size:result,id:req.params.id});
  });
});
router.get('/deleteSize/:id', function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      res.send(resultt);
    });
  });
});
router.get('/deleteSize/:id', function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      res.send(resultt);
    });
  });
});
router.post('/SizeEditNameEn', function(req, res) {
  SizeMgr.UpdateSizeNameEN(req.body,function(err,result){
    res.send(true);
  });
});
router.get('/sizes/:id', function(req, res) {
  idSize=req.params.id;
  SizeMgr.GetSizeByIdMeasur(req.params.id,function(result){
    res.render('sizes', { title: 'sizes',size:result});
  });
});
//////////


// Color ////
router.post('/editGenreNameEn', function(req, res) {
  GenreMgr.UpdateGenreNameEN(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/addColor',function(req,res){
  ColorMgr.AddColor(req.body,function(err,result){
    ColorMgr.GetColorId(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});


router.get('/adminColors', function(req, res) {
  ColorMgr.GetColor(function(err,result){
    res.render('adminColors', { title: 'Colors',color:result});
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

router.get('/deleteColor/:id', function(req, res) {
  ColorMgr.DeleteColor(req.params.id,function(err,result){
    res.send(result);
  });
});

////////////////////////////
module.exports = router;
