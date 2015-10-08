module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('mail/login.html');
  });

  app.get('/login', function(req, res){
    res.render('mail/login.html');
  });
  app.get('/adminloginpage',function(req,res){
    res.render('mail/admin.html')
  });
  app.get('/userpage',function(req,res){
    res.render('mail/user.html')
  });
  app.get('/error',function(req,res){
    res.render('mail/error.html')
  });
};
