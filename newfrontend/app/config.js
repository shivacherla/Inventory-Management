function appConfig($routeProvider) {
    $routeProvider
        .when('/', { template: '<products></products>' })
        .when('/info', { template: '<info></info>' })
        .when('/home', {template: '<home></home>'})
        .when('/login', { template: '<login></login>'})
        .otherwise({
            redirectTo: '/'
        })
}