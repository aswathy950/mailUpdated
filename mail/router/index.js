var bodyParser = require('body-parser');
var sql= require('./db');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app) {
  app.post('/adminlogin', urlencodedParser, function (req, res) {
    response = {
         username : req.body.username,
         password : req.body.password
    };
    var sqlQuery = 'SELECT * from admin where username = ? and password = ?'
    sql.query(sqlQuery,[response.username, response.password], function(err, rows, fields) {
      if (!err){
        console.log('The solution is: ', rows);
        if(rows[0] === null) {
          res.redirect('error');
        } else {
          res.redirect('adminloginpage');
        }
      } else {
        console.log('Error while performing Query.');
      }
    });
       console.log(response);
  });
}
