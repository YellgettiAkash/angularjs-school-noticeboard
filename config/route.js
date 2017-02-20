function routeConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
    
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'homeCtrl',
            data : {
                restrict : true,
            },
            resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'homeCtrl',
                                // insertBefore: '#ng_load_plugins_before',
                                files:[
                                    'controllers/homeCtrl.js'
                                ]   
                            })
                        }]
            }
        })

       

        
        .state('login', {
            url: '/login',
            templateUrl: 'views/login.html',
            controller: 'loginCtrl',
            data : {
                restrict : false,
            }
        })

        .state('logout', {
            url: '/logout',
            templateUrl: 'views/login.html',
            controller: 'logoutCtrl',
            data : {
                restrict : true,
            }
        })

        .state('profile', {
            url: '/my-profile',
            templateUrl: 'views/profile.html',
            controller: 'profileCtrl',
            data : {
                restrict : true,
            },
            resolve: {
                        deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load({
                                name: 'profileCtrl',
                                // insertBefore: '#ng_load_plugins_before',
                                files:[
                                    'controllers/profileCtrl.js'
                                ]   
                            })
                        }]
            }
        })
        
        .state('search', {
            url: '/search',
            templateUrl: 'views/search.html',
            controller: 'searchCtrl',
            data : {
                restrict : true,
            },
            resolve: {
                deps: ['$ocLazyLoad', function ($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        name: 'searchCtrl',
                        // insertBefore: '#ng_load_plugins_before',
                        files:[
                            'controllers/searchCtrl.js'
                        ]   
                    })
                }]
            }
        })

    $urlRouterProvider.otherwise('/');

}