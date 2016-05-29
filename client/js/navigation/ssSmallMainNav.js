angular.module("Sales")
    .directive('ssSmallMainNav', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "/js/navigation/ssSmallMainNav.tpl.html",
            scope: {}, 
            link: function(scope, element, attrs) {
                scope.toggleNav = function() {
                    element.find('div.mainNav-menu').toggleClass('is-showing'); 
                };


            }

        };
        
    });
