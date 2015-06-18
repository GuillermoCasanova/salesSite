angular.module("Sales")
    .directive('ssSmallMainNav', function() {

        return {
            replace: true, 
            restrict: "E",
            templateUrl: "templates/directives/ssSmallMainNav.tpl.html",
            scope: {}, 
            link: function(scope, element, attrs) {

                scope.toggleNav = function() {
                    console.log('toggling'); 
                    element.find('div.mainNav-menu').toggleClass('is-showing'); 
                }
            }

        };
        
    });
