var mysqlMgr = require('./mysql').mysqlMgr,

    util=require('util');
exports.userMgr = {
  /* adding a new user to the system */

  getStatusByEmail  : function(Email,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select status from customer  where Email = ? and status in (1,2,3)',Email,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else { 
             cb(result);  
           }
        });
      });
      },

        getFirstNameById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select first_name from customer  where idcustomer = ? and status=1 ',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },


      getLastNameById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select last_name from customer  where idcustomer = ? and status=1 ',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },

      getEmailById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select Email from customer  where idcustomer = ? and status=1 ',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },

      getStatusById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select status from customer  where idcustomer = ?  and status=1',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },

       getLevelById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select level from customer  where idcustomer = ? and status=1 ',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },


       getAllById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select * from customer  where idcustomer = ?  and status=1',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },
  

         getAll  : function(cb){
        mysqlMgr.connect(function (conn) {
            conn.query('select * from customer where status=1 ',function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
             cb(result);
            }          
        });
      });
      },
  



   deleteById  : function(id,cb){
        mysqlMgr.connect(function (conn) {
            conn.query('UPDATE `customer` SET `status`=0 where idcustomer=?',id,function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },
 
      UpdateFirstName  : function(body,cb){
        mysqlMgr.connect(function (conn) {
           var date =new Date();
            conn.query('UPDATE `customer` SET  first_name= ? ,update_time=?  WHERE ` idcustomer`=?',[body.value,date,body.pk], function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },
      UpdateLastName  : function(body,cb){
        mysqlMgr.connect(function (conn) {
           var date =new Date();
            conn.query('UPDATE `customer` SET  last_name= ? , update_time=?  WHERE ` idcustomer`=?',[body.value,date,body.pk], function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },


      UpdateEmailById  : function(body,cb){
        mysqlMgr.connect(function (conn) {
           var date =new Date();
            conn.query('UPDATE `customer` SET  email= ? , update_time=?  WHERE ` idcustomer`=?',[body.value,date,body.pk], function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },


      UpdateLevelById  : function(body,cb){
        mysqlMgr.connect(function (conn) {
           var date =new Date();
            conn.query('UPDATE `customer` SET  level= ? , update_time=?  WHERE ` idcustomer`=?',[body.value,date,body.pk], function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },

      UpdateStatusById  : function(body,cb){
        mysqlMgr.connect(function (conn) {
           var date =new Date();
            conn.query('UPDATE `customer` SET  status= ? , update_time=?  WHERE ` idcustomer`=?',[body.value,date,body.pk], function(err, result) {
            conn.release();
          if(err) {
             util.log(err);
         } else {
              cb(result);
            }
           });
        });
      },
};