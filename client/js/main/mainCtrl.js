
angular.module("Sales")
    .controller('mainCtrl',  [ 'AudioPlayer',
        function(AudioPlayer) {

        var vm = this; 
        

        console.log('hello tes this is main speaking')

        console.log(AudioPlayer.checkIfPlaying()); 
        
    }]);



