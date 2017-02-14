function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
        })
        
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl',
        })

        .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'SearchCtrl',
        })
    $urlRouterProvider.otherwise('/');
}