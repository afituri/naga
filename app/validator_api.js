var CityMgr = require('./city').CityMgr;


module.exports = {
  isCity : function (req,res,next) {
    isName(req,'name',' name required');           //Validate name
    isName(req,'name_en',' name_en required');
    var errors = req.validationErrors();  
    if( !errors){  
      return next();
    }else {   //Display errors to user
      CityMgr.GetCity(function(result){
        res.render('adminCities', { title: 'Cities',citys:result,errors: errors});
      });
    }
  }, 
};





function  isEmail (req,name,msg) {
  return req.assert(name, msg).isEmail();  //Validate email
}

function  isName (req,name,msg) {
  return req.assert(name, msg).notEmpty();  //Validate email
}