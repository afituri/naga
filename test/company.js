var assert = require("assert"); // core module
var company = require('../app/company').CompanyMgr;  // our module

var add_company= {idcompany:10000000,name:'ناقة',name_en:'naga', logo:'1asf',admin_idadmin:1,tob_idtob:1},
    update_company_name={value:'الناقة',pk:10000000},
    update_company_name_en={value:'alnaga',pk:10000000},
    update_company_logo={value:'alnaga',pk:10000000},
    update_company_level={value:2,pk:10000000},
    update_company_admin={value:2,pk:1},
    update_company_tob={value:2,pk:1},
    delete_company=10000000;


describe('Module company', function(){
  
  it('company is an object with a fucntion called Addcompany', function(){
    assert.equal(typeof company, 'object');
  }),

  describe('#AddCompany()',function(){
    it('Should inser without an error', function(done){
      company.AddCompany(add_company,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#GetCompany()',function(){
    it('Should update without an error', function(done){
      company.GetCompany(function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyNameAR()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyNameAR(update_company_name,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyNameEN()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyNameEN(update_company_name_en,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyLogo()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyLogo(update_company_logo,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyLevel()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyLevel(update_company_level,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyIdAdmin()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyIdAdmin(update_company_admin,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#UpdateCompanyIdTop()',function(){
    it('Should update without an error', function(done){
      company.UpdateCompanyIdTop(update_company_tob,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#DeleteCompany()',function(){
    it('Should delete without an error', function(done){
      company.DeleteCompany(delete_company,function(err,result){
        if (err) throw err;
        done();
      });
    })
  }),

  describe('#deleteTest()',function(){
    it('Should delete test without an error', function(done){
      company.deleteTest(delete_company,function(err,result){
        if (err) throw err;
        done();
      });
    })
  })

});
