var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/users', function(req, res, next) {
  res.render(require.resolve(__dirname+'main'));
});
router.get('/single', function(req, res, next){
  res.sendfile(__dirname+'/single.hbs');
})
module.exports = router;
