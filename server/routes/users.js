var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/a', function(req, res, next) {
    console.log('111111')
  res.send('respond with a resource');
});

module.exports = router;
