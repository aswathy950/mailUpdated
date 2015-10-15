var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
})
module.exports = function(app) {
    var sql = require('./db');
    app.post('/register', urlencodedParser, function(req, res) {
        response = {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.Username,
            email: req.body.Email,
            image: req.body.fileUploaded,
            phone: req.body.Telephone,
            password: req.body.password,

        };
        console.log(response);
        sql.query('insert into users set ?', response, function(err, rows, fields) {
            if (!err) {
                console.log('The solution is: ', rows);

            } else {
                console.log('Error while performing Query.');
            }

        });
    });
}
