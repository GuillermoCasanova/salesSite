    angular.module("Sales")
    .directive('ssAudioPlayer', ['AudioPlayer',
        function(AudioPlayer) {

        return {

            replace: true,
            restrict: "E",
            scope: {},
            templateUrl: "js/audioPlayer/ssAudioPlayer.tpl.html",
            controller: [
            '$scope',
            'AudioPlayer',
            function($scope, AudioPlayer) {

                $scope.placeHolderText = "Play music below";
                $scope.loadingText = "Loading track..."; 
                $scope.isPlaying = AudioPlayer.isPlaying; 

                $scope.$watch( function() {

                    return AudioPlayer.isPlaying; 
                    
                }, function(newVal, oldVal) {

                    $scope.isPlaying = newVal;  
                    console.log(newVal); 

                });

            }],
            link: function(scope, element, attrs, ssPageTheme) {

                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                scope.currentSong = scope.placeHolderText;

                // //Inits Controls for Audio Player as Jquery Object
                // var $elemControls = element.find(".controls");

                var hasNotPlayed = true; 

            

                
            }
        };

}]);
