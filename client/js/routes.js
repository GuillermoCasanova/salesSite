angular.module('Sales')
    .config(['$routeProvider',

        function($routeProvider) {

    $routeProvider
    .when('/', {
        redirectTo: '/home'
    })

    .when('/home', {
        templateUrl: "/js/home/index.html"
    })

}]);
