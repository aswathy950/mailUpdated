var config = require('../../config.js');
var mysql      = require('mysql');
var connection = mysql.createConnection( config.DBConfig );

module.exports = connection;
