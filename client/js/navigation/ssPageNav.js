angular.module("Sales")
    .directive('ssPageNav', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "templates/directives/ssPageNav.tpl.html"

        };

});