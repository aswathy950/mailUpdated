myApp.controller('outboxController', [
    '$rootScope',
    '$scope',
    'Mailsrv',
    '$window',
    '$state',
    function($rootScope, $scope, $window, Mailsrv, $state) {
        var data = JSON.parse(localStorage.getItem('user'));
        var arr = [];
        for(i=0; i < data.mails.length; i++) {
            if(data.mails[i].from_mail == data.user_details.email) {
                console.log('pushed');
                arr.push(data.mails[i]);
            }
        }
        console.log(arr);
        $scope.mails = arr;
}]);
