myApp.service('Mailsrv', function($http, $q) {
    var service = {};

    service.login = function(params) {
        var deferred = $q.defer();
        $http.post("api/login", params)
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function() {
                deferred.reject();
            });
        return deferred.promise;
    };

    service.fetchuser = function() {
        var deferred = $q.defer();
        $http.post("api/userdetails")
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function() {
                deferred.reject();
            });
        return deferred.promise;
    };

<<<<<<< HEAD
    service.fetchInbox = function(id) {
        var deferred = $q.defer();
        $http.post("/home/inbox")
            .success(function(data) {
                deferred.resolve(data);
            })
            .error(function() {
                deferred.reject();
            });
        return deferred.promise;
    };

=======
>>>>>>> f95fad272405a25fe245b10d20c3b9bee9e50780
    return service;
});
