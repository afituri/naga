var express = require('express');
var router = express.Router();
var i18n = require('../app/i18n');
var users = require('../TestUser/testjson').users;
var user =require('../app/userHelpers');
var validator = require('../app/validator_api');
var StockMgr = require('../app/stock').StockMgr;



router.get('/', function(req, res) {
  var page = user.getPage(req);
  var limit =user.getLimit(page);
  StockMgr.GetStock(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.render('adminStock', { title: 'Stock',stock:result[0],pagination:pagination});
    }
  });
});

router.get('/:id', function(req, res) {;
  console.log("in view");
  StockMgr.GetStockByID(req.params.id,function(err,result){
    console.log("you get stocks");
    var page = user.getPage(req);
    var limit =user.getLimit(page);
    StockMgr.GetItem(req.params.id,limit,function(err,results){
      console.log("you get iteams");
      if(result[1][0] != undefined ){
        var pageCount = user.getPageCount(result[1][0].cnt); 
        var pagination = user.paginate(page,pageCount);
        res.render('viewstock', { title: 'stock',iteam:results[0],pagination:pagination,stock:results});
      } 
    }); 
  });
});

/*delete stock*/
router.get('/delete/:id', function(req, res) {
  console.log("in dellllllteeeeeeeeeeeeeeeeeeeeeeeee");
  StockMgr.DeleteStock(req.params.id,function(err,result){
    res.send(true);
  });
});


router.post('/editStockName', function(req, res) {
  console.log("name");
  StockMgr.UpdateName(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editStockAddress', function(req, res) {
  console.log("addreess");
  StockMgr.Updateaddress(req.body,function(err,result){
    res.send(true);
  });
});

router.post('/editStockphone', function(req, res) {
  console.log("phone");
  StockMgr.Updatephone(req.body,function(err,result){
    res.send(true);
  });
});


router.post('/addStock',function(req, res) {
  console.log("you are in add stock");
  StockMgr.AddStock(req.body,function(err,result){
    StockMgr.GetStockByID(result.insertId,function(err,resultid){
      var rel={"result":resultid,stat:true}
      res.send(rel);
    });
  });
});


router.get('/viewStock', function(req, res) {
  var page = user.getPage(req);
  var limit =user.getLimit(page);
  StockMgr.GetStock(limit,function(err,result){
    if(result[1][0] != undefined ){
      var pageCount = user.getPageCount(result[1][0].cnt); 
      var pagination = user.paginate(page,pageCount);
      res.render('adminStock', { title: 'Stock',stock:result[0],pagination:pagination});
    }
  });
});
/*	view stocks	*/
// router.get('/', function(req, res) {
// 	console.log("sssssssssssssssssssssssssssssssssssssss");
//   res.render('adminStock');
// });

module.exports = router;