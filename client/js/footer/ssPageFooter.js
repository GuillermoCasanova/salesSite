angular.module("Sales")
    .directive('ssPageFooter', function() {

        return {
            replace: true, 
            restrict: "E",
            scope: {}, 
            templateUrl: "/js/footer/ssPageFooter.tpl.html"

        };

});