myApp.controller('userController', [
  '$rootScope',
  '$scope',
  '$window',
  'Mailsrv',
  '$state',
  'userList',
  function($rootScope, $scope, $window, Mailsrv, $state,userList) {
    console.log(userList.user_details);
    $scope.users = userList.user_details;
  }
]);
