myApp.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('register', {
            url: '/register',
            templateUrl: 'app/views/register.html'
        })
        .state('delete', {
            url: '/delete',
            templateUrl: 'app/views/delete.html'
        })
        .state('update', {
            url: '/update',
            templateUrl: 'app/views/update.html'
        })
        .state('home', {
            url: '/home',
            templateUrl: 'app/views/home.html',
            controller: "homeController",
            resolve: {
                // userData: function(Mailsrv){
                //   return Mailsrv.login();
                // }
            }
        })
        .state('home.inbox', {
            url: '/inbox',
            templateUrl: 'app/views/inbox.html',
            controller: 'inboxController'
            // {
                // inbox: function(Mailsrv) {
                //     return Mailsrv.login();
                // }
            // }
        })
        .state('home.sent', {
            url: '/sent',
            templateUrl: 'app/views/sent.html',
            controller: 'outboxController'
        })
        .state('userdetails', {
            url: '/userdetails',
            templateUrl: 'app/views/userlist.html',
            controller: "userController",
            resolve: {
                userList: function(Mailsrv) {
                    return Mailsrv.login();
                }
            }
        })
        .state('compose', {
            url: '/compose',
            templateUrl: 'app/views/compose.html',
            controller: ''

        })
        .state('permissions', {
            url: '/permissions',
            templateUrl: 'app/views/permissions.html',
            controller: ''
        })
});
