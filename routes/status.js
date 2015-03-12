
var express = require('express');
var router = express.Router();
var defaults = require('../config/defaults');

router.get('/', function(req, res) {
  res.json({status: 'up and running'});
});

router.get('/information', function(req, res) {
  res.json(defaults.app);
});

module.exports = router;