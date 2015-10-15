myApp.controller('homeController', [
    '$rootScope',
    '$scope',
    '$window',
    'Mailsrv',
    '$state',
    function($rootScope, $scope, $window, Mailsrv, $state) {
        $scope.isAuthenticated = false;
        $scope.isAdmin = false;
        if (!!$window.localStorage.user) {
            var obj = JSON.parse ($window.localStorage.user);
            console.log(obj);
            $scope.isAuthenticated = true;
            $scope.isAdmin = true;
            $scope.username = obj.user_details.first_name;
            $state.go('home');
        }
        $scope.submit = function() {

            var params = {
                username: $scope.user.username,
                password: $scope.user.password
            };

            Mailsrv.login(params)
                .then(function(data) {
                    console.log(data);
                    $scope.username = data.user_details.first_name;
                    $scope.isAuthenticated = true;
                    $window.localStorage.user = JSON.stringify(data);
                    if (data.user_details.usertype !== 'user') {
                        $scope.isAdmin = true;
                    } else {
                        $scope.isAdmin = false;
                    }
                    $state.go('home', {
                        user_id: data.user_details.userid
                    });
                })
        };

        $scope.logout = function() {
            $scope.welcome = '';
            $scope.message = '';
            $scope.isAuthenticated = false;
            $scope.isAdmin = false;
            delete $window.localStorage.id;
            delete $window.localStorage.first_name;
            delete $window.localStorage.user;
        };
    }
