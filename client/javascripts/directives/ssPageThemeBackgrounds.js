angular.module('Sales')
    .directive('ssPageThemeBackgrounds', [
          '$timeout',
          'Theme',
        function(
          $timeout,
          Theme
        ) {

        return {

            restrict: 'E',
            require: '^ssPageTheme',
            templateUrl : 'templates/directives/ssPageThemeBackgrounds.tpl.html',
            controller: function($scope, $timeout) {


            },
            link: function(scope, element, attrs, ssPageTheme) {

                scope.component = attrs.component;

                scope.loaded = false; 

                scope.backgrounds = Theme.getThemeBackgrounds(); 

                scope.isActive = function(pBackground) {
                    return ssPageTheme.getCurrentTheme() === pBackground;
                }



            }

        }

}]);
