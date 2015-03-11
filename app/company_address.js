var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CompanyAddressMgr = {
/////////////////// COMPANY ADDRESS ///////////////////////////////////////////
  GetCompanyAddress :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `company_address` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddCompanyAddress : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `company_address` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  UpdateCompanyAddressLatit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address` SET `latit` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateCompanyAddressLongit : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `longit` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateCompanyAddressDefault : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `default` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateCompanyAddressIdCompany : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `company_idcompany` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  UpdateCompanyAddresssIdSchool : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address`  SET `school_idschool` = ?,`update_time`=? WHERE `idcompany_address` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  DeleteCompanyAddresss : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `company_address` SET `status` = 0 ,`update_time` = ? WHERE `idcompany_address` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
//////////////////////////////////////////////////////////////////////////
 
  
};
