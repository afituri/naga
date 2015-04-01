var mysqlMgr = require('./mysql').mysqlMgr,
util=require('util');
exports.MeasureMgr = {
/////////////////// MEASURE ///////////////////////////////////////////
  GetMeasure :function(limit,cb){
    mysqlMgr.connect(function (conn) {
      //SELECT o.idorder FROM orders   WHERE o.deleted =1  limit ?,10; SELECT COUNT(*) as cnt FROM orders as o, employee as emp ,department as dept WHERE o.deleted=1  AND  o.requestEmploye=emp.idemployee AND dept.iddepartments=emp.iddepartment;',[limit],function(err, result1) {
      conn.query('SELECT * FROM `measure` WHERE `status` <> 0 limit ?,10 ; SELECT count(*) as cnt FROM `measure` WHERE `status` <> 0 ',limit, function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },

  AddMeasure : function(body,cb){
    mysqlMgr.connect(function (conn) {
      conn.query('INSERT INTO `measure` SET ?',body,  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result);
        }
      });
    });
  },
  UpdateMeasureNameAR : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `measure` SET `name` = ?,`update_time`=? WHERE `idmeasure` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },
  
  UpdateMeasureNameEN : function(body,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `measure` SET `name_en` = ?,`update_time`=? WHERE `idmeasure` = ?',  [body.value,date,body.pk],  function(err, result) {
        conn.release();
        if(err) {
          util.log(err);
        } else {
          cb(result); 
        }
      });
    });
  },

  DeleteMeasure : function(id,cb){
    mysqlMgr.connect(function (conn) {
      var date = new Date();
      conn.query('UPDATE `measure` SET `status` = 0 ,`update_time` = ? WHERE `idmeasure` = ?',[date,id],  function(err, result) {
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
