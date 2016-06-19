
angular.module("Sales")
    .controller('globalAudioPlayerCtrl', ['$scope', '$timeout', 'AudioPlayer', 
        function($scope, $timeout, AudioPlayer) {

            var vm = this; 

            vm.loadingText = "Loading track..."; 

            vm.currentPlaylist = AudioPlayer.getCurrentRelease().tracks;

            vm.catalogue = AudioPlayer.getCatalogue(); 

            vm.isPlaying = AudioPlayer.isPlaying;  

            vm.playerDrawerIsOpen = false; 

            vm.activeTab = 0; 

            vm.showTab = function(pTabId) {

                 vm.activeTab = pTabId; 

            }; 

            vm.checkIfTabActive = function(pTabId) {

                return vm.activeTab === pTabId; 
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

            vm.playSong = function(pToSong) {

                AudioPlayer.playSong(pToSong); 

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



