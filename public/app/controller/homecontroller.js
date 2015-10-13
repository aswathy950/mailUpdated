myApp.controller('homeController', [
  '$rootScope',
  '$scope',
  '$window',
  'Mailsrv',
  '$state',
  function($rootScope, $scope, $window, Mailsrv, $state) {
    $scope.isAuthenticated = false;
    $scope.isAdmin = false;
    // if (!!$window.localStorage.accessToken) {
    //   $state.go('home', {
    //     user_id: $window.localStorage.accessToken.user_details.userid
    //   });
    // }
    $scope.submit = function() {

      var params = {
        username: $scope.user.username,
        password: $scope.user.password
      };

      Mailsrv.login(params)
        .then(function(data) {
          console.log(data);
          $scope.isAuthenticated = true;
          $window.localStorage.accessToken = data;
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
      delete $window.localStorage.accessToken;
    };
  }
]);
