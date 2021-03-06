// myApp.factory("getMessages", ['$http',function($http){
//     $http.get(url).success(function(data) {
//       alert(data);
//       $scope.messages = angular.fromJson(data);
//     });
// });



myApp.factory('getMessages', ['$http', '$localStorage', function($http, $localStorage){
    var baseUrl = "index.html";
    function changeUser(user) {
        angular.extend(currentUser, user);
    }

    function url_base64_decode(str) {
        var output = str.replace('-', '+').replace('_', '/');
        switch (output.length % 4) {
            case 0:
                break;
            case 2:
                output += '==';
                break;
            case 3:
                output += '=';
                break;
            default:
                throw 'Illegal base64url string!';
        }
        return window.atob(output);
    }

    function getMessageFromToken() {
        var token = $localStorage.token;
        var user = {};
        if (typeof token !== 'undefined') {
            var encoded = token.split('.')[1];
            user = JSON.parse(url_base64_decode(encoded));
        }
        return messages;
    }

    var userMessage = getMessageFromToken();

    return {
            save: function(data, success, error) {
                $http.post(baseUrl + '/signin', data).success(success).error(error);
            },
            signin: function(data, success, error) {
                $http.post(baseUrl + '/authenticate', data).success(success).error(error);
            },
            me: function(success, error) {
                $http.get(baseUrl + '/me').success(success).error(error);
            },
            logout: function(success) {
                changeUser({});
                delete $localStorage.token;
                success();
            }
        };
    }
]);
