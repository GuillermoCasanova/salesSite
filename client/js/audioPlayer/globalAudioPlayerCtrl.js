
angular.module("Sales")
    .controller('globalAudioPlayerCtrl', ['AudioPlayer', 
        function(AudioPlayer) {

            var vm = this; 

            console.log(AudioPlayer.checkIfPlaying()); 

            vm.loadingText = "Loading track..."; 

            vm.tracks = AudioPlayer.getCurrentPlaylist();
            
       
    }]);



