myApp.config(function($stateProvider, $urlRouterProvider) {

     $urlRouterProvider.otherwise('/');

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
          controller:"homeController",
          resolve:{
              // theadList: function(Mailsrv){
              //   return Mailsrv.theadList();
              // }
            }
            })

    .state('inbox', {
            url:'/inbox',
            templateUrl: 'app/views/inbox.html',

        })
    .state('sent', {
          url:'/sent',
          templateUrl: 'app/views/sent.html',

            })
    .state('userdetails', {
          url:'/userdetails',
          templateUrl: 'app/views/userlist.html',
          controller:"userController",
          resolve:{
              userList: function(Mailsrv){
                return Mailsrv.fetchuser();
              }
            }
            })
    .state('compose', {
          url:'/compose',
          templateUrl: 'app/views/compose.html',
          controller : ''

          })
   .state('permissions', {
          url: '/permissions',
          templateUrl: 'app/views/permissions.html',
          controller: ''

        })
});
