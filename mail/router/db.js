
var mysql      = require('mysql');
var connection;

  module.exports.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'achu123',
    database : 'gmail'
  });
