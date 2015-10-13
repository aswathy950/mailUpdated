var jwt = require('jsonwebtoken');
var secret = 'asathoma satgamaya thamasoma jyothirgayama';

var sql = require('./mail/router/db');
var $q = require('q');

module.exports.model = {
  authenticateLogin: function(username, password) {
    var deferred = $q.deferred;
    var sqlQuery = "SELECT * from userss where username = ? and password = ?";

    var row;

    var callback = function(err, rows, fields) {
      if (!!err) {
        deferred.reject(err)
      } else {
        if (!!rows.length) {
          deferred.resolve(rows[0]);
        } else {
          deferred.reject('Wrong user or password');
        };
      }
    };

    sql.query(sqlQuery, [username, password], callback);

    return deferred.promise;
  }
};
