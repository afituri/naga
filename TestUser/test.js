var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;
var should = require('should');
var  supertest=require('supertest');
var test =require('./testjson');
	
	userMgr.checkEmailSeller(test.email, function(results){
 		console.log(results);
 	});

	userMgr.getFirstNameById(test.idcustomer, function(results){
 		console.log(results);
 	});

  	userMgr.getLastNameById(test.idcustomer, function(results){
  		console.log(results);
 	});

 	userMgr.getEmailById (test.idcustomer, function(results){
  		console.log(results);
 	});
 	 	
 	userMgr.getStatusById (test.idcustomer, function(results){
  		console.log(results);
 	});







module.exports = router;
