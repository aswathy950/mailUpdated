<<<<<<< HEAD
var express = require('express');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';

var sql = require('./db');
var $q = require('q');

var apiRoutes = express.Router();
var model = require('../../model');


=======
var express             = require('express');
var bodyParser          = require('body-parser');
var urlencodedParser    = bodyParser.urlencoded({
    extended            : false
});
var jwt                 = require('jsonwebtoken');
var expressJwt          = require('express-jwt');
var secret              = 'asathoma satgamaya thamasoma jyothirgayama';
var sql                 = require('./db');
var $q                  = require('q');
var apiRoutes = express.Router();
var model = require('../../model');
var io = require('socket.io');
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780

module.exports = function(app) {
    apiRoutes.get('/', function(req, res) {
        res.json({
            'hello': 'world'
        });
    });

    apiRoutes.post('/login', urlencodedParser, function(req, res) {
<<<<<<< HEAD
        function readInbox(user) {
            var sqlQuery =  'select * from message_details where message_id in (' +
                            'select message_id from message where thread_id in(' +
                            'select thread_id from thread where user_id = ?))';
            var rows = [];
            sql.query(sqlQuery, [user.user_id], function(err, result) {
                if (!err) {
                    success({
                        user : user,
                        mails : result
                    });
                } else {
                    console.log('Error!!: ' + err);
                }
            });
            return rows;
        }
        console.log(req);
        var username = req.body.username,
            password = req.body.password;
        console.log(username);
        console.log(password);
        var success = function(data) {
            var token = jwt.sign(data.user, secret);
            console.log(data);
            res.json({
                'success': true,
                'token': token,
                'user_details': data.user,
                'mails': data.mails
=======
        var username = req.body.username,
            password = req.body.password;
        var success = function(user) {
            var token = jwt.sign(user, secret);
            res.json({
                'success': true,
                'token': token,
                'user_details': user
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
            });
        };

        var failed = function(msg) {
            res.status(401)
                .json({
                    'success': false,
                    'message': msg
<<<<<<< HEAD
                })
=======
                });
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
        };

        // model.authenticateLogin(username, password)
        //   .then(success, failed);

<<<<<<< HEAD
        var sqlQuery = "SELECT * from users where email = ? and password = ?";
        var mails;
        var callback = function(err, rows, fields) {
            if (!!err) {
                deferred.reject(err)
            } else {
                console.log(rows);
                if (!!rows.length) {
                    readInbox(rows[0]);
                } else {
                    failed('Wrong user or password');
                };
            }
        };

        sql.query(sqlQuery, [username, password], callback);

=======
        var sqlQuery = "SELECT * from users where username = ? and password = ?";

        var row;

        var callback = function(err, rows, fields) {
            if (!!err) {
                deferred.reject(err);
            } else {
                console.log(rows);

                if (!!rows.length) {
                    success(rows[0]);
                } else {
                    failed('Wrong user or password');
                }
            }
        };
        sql.query(sqlQuery, [username, password], callback);
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
    });

    // GET: api/userdetails?user_id=xx
    apiRoutes.post('/userdetails', urlencodedParser, function(req, res) {
        var success = function(user) {
            var token = jwt.sign(user, secret);
<<<<<<< HEAD
            console.log(user);
=======
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
            res.json({
                'success': true,
                'token': token,
                'user_details': user
            });
        };

        var failed = function() {
            res.status(401)
                .json({
                    'success': false,
                    'message': msg
<<<<<<< HEAD
                })
        };
        var sqlQuery = "select * from users";
        var callback = function(err, rows, fields) {
            if (!!err) {
                // deferred.reject(err)
=======
                });
        };
        var sqlQuery = "SELECT * from users";
        var callback = function(err, rows, fields) {
            if (!!err) {
                deferred.reject(err);
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
            } else {
                console.log(rows);
                if (!!rows.length) {
                    success(rows);
                } else {
                    failed('Wrong user or password');
<<<<<<< HEAD
                };
            }
        };
        sql.query(sqlQuery, callback);
    });

    // GET: api/getthreads?user_id=xx
    apiRoutes.get('/inbox', function(req, res) {
        console.log('in at inbox');
=======
                }
            }
        };
        sql.query(sqlQuery, callback);
        // model.getUserDetails(req)
        //   .then(success, failed);
    });

    // GET: api/getthreads?user_id=xx
    apiRoutes.get('/getthreads', function(req, res) {
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
        var success = function() {
            res.json({
                message: 'hello world'
            });
        };

        var failed = function() {
            res.json({
                message: 'hello world'
            });
        };

        model.getThreads(req)
            .then(success, failed);
    });

    // GET: api/getmails?thread_id=xx
    apiRoutes.get('/getmails', function(req, res) {
        var success = function() {
            res.json({
                message: 'hello world'
            });
        };

        var failed = function() {
            res.json({
                message: 'hello world'
            });
        };

        model.getMails(req)
            .then(success, failed);
    });

    app.use('/api', apiRoutes);
};
