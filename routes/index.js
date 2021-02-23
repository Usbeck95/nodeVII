var express = require('express');
var router = express.Router();
var confil = require('../views/continentsfil');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express about' });
});

router.get('/continents', function(req, res, next) {
  res.render('continents', confil);
});

module.exports = router;
