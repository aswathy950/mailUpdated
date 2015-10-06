

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('views/login.html');
  });

  app.get('/login', function(req, res){
    res.render('views/login.html');
  });

  app.get('/home', function(req, res) {
    res.render('public/app/index.html');
  });

};
