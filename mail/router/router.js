module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('mail/login.html');
  });

  app.get('/login', function(req, res){
    res.render('mail/login.html');
  });

  app.get('/admin',function(req,res){
    res.render('mail/adminlogin.html');
  });

  app.get('/adminloginpage',function(req,res){
    res.render('mail/admin.html')
  });

  app.get('/error',function(req,res){
    res.render('mail/error.html')
  });
};
