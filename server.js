var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var app     = express();
var bodyParser = require('body-parser');
app.use(express.static('public'))
app.use('/', express.static(__dirname + '/'));

app.set('superSecret', 'asathoma satgamaya thamasoma jyothirgayama'); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//require('./mail/router/index.js')(app);
require('./mail/router/router.js')(app);
require('./mail/router/createuser.js')(app);
require('./mail/router/compose.js')(app);

app.get('/',function(req, res){
  res.render('index.html');
});


var server = app.listen(3000,function(){
  console.log("Express is running on port 3000");
});
