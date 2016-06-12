
angular.module("Sales")
    .controller('globalAudioPlayerCtrl', ['$scope', 'AudioPlayer', 
        function($scope, AudioPlayer) {

            var vm = this; 

            console.log(AudioPlayer.checkIfPlaying()); 

            vm.loadingText = "Loading track..."; 

            vm.tracks = AudioPlayer.getCurrentPlaylist();

            vm.catalogue = AudioPlayer.getReleases(); 

            vm.playSong = function(pToSong) {

                var id = pToSong; 

                AudioPlayer.playSong(id); 
                AudioPlayer.play(); 

            }

            $scope.$watch( function() {

                return AudioPlayer.isPlaying; 
                
            }, function(newVal, oldVal) {

                vm.isPlaying = newVal;  
                console.log(vm.isPlaying); 
                console.log("val change"); 

            });

    }]);



