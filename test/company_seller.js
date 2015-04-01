var assert = require("assert"); // core module
var CompanySeller = require('../app/seller_app').sellerMgr;  // our module
var CompanyMgr = require('../app/company').CompanyMgr;  // our module
var adminMgr = require('../app/admin').AdminMgr;  // our module
var tobMgr = require('../app/tob').TobMgr;  // our module
var company = require('../TestUser/mochaObj.json').company;
var admin = require('../TestUser/mochaObj.json').admin;
var tob = require('../TestUser/mochaObj.json').tob;
var obj = require('../TestUser/mochaObj.json').seller;


describe('Module admin', function(){
  
  it('admin is an object with a fucntion ', function(){
    assert.equal(typeof adminMgr, 'object');
  }),

  //////////////////////////////////////////////////////////////////////////////////////////
  describe('#AddTob()',function(){
    it('Should inser without an error', function(done){
      tobMgr.AddTob(tob['add_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#AddAdmin()',function(){
    it('Should inser without an error', function(done){
      adminMgr.AddAdmin(admin['add_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#AddCompany()',function(){
    it('Should inser without an error', function(done){
      company.AddCompany(obj["add_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
///////////////////////////////////////////////////////////////////////////////////////////////////


  describe('#GetAllAdmin()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetAllAdmin(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetAdminById()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetAdminById(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetNameById()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetNameById(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetEmailById()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetEmailById(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetLevelById()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetLevelById(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetStatusById()',function(){
    it('Should update without an error', function(done){
      adminMgr.GetStatusById(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#checkEmailAdmin()',function(){
    it('Should update without an error', function(done){
      adminMgr.checkEmailAdmin(obj['admin_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateName()',function(){
    it('Should update without an error', function(done){
      adminMgr.UpdateName(obj['update_admin_name'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateEmail()',function(){
    it('Should update without an error', function(done){
      adminMgr.UpdateEmail(obj['update_admin_email'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateLevel()',function(){
    it('Should update without an error', function(done){
      adminMgr.UpdateLevel(obj['update_admin_level'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteAdmin()',function(){
    it('Should delete without an error', function(done){
      adminMgr.DeleteAdmin(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      adminMgr.deleteTest(obj['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
/////////////////////////////////////////////////////////////////////////////////////

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      company.deleteTest(obj["delete_company"],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),
  
  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      adminMgr.deleteTest(admin['delete_admin'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      tobMgr.deleteTest(tob['delete_tob'],function(err,result){
        if (err) throw err;
        done();
      });
    })
  })
//////////////////////////////////////////////////////////////////////////////



});
