var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var app     = express();

var bodyParser = require('body-parser');


app.use(express.static('public'))


app.use('/', express.static(__dirname + '/'));



require('./mail/router/index.js')(app);
require('./mail/router/createuser.js')(app);



var server = app.listen(3000,function(){
  console.log("Express is running on port 3000");
});
