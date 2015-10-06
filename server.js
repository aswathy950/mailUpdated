var express = require('express');
var ejs = require('ejs');
var app     = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

require('./router/router.js')(app);





var server     =    app.listen(3000,function(){
  console.log("Express is running on port 3000");
});
