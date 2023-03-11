const express = require('express');
const router = express.Router();

/* GET home page. No controller */
/*
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

/* Controller */

const ctrlMain = require('../controllers/main');

/* GET home page */
router.get('/', ctrlMain.index);
router.get('/test', ctrlMain.test);

module.exports = router;
