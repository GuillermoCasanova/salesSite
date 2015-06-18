angular.module("Sales")
    .directive('ssPageNav', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "templates/directives/ssPageNav.tpl.html"

        };

});