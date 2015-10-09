var bodyParser = require('body-parser');
var sql= require('./db');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';


module.exports =function(app) {
  app.use('/api', expressJwt({secret: secret}));

  app.use(bodyParser.json());
  app.use(function(err, req, res, next){
    if (err.constructor.name === 'UnauthorizedError') {
      res.status(401).send('Unauthorized');
    }
  });
  app.post('/authenticate', function (req, res) {
    //TODO validate req.body.username and req.body.password
    //if is invalid, return 401

    var sqlQuery = 'SELECT * from userss where username = ? and password = ?'
    sql.query(sqlQuery,[req.body.username , req.body.password], function(err, rows, fields) {
      if (!err){
        console.log('The solution is: ', rows);
        if (!(req.body.username === rows[0].username && req.body.password === rows[0].password)) {
          res.status(401).send('Wrong user or password');
          return;
            }
          var token = jwt.sign(rows, secret, { expiresInMinutes: 60*5 });

          res.json({ token: token });

          }
         else {
          console.log('Error while performing Query.');
        }
        });



    });




    // We are sending the profile inside the token


  app.get('/api/restricted', function (req, res) {
    console.log('user ' + req.user.email + ' is calling /api/restricted');
    res.json({
      name: 'foo'
    });
  });


}
