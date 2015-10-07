
var mysql      = require('mysql');
var connection;

  module.exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'database name'
  });
