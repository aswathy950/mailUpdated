adminapp.config(function($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/register');

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


});
