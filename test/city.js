var assert = require("assert"); // core module
var City = require('../app/city').CityMgr;  // our module

var add_city= {idcity:1000,name:'الخمس',name_en:'Elkhoms', status:1},
    update_city_name={value:'خمس',pk:1000},
    update_city_name_en={value:'Khoms',pk:1000},
    delete_city=1000;


describe('Module City', function(){
  
  it('city is an object with a fucntion called AddCity', function(){
    assert.equal(typeof City, 'object');
    assert.equal(typeof City.AddCity, 'function');
  }),

  describe('#AddCity()',function(){
    it('Should inser without an error', function(done){
      City.AddCity(add_city,function(result,err){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#getCities()',function(){
    it('Should update without an error', function(done){
      City.GetCity(function(result,err){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCityNameAR()',function(){
    it('Should update without an error', function(done){
      City.UpdateCityNameAR(update_city_name,function(result,err){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCityNameEN()',function(){
    it('Should update without an error', function(done){
      City.UpdateCityNameEN(update_city_name_en,function(result,err){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCity()',function(){
    it('Should delete without an error', function(done){
      City.DeleteCity(delete_city,function(result,err){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      City.deleteTest(delete_city,function(result,err){
        if (err) throw err;
        done();
      });
    })
  })

});
