
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

                return AudioPlayer.isPlaying; 
                
            }, function(newVal, oldVal) {

                vm.isPlaying = newVal;  

                    console.log(vm.isPlaying); 


            });


           $scope.$watch(function() {

                    return AudioPlayer.currentSong; 
                    
                }, function(newVal, oldVal) {

                    console.log('song name change'); 

                    if(newVal) {

                        vm.currentSong = newVal.title;  
                        console.log($scope.currentSong); 

                    }

                });

            // vm.getCurrentTrack = AudioPlayer.getCurrentTrack(); 

    }]);



