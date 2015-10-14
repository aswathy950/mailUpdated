var bodyParser = require('body-parser');
var sql = require('./db');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';


function readInbox(id, res, token) {
    var sqlQuery = 'select * from message_details where message_id in (' +
        'select message_id from message where thread_id in(' +
        'select thread_id from thread where user_id = ?))';
    sql.query(sqlQuery, [id], function(err, result) {
        if (!err) {
            //  res.json({
            //      token: token
            //  });
        } else {
            console.log('Error!!: ' + err);
        }
    });
    return;
}
module.exports = function(app) {
    app.post('/home', urlencodedParser, function(req, res) {
        response = {
            user_name: req.body.username,
            password: req.body.password
        };
        console.log(req.body.username);
        var sqlQuery = "SELECT * from userss where username = ? and password = ?";

        sql.query(sqlQuery, [response.user_name, response.password], function(err, rows, fields) {
            console.log(rows);
            if (!err) {
                if (rows.length !== 0) {
                    var token = jwt.sign(rows[0], 'someKey');
                    var mails = readInbox(rows[0].user_id, res, token);
                    console.log('Mails : ' + mails);
                    console.log('hello');
                } else {
                    res.status(401).send('Wrong user or password');
                }
            } else {
                console.log('error connecting to db' + err);
            }

        });

    });
};
