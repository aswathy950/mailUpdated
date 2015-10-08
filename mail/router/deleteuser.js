var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{
  var sql= require('./db');
  app.post('/deleteuser', urlencodedParser, function (req, res) {
    response = {
      username : req.body.Username,
      email : req.body.email,
      adminpassword : req.body.password,
 };




 });
}
