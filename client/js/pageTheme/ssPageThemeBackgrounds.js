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
            scope: {}, 
            require: '^ssPageTheme',
            templateUrl : 'js/pageTheme/ssPageThemeBackgrounds.tpl.html',
            link: function(scope, element, attrs, ssPageTheme) {

                scope.component = attrs.component;

                scope.loaded = false; 

                scope.backgrounds = Theme.getThemes(); 

                scope.isActive = function(pBackground) {
                    return ssPageTheme.getCurrentTheme() === pBackground;
                }

            }

        }

}]);
