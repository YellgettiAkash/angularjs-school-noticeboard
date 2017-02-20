var app= angular.module('myApp',["ui.router","oc.lazyLoad"]);

//===Start Config==========//



//Route
app.config(routeConfig);

//Factory
app.factory("httpFactory",httpFactory);

//Service
app.service("localStorageService",localStorageService);

//filter
app.filter('customPassFailFilter',['decoration',customPassFailFilter]).value('decoration',{symbol : '*'});

//===End Config==========//



