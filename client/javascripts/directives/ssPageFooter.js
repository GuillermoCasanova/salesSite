angular.module("Sales")
    .directive('ssPageFooter', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "templates/directives/ssPageFooter.tpl.html"

        };

});