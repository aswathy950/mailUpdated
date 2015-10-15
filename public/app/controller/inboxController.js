myApp.controller('inboxController', [
    '$rootScope',
    '$scope',
    'Mailsrv',
    '$window',
    '$state',
    function($rootScope, $scope, $window, Mailsrv, $state) {
        Mailsrv.login()
});
