angular.module("Sales")
    .directive('ssVideoCarousel', 

        function() {

        return {

            replace: true,
            restrict: "E",
            templateUrl: "templates/directives/ssVideoCarousel.tpl.html"
        }
    });
