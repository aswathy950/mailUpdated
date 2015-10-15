myApp.controller('userController', [
    '$rootScope',
    '$scope',
    '$window',
    'Mailsrv',
    '$state',
    'userList',
    function($rootScope, $scope, $window, Mailsrv, $state, userList) {
        var data = JSON.parse($window.localStorage.user);
        $scope.users = data.userList.user_details;
        console.log('UserController'+data);
    }
]);
