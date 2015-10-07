

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('mail/views/login.html');
  });

  app.get('/login', function(req, res){
    res.render('mail/views/login.html');
  });

  

};
