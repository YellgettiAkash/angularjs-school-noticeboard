function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            data : {
                restrict : true,
            }
        })
        
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
            data : {
                restrict : false,
            }
        })
        .state('logout', {
            url: '/logout',
            templateUrl: 'views/login.html',
            controller: 'LogoutCtrl',
            data : {
                restrict : true,
            }
        })

        .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl',
            data : {
                restrict : true,
            }
        })
    $urlRouterProvider.otherwise('/');
}