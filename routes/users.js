var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('\nresponding with a resource 4\n');
});

module.exports = router;
