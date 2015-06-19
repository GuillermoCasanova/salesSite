angular.module("Sales")
    .directive('ssShowsList', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "templates/directives/ssShowsList.tpl.html",
            controller: 'showsController',
            controllerAs: 'showsController'

        };
        
    });