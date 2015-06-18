angular.module("Sales")
    .directive('ssShowsList', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "templates/directives/ssShowsList.tpl.html",
            controller: 'ShowsController'

        };
        
    });