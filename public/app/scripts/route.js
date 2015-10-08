adminapp.config(function($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('register', {
            url:'/register',
            templateUrl: 'app/views/register.html',

        })
    .state('delete', {
          url:'/delete',
          templateUrl: 'app/views/delete.html',

            })
    .state('update', {
          url:'/update',
          templateUrl: 'app/views/update.html',

            })
    .state('home', {
          url:'/home',
          templateUrl: 'app/views/home.html',

            })
    $stateProvider
    .state('inbox', {
            url:'/inbox',
            templateUrl: 'app/views/inbox.html',

        })
    .state('sent', {
          url:'/sent',
          templateUrl: 'app/views/sent.html',

            })
    .state('userlist', {
          url:'/userlist',
          templateUrl: 'app/views/userlist.html',

            })

});
homeApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/inbox');

    $stateProvider
    .state('inbox', {
            url:'/inbox',
            templateUrl: 'app/views/inbox.html',

        })
    .state('sent', {
          url:'/sent',
          templateUrl: 'app/views/sent.html',

            })
    // .state('update', {
    //       url:'/update',
    //       templateUrl: 'app/views/update.html',
    //
    //         })
});
// userlist.config(function ($stateProvider, $urlRouterProvider) {
//     $urlRouterProvider.otherwise('/permissions');
//     $stateProvider
//     .state('permissions', {
//             url:'/permissions',
//             templateUrl: 'app/views/permissions.html',
//
//         })
// )};
