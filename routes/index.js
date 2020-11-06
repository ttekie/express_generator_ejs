var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express with ejs!', header: 'This is using ejs!' });
});

module.exports = router;
