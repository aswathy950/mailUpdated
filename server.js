var express     = require('express');
var ejs         = require('ejs');
var mysql       = require('mysql');
var app         = require('express')();
var bodyParser  = require('body-parser');

var port = 3000;

var server  = require('http').Server(app);
var io      = require('socket.io')(server);

// app.use(io());
app.use(express.static('public'));
app.use('/', express.static(__dirname + '/'));

app.set('superSecret', 'asathoma satgamaya thamasoma jyothirgayama'); // secret variable

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

//require('./mail/router/index.js')(app);
require('./mail/router/router.js')(app);
require('./mail/router/createuser.js')(app);
require('./mail/router/compose.js')(app);

server.listen(port, function(){
    console.log('Server is listening in : '+port);
});

io.set('origins', 'http://localhost:3000');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('New User Connected');

    socket.on('send_mail', function(data) {
        console.log('Send Mail received in Server' +data.cc);

        io.emit('receive', data);
        console.log('Data received in Server resend to the Client : '+data);
    });
});
