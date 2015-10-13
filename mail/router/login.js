var db = require("./db");
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

function readInbox(id) {
  var sqlQuery = 'select * from message_details where message_id in ('+
                  'select message_id from messages where thread_id in('+
                    'select thread_id from thread where user_id = ?))';
  var rows = [];
  db.query( sqlQuery , [id] , function(err, result) {
    if(!err) {
      rows = result;
      console.log(rows);
    } else {
      console.log('Error!!: ' + err);
    }
  });
  return rows;
}

module.exports = function(app) {
  app.use(bodyParser());
  app.use(cookieParser());
  app.use(session({
    secret : "key"
  }));
  app.post('/', function (req, res) {
  // Prepare output in JSON format

    response = {
      user_name:req.body.username,
      password:req.body.password
    };

    var sqlQuery = "SELECT * from users where email = ? and password = ?";

    db.query(sqlQuery,[response.user_name, response.password], function(err, rows, fields) {
      //db.end();
      if (rows.length!=0) {
        console.log('loged in: ', rows);
        req.session.username = response.user_name;
        console.log(req.session);
        var data = readInbox(rows[0].user_id);
        ro = JSON.stringify(data);

        //Below code needs to be changed
        res.render("home.html",(name = req.session.username));
      } else {
          console.log('Error while performing Query.');
          res.render('index.html',(value = 'username or password is incorrect'));
      }

    });

  });
}
