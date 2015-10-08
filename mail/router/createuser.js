var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{
  var sql= require('./db');
  app.post('/adminlogin', urlencodedParser, function (req, res) {
    




  });

}
