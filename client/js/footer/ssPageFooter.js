angular.module("Sales")
    .directive('ssPageFooter', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "templates/directives/ssPageFooter.tpl.html"

        };

});