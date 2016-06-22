
angular.module("Sales")
    .controller('globalAudioPlayerCtrl', 
        ['$scope', 
         '$filter', 
         '$timeout', 
         'AudioPlayer', 
        function($scope, $filter, $timeout, AudioPlayer) {

            var vm = this; 

            vm.loadingText = "Loading track..."; 

            vm.currentPlaylist = AudioPlayer.getCurrentRelease().tracks;

            vm.catalogue = AudioPlayer.getCatalogue(); 

            vm.isPlaying = AudioPlayer.isPlaying();  

            vm.playerDrawerIsOpen = false; 

            vm.activeTab = 0; 

            vm.showTab = function(pTabId) {

                 vm.activeTab = pTabId; 

            }; 

            vm.checkIfTabActive = function(pTabId) {

                return vm.activeTab === pTabId; 
            }; 


            vm.checkIfSongPlaying = function(pTrack) {

                console.log('checking if song playing'); 

                if(!vm.isPlaying) {

                    console.log('is not playing anymore, STOP'); 

                    return false; 
                } 

                if(vm.currentTrack) {

                
                    var trackTitle = $filter('dashless')(vm.currentTrack);

                    trackTitle = trackTitle.toLowerCase(); 

                    var trackPicked = pTrack.name.toLowerCase();

                    console.log(trackPicked === trackTitle);

                    return trackPicked === trackTitle;  

                } else {

                    return false; 

                }

            }; 

            vm.openDrawer = function() {

                if(vm.playerDrawerIsOpen) {

                    vm.playerDrawerIsOpen = false; 
                } else {

                    vm.playerDrawerIsOpen = true; 

                }
            }; 

            vm.playPlaylist = function(pPlaylist) { 

                AudioPlayer.playPlaylist(pPlaylist); 

            }; 

            vm.pause  = function() {

                AudioPlayer.pause();

                $scope.$apply(); 

            }; 

            vm.playSong = function(pTrack) {

                if(vm.currentTrack) {

                    var trackTitle = $filter('dashless')(vm.currentTrack);

                    trackTitle = trackTitle.toLowerCase(); 

                    var trackPicked = pTrack.name.toLowerCase(); 

                }  

               if(trackPicked === trackTitle) {

                    console.log('same track'); 

                    AudioPlayer.pause();

                    return; 

                }  

                AudioPlayer.playSong(pTrack); 

                AudioPlayer.getCurrentTrackInfo().done(function(track){

                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.currentTrack = AudioPlayer.currentTrack().title; 
                    $scope.$apply(); 

                });

            }; 

            vm.play = function() {

                AudioPlayer.play(); 

                $scope.$apply(); 

                AudioPlayer.getCurrentTrackInfo().done(function(track){

                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.currentTrack = AudioPlayer.currentTrack().title; 
                    $scope.$apply(); 


                });

            }; 


            $scope.$watch( function() {

                return AudioPlayer.isPlaying(); 
                
            }, function(newVal, oldVal) {

                console.log(newVal); 
                vm.isPlaying = newVal;  

            });


           $scope.$watch(function() {

                return AudioPlayer.currentTrack(); 
                
            }, function(newVal, oldVal) {

                if(newVal) {

                    vm.currentTrack = newVal.title;  
                    vm.currentPlaylist = AudioPlayer.getCurrentRelease().tracks

                }

            });

    }]);



