
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

            });


            $scope.$watch(function() {

                return AudioPlayer.currentSong; 
                
            }, function(newVal, oldVal) {
                vm.currentSong = AudioPlayer.currentSong;  

            });

            $scope.$watch(function() {

                return AudioPlayer.isPlaying; 
                
            }, function(newVal, oldVal) {

                vm.isPlaying = AudioPlayer.isPlaying;  

            });


            vm.getCurrentTrack = AudioPlayer.getCurrentTrack(); 



            // vm.changeTrack = function(pTrack) {
            //     vm.currentSong = pTrack;
            //     console.log()
            // }

            // //Function for changing theme
            // vm.changeTheme = function() {
            //     console.log('changing theme'); 
            //     vm.currentSong = {}; 
            //     vm.currentSong.title = vm.loadingText;
            //     console.log(vm.currentSong); 

            //     AudioPlayer.scplayer.track_info(AudioPlayer.scplayer.track_index()).done(function(track){

            //         vm.changeTrack(track); 
                    
            //     });
            // };

    }]);



