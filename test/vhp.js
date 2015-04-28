var assert = require("assert"); // core module
var VHPMgr = require('../app/vhp').VHPMgr;  // our module
var obj = require('../TestUser/mochaObj.json').vhp;

 describe('Module vendor', function(){
    it('vhp is an object ', function(){
      assert.equal(typeof VHPMgr, 'object');
  }),

  describe('#getAllVHP()',function(){
    it('Should select without an error', function(done){
      VHPMgr.getAllVHP(function(err,result){
        if (err) throw err;
        done();
      });
    })
  })










});