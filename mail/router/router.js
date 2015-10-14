var express = require('express');

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';

var sql = require('./db');
var $q = require('q');

var apiRoutes = express.Router();
var model = require('../../model');

module.exports = function(app) {
    apiRoutes.get('/', function(req, res) {
        res.json({
            'hello': 'world'
        });
    });

    apiRoutes.post('/login', urlencodedParser, function(req, res) {
        console.log(req);
        var username = req.body.username,
            password = req.body.password;
        console.log(username);
        console.log(password);
        var success = function(user) {
            var token = jwt.sign(user, secret);
            console.log(user);
            res.json({
                'success': true,
                'token': token,
                'user_details': user
            });
        };

        var failed = function(msg) {
            res.status(401)
                .json({
                    'success': false,
                    'message': msg
                });
        };

        // model.authenticateLogin(username, password)
        //   .then(success, failed);

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
    });

    // GET: api/userdetails?user_id=xx
    apiRoutes.post('/userdetails', urlencodedParser, function(req, res) {
        var success = function(user) {
            var token = jwt.sign(user, secret);
            console.log(user);
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
                });
        };
        var sqlQuery = "SELECT * from users";
        var callback = function(err, rows, fields) {
            if (!!err) {
                deferred.reject(err);
            } else {
                console.log(rows);
                if (!!rows.length) {
                    success(rows);
                } else {
                    failed('Wrong user or password');
                }
            }
        };
        sql.query(sqlQuery, callback);
        // model.getUserDetails(req)
        //   .then(success, failed);
    });

    // GET: api/getthreads?user_id=xx
    apiRoutes.get('/getthreads', function(req, res) {
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
