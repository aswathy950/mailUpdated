var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var app     = express();

var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
app.use(express.static('public'))

var secret = 'asathoma satgamaya thamasoma jyothirgayama';

app.use('/api', expressJwt({secret: secret}));

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

app.use(function(err, req, res, next){
  if (err.constructor.name === 'UnauthorizedError') {
    res.status(401).send('Unauthorized');
  }
});

app.post('/authenticate', function (req, res) {
  //TODO validate req.body.username and req.body.password
  //if is invalid, return 401
  if (!(req.body.username === 'admin' && req.body.password === 'admin')) {
    res.status(401).send('Wrong user or password');
    return;
  }

  var profile = {
    first_name: 'admin',
    last_name: 'admin',
    email: 'ab@cd.com',
    id: 123
  };

  // We are sending the profile inside the token
  var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

  res.json({ token: token });
});

app.get('/api/restricted', function (req, res) {
  console.log('user ' + req.user.email + ' is calling /api/restricted');
  res.json({
    name: 'foo'
  });
});

require('./mail/router/index.js')(app);
require('./mail/router/createuser.js')(app);



var server = app.listen(3000,function(){
  console.log("Express is running on port 3000");
});
