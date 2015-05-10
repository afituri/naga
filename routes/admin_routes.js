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
var TobMgr =require('../app/tob').TobMgr;
var GenreMgr =require('../app/genre').GenreMgr;
var TogMgr =require('../app/tog').TogMgr;
var CompanyMgr=require('../app/company').CompanyMgr;
var user =require('../app/userHelpers');
var CompanySellerMgr=require('../app/company_seller').CompanySellerMgr;
var CompanyAddressMgr=require('../app/company_address').CompanyAddressMgr;
var AdminMgr=require('../app/admin').AdminMgr;
var login = require('../app/admin_login')(router);
var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra');
var idaCompanyView=0;
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Login' });
});

var idcompany=0;
var idSize=0;
//testPhoto.jade

router.get('/testPhoto', function(req, res) {
  res.render('testPhoto', { title: 'Admin Page',NProgress:"fadeIn out" });
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

router.post('/MeasurEditNameEn', function(req, res) {
  MeasureMgr.UpdateMeasureNameEN(req.body,function(err,result){
    res.send(true);
  });
});

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

router.post('/SchoolEditName', function(req, res) {
  SchoolMgr.UpdateSchoolNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/SchoolEditNameEn', function(req, res) {
  SchoolMgr.UpdateSchoolNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editlatitSchool', function(req, res) {
  SchoolMgr.UpdateSchoolLatit(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editlongitSchool', function(req, res) {
  SchoolMgr.UpdateSchoolLongit(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/MeasurEditName', function(req, res) {
  MeasureMgr.UpdateMeasureNameAR(req.body,function(err,result){
    res.send(true);   
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

router.post('/editTobName', function(req, res) {
  TobMgr.UpdateTobNameAR(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editTobNameEn', function(req, res) {
  TobMgr.UpdateTobNameEN(req.body,function(err,result){
    res.send(true);
  });
});
 
router.post('/editGenreNameEn', function(req, res) {
  GenreMgr.UpdateGenreNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editGenreName', function(req, res) {
  GenreMgr.UpdateGenreNameAR(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editTogName', function(req, res) {
  TogMgr.UpdateTogName(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editTogNameEn', function(req, res) {
  TogMgr.UpdateTogNameEn(req.body,function(err,result){
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

router.post('/addSizes',function(req,res){
  console.log(idSize);
  validator.isSize(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      SizeMgr.AddSize(req.body,idSize,function(result){
         SizeMgr.GetSizebyId(result.insertId,function(err,resultid){
          console.log(resultid);
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});

router.post('/savePhoto',function(req, res) {
  if (req.url == '/savePhoto') {
    var form = new formidable.IncomingForm();
    form.parse(req, function(err, fields, files) {
      var temp_path = files.logo.path;
      var file_name = files.logo.name;
      var new_location = 'public/company_picture/';
      fs.copy(temp_path, new_location + file_name, function(err) {  
          if (err) {
            
          } else {
              CompanyMgr.addPhoto(idaCompanyView,file_name,function(err,result){  
            });
              res.redirect('/adminCompany/'+idaCompanyView+'/adminCompanyView');  
          }
      });     
    });
  }
});

router.post('/addColor',function(req,res){
  ColorMgr.AddColor(req.body,function(err,result){
    ColorMgr.GetColorId(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});

router.post('/addTob',function(req, res) {
  validator.isTob(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    } 
    else {
      TobMgr.AddTob(req.body,function(err,result){
        TobMgr.GetTobId(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
  });
});

router.get('/sizes/:id', function(req, res) {
  idSize=req.params.id;
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
  TobMgr.GetTob(function(err,result){
    res.render('adminTypeBusiness', { title: 'Type of Business',TOB:result});
  });
});

router.get('/adminTypeBusiness/:id/adminGenre', function(req, res) {
  GenreMgr.GetGenreByIdtob(req.params.id,function(err,result){  
  res.render('adminGenre', { title: 'Genre',genre:result});
  });
});


router.get('/adminTypeBusiness/adminGenre/:id/adminTypeGenre', function(req, res) {
  TogMgr.GetTogById(req.params.id,function(err,result){
    res.render('adminTypeGenre', { title: 'Type of Genre',tog:result});
  });
});

router.get('/adminCompany', function(req, res) {
  CompanyMgr.GetCompany(function(err,result){
    TobMgr.GetTob(function(err,result1){
      res.render('adminCompany', { title: 'Company',company:result,tob:result1});
    });
  });
});

router.get('/adminCompany/:id/adminCompanyAddress', function(req, res) {
  idcompany=req.params.id;
  CompanyAddressMgr.GetCompanyAddressByIdCompany(req.params.id,function(err,result){
    // var x =result;
    CityMgr.GetCity(function(err,result1){  
      // //console.log(result1);
      // console.log(x);
      res.render('adminCompanyAddress', { title: 'CompanyAddress',address:result,cities:result1});
    });
  });
});

router.get('/adminCompany/:id/adminSellerCo', function(req, res) {
  CompanySellerMgr.GetCompanySeller(req.params.id,function(err,result){ 
    res.render('adminSellerCo', { title: 'Company Seller',seller:result});
  });
});

router.get('/adminCompany/:id/adminCompanyView', function(req, res) {
  idaCompanyView=req.params.id;
  CompanyMgr.GetCompanyInfoById(req.params.id,function(err,result){ 
    res.render('adminCompanyView', { title: 'Company view',com:result});
  });
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

router.post('/editCompanyName', function(req, res) {
  CompanyMgr.UpdateCompanyNameAR (req.body,function(err,result){
    res.send(true);
  });
});


router.post('/UpdateCompanyLevel', function(req, res) {
  CompanySellerMgr.UpdateCompanyLevel(req.body,function(err,result){
    res.send(true);
  });
});




router.post('/editCompanySellerFname', function(req, res) {
  CompanySellerMgr.UpdateCompanyFname(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editCompanySellerLname', function(req, res) {
  CompanySellerMgr.UpdateCompanyLname(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanySellerPass', function(req, res) {
  CompanySellerMgr.UpdateCompanyPass(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanySellerEmail', function(req, res) {
  CompanySellerMgr.UpdateCompanyEmail(req.body,function(err,result){
    res.send(true);
  });
});



router.post('/editCompanyNameEn', function(req, res) {
  CompanyMgr.UpdateCompanyNameEN(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editCompanyLevel', function(req, res) {
  CompanyMgr.UpdateCompanyLevel(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editCompanyEmail', function(req, res) {
  CompanySellerMgr.UpdateCompanyEmail(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanyPhone', function(req, res) {
  CompanySellerMgr.UpdateCompanySellerPhone(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanyLongit', function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressLongit(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanyLatit', function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressLatit(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/editCompanyDesc', function(req, res) {
  CompanyAddressMgr.UpdateCompanyAddressDesc(req.body,function(err,result){
    res.send(true);
  });
});



router.get('/deleteAdmin/:id', function(req, res) {
  AdminMgr.DeleteAdmin(req.params.id,function(err,result){
    res.send(true);
  });
});

router.get('/delete/:id', function(req, res) {
  MeasureMgr.DeleteMeasure(req.params.id,function(err,result){
    res.send(true);
  });
});

router.get('/deleteSize/:id', function(req, res) {
  SizeMgr.GetSizebyId(req.params.id,function(err,resultt){
    SizeMgr.DeleteSize(req.params.id,function(err,result){
      res.send(resultt);
    });
  });
});
//3333

router.get('/deleteCompanySeller/:id', function(req, res) {
  CompanyMgr.GetCompanyInfoById(req.params.id,function(err,resulttt){
    CompanySellerMgr.DeleteCompanySeller(req.params.id,function(err,result){
      res.send(resulttt);
    });
  });
});

router.get('/deleteColor/:id', function(req, res) {
  ColorMgr.DeleteColor(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/deleteTOB/:id', function(req, res) {
  TobMgr.DeleteTob(req.params.id,function(err,result){
    res.send(result);
  });
});


router.get('/deleteTog/:id', function(req, res) {
  TogMgr.GetidgenreByidtog(req.params.id,function(err,id){ 
    TogMgr.DeleteTog(req.params.id,function(err,result){
      res.send(id);
    });
  });
});

router.get('/deleteCompany/:id', function(req, res) {
  CompanyMgr.DeleteCompany(req.params.id,function(err,result){
    res.send(result);
  });
});


router.get('/deleteMahalla/:id', function(req, res) {
  MahallaMgr.DeleteMahalla(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/deleteSchool/:id', function(req, res) {
  SchoolMgr.DeleteSchool(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/deleteCity/:id', function(req, res) {
  CityMgr.DeleteCity(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/deleteArea/:id', function(req, res) {
  AreaMgr.DeleteArea(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/deletegenreee/:id', function(req, res) {
  TobMgr.GetIdTobByIdGenre(req.params.id,function(err,idtob){
    GenreMgr.DeleteGenre(req.params.id,function(err,result){
      res.send(idtob);
    });
  });
});

router.get('/adminAreas', function(req, res) {
  AreaMgr.getAreaInfo(function(err,result){
    CityMgr.GetCity(function(err,result1){
      res.render('adminAreas', { title: 'Areas', areas:result,NProgress:"fadeIn out",cities:result1});
    });
  });
});

router.get('/getarea/:id', function(req, res) {
  AreaMgr.getAreaInfoByCity(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/getmahalla/:id', function(req, res) {
  MahallaMgr.getMahallaInfoByIdArea(req.params.id,function(err,result){
    res.send(result);
  });
});

router.get('/getschool/:id', function(req, res) {
  SchoolMgr.getSchoolID(req.params.id,function(err,result){
    res.send(result);
  });
});

router.post('/addschool',function(req,res){
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

router.post('/addAddres',function(req,res){
  validator.isAddres(req,function(err,result){
    if(result!=true){
      var rel={"result":result,stat:false}
      res.send(rel);
    }
    else {
      //console.log(idcompany);
      CompanyAddressMgr.AddCompanyAddress(req.body,idcompany,function(err,result){
         CompanyAddressMgr.getCompanyAddressInfoById(result.insertId,function(err,resultid){
          var rel={"result":resultid,stat:true}
          res.send(rel);
        });
      });
    }
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


router.get('/adminInvoice', function(req, res) {
  res.render('adminInvoice', { title: 'Invoice'});
});

router.get('/adminSerialNumber', function(req, res) {
   res.render('adminSerialNumber', { title: 'Loading....'});
  /*rand.NumberActiveprepaidCard(function(result){
    rand.getTotalmony(function(result1){
      rand.ActiveprepaidCard(20,function(result2){
        rand.ActiveprepaidCard(50,function(result3){
          rand.ActiveprepaidCard(100,function(result4){
            rand.usedCard(function(result5){
              rand.UseitActiveprepaidCard(20,function(result6){ 
                rand.UseitActiveprepaidCard(50,function(result7){ 
                  rand.UseitActiveprepaidCard(100,function(result8){ 
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

  */
});

router.get('/viewAdmin', function(req, res) {
  AdminMgr.GetAllAdmin(function(err,result){  
    res.render('viewAdmin', { title: 'view Admins' ,admin:result,NProgress:"fadeIn out"});
  });
});

router.get('/loadingImg', function(req, res) {
  res.render('loadingImg', { title: 'Loading....'});
});

router.get('/testPage', function(req, res) {
  CityMgr.GetCity(function(err,result){
    res.render('testPage', { title: 'Test Page',cities:result});
  });
});

router.get('/addAdmin', function(req, res) {
  res.render('addAdmin', { title: 'Add Admin'});
});
router.get('/addPrepaidVendor', function(req, res) {
  res.render('addPrepaidVendor', { title: 'prepaidVendor'});
});

router.get('/vendor', function(req, res) {
  res.render('vendor', { title: 'vendor'});
});
router.get('/vendor/vendorHasPrepaid', function(req, res) {
  res.render('vendorHasPrepaid', { title: 'vendorHasPrepaid'});
});

router.get('/viewItem', function(req, res) {
  res.render('viewItem', { title: 'View Item'});
});

router.get('/newItem', function(req, res) {
  res.render('newItem', { title: 'New Item'});
});

router.post('/addAdmin',function(req,res){
  AdminMgr.checkEmailAdmin(req.body.email, function(err,result){
    if(result[0]==undefined)
      user.addAdmin(req.body,function(results){
        res.send(true);
      });
    else
      res.send(false);
  });
});

router.post('/checkEmail',function(req,res){
  AdminMgr.checkEmailAdmin(req.body.email, function(err,result){
    if(result[0]==undefined)
      res.send(true);
    else
      res.send(false);
  });
});

module.exports = router;
