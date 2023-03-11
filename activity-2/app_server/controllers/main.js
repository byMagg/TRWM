/* GET home page */

module.exports.index = (req, res) => {
  res.render('index', { title: 'Express Main' });
};

module.exports.test = (req, res) => {
  res.render('index', { title: 'Express Test' });
};

/* module.exports = {
  index(req, res) {
    res.render('index', { title: 'Express' });
  },
  test(req, res) {
    res.render('index', { title: 'Express Test' });
  }
}; */

/* module.exports.index = function(req, res) {
  res.render('index', { title: 'Express' });
}; */
