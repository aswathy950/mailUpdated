var bodyParser = require('body-parser');
<<<<<<< HEAD
var sql= require('./db');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
=======
var sql = require('./db');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';


function readInbox(id, res, token) {
<<<<<<< HEAD
   var sqlQuery = 'select * from message_details where message_id in (' +
       'select message_id from message where thread_id in(' +
       'select thread_id from thread where user_id = ?))';
   sql.query(sqlQuery, [id], function(err, result) {
       if (!err) {
          //  res.json({
          //      token: token
          //  });
       } else {
           console.log('Error!!: ' + err);
       }
   });
   return;
}
module.exports = function(app) {
  // app.use('/api', expressJwt({secret: secret}));
  //
  // app.use(bodyParser.json());
  // app.use(function(err, req, res, next){
  //   if (err.constructor.name === 'UnauthorizedError') {
  //     res.status(401).send('Unauthorized');
  //   }
  // });
  // app.post('/login',urlencodedParser,function (req, res) {
  //   //TODO validate req.body.username and req.body.password
  //   //if is invalid, return 401
  //
  //   var sqlQuery = 'SELECT * from userss where username = ? and password = ?'
  //   sql.query(sqlQuery,[req.body.username , req.body.password], function(err, rows, fields) {
  //     if (!err){
  //       console.log('The solution is: ', rows);
  //
  //       if (!rows[0]) {
  //         res.status(401).send('Wrong user or password');
  //         return;
  //           }
  //           else{
  //
  //         token = jwt.sign(rows, secret, { expiresInMinutes: 60*5 });
  //         res.json({ token: token });
  //           }
  //         }
  //        else {
  //         console.log('Error while performing Query.');
  //       }
  //       });
  //   });
    app.post('/home',urlencodedParser, function(req, res) {
          response = {
              user_name: req.body.username,
              password: req.body.password
          };
          console.log(req.body.username);
          var sqlQuery = "SELECT * from userss where username = ? and password = ?";

          sql.query(sqlQuery, [response.user_name, response.password], function(err, rows, fields) {
              console.log(rows);
              if (!err) {
                  if (rows.length !== 0) {
                      var token = jwt.sign(rows[0], 'someKey');
                      var mails = readInbox(rows[0].user_id, res, token);
                      // res.json({
                      //     token: token
                      // });
                      // var token = {
                      //   'name':rows[0].username
                      // }

                      console.log('Mails : '+mails);
                      console.log('hello');
                  } else {
                      res.status(401).send('Wrong user or password');
                  }
              } else {
                  console.log('error connecting to db' + err);
              }

          });

      });


    // We are sending the profile inside the token





}
=======
    var sqlQuery = 'select * from message_details where message_id in (' +
        'select message_id from message where thread_id in(' +
        'select thread_id from thread where user_id = ?))';
    sql.query(sqlQuery, [id], function(err, result) {
        if (!err) {
            //  res.json({
            //      token: token
            //  });
        } else {
            console.log('Error!!: ' + err);
        }
    });
    return;
}
module.exports = function(app) {
    app.post('/home', urlencodedParser, function(req, res) {
        response = {
            user_name: req.body.username,
            password: req.body.password
        };
        console.log(req.body.username);
        var sqlQuery = "SELECT * from userss where username = ? and password = ?";

        sql.query(sqlQuery, [response.user_name, response.password], function(err, rows, fields) {
            console.log(rows);
            if (!err) {
                if (rows.length !== 0) {
                    var token = jwt.sign(rows[0], 'someKey');
                    var mails = readInbox(rows[0].user_id, res, token);
                    console.log('Mails : ' + mails);
                    console.log('hello');
                } else {
                    res.status(401).send('Wrong user or password');
                }
            } else {
                console.log('error connecting to db' + err);
            }

        });

    });
};
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
