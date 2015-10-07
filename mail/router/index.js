var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
module.exports =function(app)
{

var sql= require('./db');
  app.post('/adminlogin', urlencodedParser, function (req, res) {
     response = {
       username:req.body.username,
       password:req.body.password

     };

     sql.connection.query('SELECT * from admin where username="'+response.username+'" and password="'+response.password+'" ', function(err, rows, fields) {
       if (!err){
         console.log('The solution is: ', rows);

       }
       else
       {
         console.log('Error while performing Query.');
     }

   if(rows[0]==null){

   res.redirect('error')
   }
   else {



   res.redirect('adminloginpage')

   }
    });
     console.log(response);

});
}
