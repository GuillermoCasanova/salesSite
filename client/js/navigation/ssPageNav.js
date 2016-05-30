angular.module("Sales")
    .directive('ssPageNav', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "/js/navigation/ssPageNav.tpl.html"

        };

});