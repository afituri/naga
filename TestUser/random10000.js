var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var userMgr= require('../app/user_app').userMgr;
var should = require('should');
var  supertest=require('supertest');
var test =require('./testjson');
var rand= require('../app/randomQuary').rand;




var InsertCount = function(count){
  for(var i=1 ; i<=count ;i++){
    InsertRandomNumber(i);
  }
}

var InsertRandomNumber = function(i){
  var random = getRandomNumber();
  rand.getRandomNumber(random,function(result){
    if(result[0] == undefined ){
      saveRandomNumber(random,i);
    } else {
      console.log("number is Exist ");
    }
  });
  return 0; 
}


var getRandomNumber = function(){
  var concatenate="";
  for(var i=0;i<13;i++){
    var random1 = Math.floor(Math.random() * 9) + 1;
    concatenate=concatenate+random1; 
  }
  return concatenate;
}

var saveRandomNumber = function(random,i){
  rand.saveRandomNumber(random,i, function (result){});
}

InsertCount(10000);


