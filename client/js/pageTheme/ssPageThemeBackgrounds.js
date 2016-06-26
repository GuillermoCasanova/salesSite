angular.module('Sales')
    .directive('ssPageThemeBackgrounds', [
          '$timeout',
          'Theme',
          'AudioPlayer',
        function(
          $timeout,
          Theme,
          AudioPlayer
        ) {

        return {

            restrict: 'E',
            scope: {}, 
            controller: ['$scope', 'AudioPlayer', function($scope, AudioPlayer) {

                $scope.loaded = false; 

                $scope.isActive = function(pBackground) {

                    if(AudioPlayer.currentTrack() !== null) {

                        return AudioPlayer.currentTrack().permalink === pBackground;

                    }
                }



            }],
            controllerAs: 'theme',
            templateUrl : 'js/pageTheme/ssPageThemeBackgrounds.tpl.html',
            link: function(scope, element, attrs, theme) {

                 scope.component = attrs.component;

                scope.backgrounds = Theme.getThemes(); 

            }

        }

}]);
