var express = require('express');
var ejs = require('ejs');
var mysql = require('mysql');
var app     = express();
var bodyParser = require('body-parser');
var newapp         = require('express')();

var port = 3000;

var server  = require('http').Server(newapp);
var io      = require('socket.io')(server);

var clients = {};

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

    socket.on('SetUser', function(userName) {
        socket.id = userName;
        console.log(socket.id + ' : Connected');
        clients[socket.id] = socket;
    });

    // console.log(io.clients());
    socket.on('send_mail', function(mail) {
        console.log('Send Mail received in Server , To - ' +mail.to);

        var sock = clients[mail.to];
        sock.emit('receive', mail);
        console.log('Data received in Server resend to the Client : '+mail);
    });
    socket.on('disconnect', function () {
        console.log(socket.id +' : Disconnected');
    });
});
