var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var validator = require('../app/validator_api');
var rand= require('../app/serialnumber').rand;
var user =require('../app/userHelpers');
var AdminMgr=require('../app/admin').AdminMgr;
var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs   = require('fs-extra');
router.get('/', function(req, res) {
  i18n.setlang(req,res);
  res.render('adminLogin', { title: 'Login' });
});
router.get('/testPhoto', function(req, res) {
  res.render('testPhoto', { title: 'Admin Page',NProgress:"fadeIn out" });
});
router.get('/adminPage', function(req, res) {
  res.render('adminPage', { title: 'Admin Page',NProgress:"fadeIn out" });
});
router.get('/adminTest', function(req, res) {
  res.render('adminTest', { title: 'Admin Test' });
});


router.get('/adminShowOrder', function(req, res) {
  res.render('adminShowOrder', { title: 'Admin Show Order',NProgress:"fadeIn out"});
});
// router.post('/savePhoto',function(req, res) {
//   if (req.url == '/savePhoto') {
//     var form = new formidable.IncomingForm();
//     form.parse(req, function(err, fields, files) {
//       var temp_path = files.logo.path;
//       var file_name = files.logo.name;
//       var new_location = 'public/company_picture/';
//       fs.copy(temp_path, new_location + file_name, function(err) {  
//           if (err) {
            
//           } else {
//               CompanyMgr.addPhoto(idaCompanyView,file_name,function(err,result){  
//             });
//               res.redirect('/adminCompany/'+idaCompanyView+'/adminCompanyView');  
//           }
//       });     
//     });
//   }
// });
router.get('/deleteAdmin/:id', function(req, res) {
  AdminMgr.DeleteAdmin(req.params.id,function(err,result){
    res.send(true);
  });
});

router.get('/adminInvoice', function(req, res) {
  res.render('adminInvoice', { title: 'Invoice'});
});
router.get('/adminSerialNumber', function(req, res) {
   res.render('adminSerialNumber', { title: 'Loading....'});
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
  CompanyMgr.GetCompany(function(err,result){
    TobMgr.GetTob(function(err,result1){
      res.render('newItem', { title: 'New Item',companys:result,tobs:result1});
    });
  });
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