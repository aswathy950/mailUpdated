var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{
  var sql= require('./db');
  app.post('/createuser', urlencodedParser, function (req, res) {
    response = {
         firstname : req.body.firstname,
         lastname : req.body.lastname,
         username : req.body.Username,
         email : req.body.Email,
         image : req.body.fileUploaded,
         phone : req.body.Telephone,
         password : req.body.password,

    };
    console.log(response);
    sql.query('insert into userss(firstname,lastname,username,email,image,phone,password,usertype) values("'+response.firstname+'","'+response.lastname+'","'+response.username+'","'+response.email+'","'+response.image+'",'+response.phone+',"'+response.password+'","user")', function(err, rows, fields) {
      if (!err){
        console.log('The solution is: ', rows);
        res.redirect('adminloginpage')
      }
      else
      {
        console.log('Error while performing Query.');
      }

    });
   });
}
