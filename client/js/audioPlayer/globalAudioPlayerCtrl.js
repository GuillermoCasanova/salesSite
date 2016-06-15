
angular.module("Sales")
    .controller('globalAudioPlayerCtrl', ['$scope', 'AudioPlayer', 
        function($scope, AudioPlayer) {

            var vm = this; 

            vm.loadingText = "Loading track..."; 

            vm.tracks = AudioPlayer.getCurrentPlaylist();

            vm.catalogue = AudioPlayer.getReleases(); 

            vm.isPlaying = AudioPlayer.isPlaying;  

            vm.playSong = function(pToSong) {

                var id = pToSong; 

                AudioPlayer.playSong(id); 
                AudioPlayer.play(); 

            }

            $scope.$watch( function() {

                return AudioPlayer.checkIfPlaying(); 
                
            }, function(newVal, oldVal) {

                vm.isPlaying = newVal;  

            });


            $scope.$watch(function() {

                return AudioPlayer.getCurrentSong(); 
                
            }, function(newVal, oldVal) {

                vm.currentSong = newVal;   

            });


            // vm.getCurrentTrack = AudioPlayer.getCurrentTrack(); 

    }]);



