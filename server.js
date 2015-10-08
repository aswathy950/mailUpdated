var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var app     = express();

app.use(express.static('public'));
app.set('views', __dirname);
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./mail/router/router.js')(app);
require('./mail/router/index.js')(app);
require('./mail/router/createuser.js')(app);
require('./mail/router/deleteuser.js')(app);



var server = app.listen(3000,function(){
  console.log("Express is running on port 3000");
});
