var express = require('express');
var router = express.Router();
var monAn = require('../modle/MonAn');
/* GET home page. */
router.get('/', function(req, res, next) {
  monAn.find(function(err, docs){
    var monAnChuck=[];
    var chucksize = 3;
    for(var i =0; i <docs.length; i+=chucksize){
      monAnChuck.push(docs.slice(i, i+chucksize));
    }
    res.render('index',{title:'Quản lí quán ăn', mon_ans:monAnChuck});
  })
  
});
router.get('/single/:id', function(req, res){
  var ma = req.params.id;
  monAn.findOne({ma_mon : ma},function(err, result){
    if(err) throw err;
    res.render('layouts/single', result);
  });
  });

module.exports = router;
