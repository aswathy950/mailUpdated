myApp.service('Mailsrv', function($http, $q) {
  var service={};

  service.login = function (params) {
    var deferred = $q.defer();
    $http.post("api/login", params)
      .success(function(data) {
         deferred.resolve(data);
      })
      .error(function(){
         deferred.reject();
      });
    return deferred.promise;
  };

  service.fetchuser= function(){
    var deferred = $q.defer();
    $http.post("api/userdetails")
    .success(function(data) {
       deferred.resolve(data);
    })
    .error(function(){
       deferred.reject();
    });
    return deferred.promise;
 }

  return service;
 });
