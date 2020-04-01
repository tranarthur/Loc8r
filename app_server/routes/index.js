var express = require('express');
var router = express.Router();

/* GET home page. */
const homepageController = (req, res, next) => {
  res.render('index', { title: 'Express' });
};

/* GET home page. */
router.get('/', homepageController)

module.exports = router;
