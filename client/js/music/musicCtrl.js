
angular.module("Sales")
    .controller('musicCtrl', ['$scope', '$timeout', 'AudioPlayer', 
        function($scope, $timeout, AudioPlayer) {

        var vm = this; 
        
        vm.catalogue = AudioPlayer.getCatalogue(); 

        vm.player = AudioPlayer; 

        vm.playlist = vm.catalogue[0].tracks; 

        vm.playPlaylist = function(pPlaylist) { 

            console.log(pPlaylist); 

            if(vm.playlist === pPlaylist) {

                if(AudioPlayer.isPlaying) {

                    console.log('stop'); 
                    AudioPlayer.stop(); 

                } else {

                    console.log('play'); 
                    AudioPlayer.play(); 

                 AudioPlayer.getCurrentTrackInfo().done(function(track){
                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.$apply(); 

                });

                }

            } else { 

                var scPlayerLinksArray = AudioPlayer.generateSCPlayerLinks(pPlaylist);

                AudioPlayer.setPlaylist(scPlayerLinksArray); 

                    console.log('stop'); 
                AudioPlayer.stop(); 

                $timeout(function() {
                    console.log('play'); 

                    AudioPlayer.play(); 

                }, 400); 

                 AudioPlayer.getCurrentTrackInfo().done(function(track){
                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.$apply(); 
                });


            }

            vm.playlist = pPlaylist; 

        }; 
        
    }]);



