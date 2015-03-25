var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.CityMgr = {
/////////////////// CITY ///////////////////////////////////////////
  GetCity :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `city` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  },

  AddCity : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `city` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  },
  UpdateCityNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `name` = ?,`update_time`=? WHERE `idcity` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  },
  
  UpdateCityNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `name_en` = ?,`update_time`=? WHERE `idcity` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  },

  DeleteCity : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `city` SET `status` = 0 ,`update_time` = ? WHERE `idcity` = ?',[date,id],  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  },

  deleteTest : function(id,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('DELETE from `city` WHERE `idcity` = ?',id,  function(err, result) {
        conn.release();
        if(err) {
          cb(null,err);
        } else {
          cb(result,null);
        }
      });
    });
  }
//////////////////////////////////////////////////////////////////////////
 
  
};
