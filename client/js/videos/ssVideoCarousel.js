angular.module("Sales")
    .directive('ssVideoCarousel', 

        function() {

        return {

            replace: true,
            restrict: "E",
            templateUrl: "js/videos/ssVideoCarousel.tpl.html"
        }
    });
