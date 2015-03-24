var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.ColorMgr = {
/////////////////// COLOR ///////////////////////////////////////////
  GetColor :function(cb){
    mysqlMgr.connect(function (conn) {
      conn.query('SELECT * FROM `color` WHERE `status` <> 0',  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddColor : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `color` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  UpdateColorNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `name` = ?,`update_time`=? WHERE `idcolor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateColorNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `name_en` = ?,`update_time`=? WHERE `idcolor` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  DeleteColor : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `color` SET `status` = 0 ,`update_time` = ? WHERE `idcolor` = ?',[date,id],  function(err, result) {
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
