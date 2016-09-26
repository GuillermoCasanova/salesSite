    angular.module("Sales")
    .directive('ssAudioPlayer', ['AudioPlayer', '$timeout',
        function(AudioPlayer, $timeout) {

        return {

            replace: true,
            restrict: "E",
            scope: {},
            templateUrl: "js/audioPlayer/ssAudioPlayer.tpl.html",
            controller: [
            '$scope',
            'AudioPlayer',
            function($scope, AudioPlayer) {

                $scope.placeHolderText = "Play";
                $scope.loadingText = "Loading track..."; 
                $scope.isPlaying = AudioPlayer.isPlaying(); 

                $scope.$watch( function() {

                    return AudioPlayer.isPlaying(); 
                    
                }, function(newVal, oldVal) {

                    $scope.isPlaying = newVal;  
                });

                $scope.$watch(function() {

                    return AudioPlayer.currentTrack(); 
                    
                }, function(newVal, oldVal) {

                    if(newVal) {

                        $scope.currentSong = newVal.title;  

                    }

                });

               $scope.pause  = function() {

                    AudioPlayer.pause();

                    $scope.$apply(); 

                    AudioPlayer.getCurrentTrackInfo().done(function(track){

                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.currentTrack = AudioPlayer.currentTrack().title; 
                    $scope.$apply(); 

                }); 

            }; 

            $scope.play = function() {

                AudioPlayer.play();     

                AudioPlayer.getCurrentTrackInfo().done(function(track){

                    AudioPlayer.changeCurrentTrackInfo(track); 
                    $scope.currentTrack = AudioPlayer.currentTrack().title; 
                    $scope.$apply(); 

                });

            }; 

            $scope.prev = function() {

                AudioPlayer.prev(); 

            };
            $scope.next = function() {

                AudioPlayer.next(); 

            }

            }],
            controllerAs: 'ssAudioPlayer',
            link: function(scope, element, attrs, ssAudioPlayer) {

                // //Inits Controls for Audio Player as Jquery Object
                $controls = $(element).find(".controls");

                //Tells player the user has yet to play anything
                var hasNotPlayed = true; 

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    e.preventDefault();

                    var $this = jQuery(this)

                    if( $this.hasClass('play') ){ 

                        scope.pause(); 
                        scope.$apply(); 
                        

                        scope.$apply(); 

                    }
                    else if( $this.hasClass('pause') ) { 

                        if(hasNotPlayed === true) {

                            hasNotPlayed = false; 

                            $timeout(function() {

                                scope.pause(); 

                            }, 200); 

                            return; 
                        }
              
                        scope.play(); 
                        scope.$apply(); 


                        scope.$apply(); 

                    }
                    else if( 
                        $this.hasClass('stop') ){ AudioPlayer.stop();

                        scope.$apply(); 

                  
                        /* Need to make pause button turn back to play button */
                        $controls.find('.play').addClass("pause");
                        $controls.find('.pause').removeClass("play");
                    }
                    else if( 
                        $this.hasClass('next') ){ 
                        scope.next(); 

                        scope.$apply(); 
                    }
                    else if( 
                        $this.hasClass('prev') ){ 

                        scope.prev(); 

                        scope.$apply(); 



                    }

                });

                

                //listens for event on sc player being paused to change icon for play/pausing 
                // AudioPlayer.scplayer.on("scplayer.pause", function(e, is_paused){

                //     console.log('sc player paused'); 
                    
                //     if(is_paused === true){
                //         $controls.find('.play').addClass("pause");
                //         $controls.find('.pause').removeClass("play");
                //     }else{
                //         $controls.find('.pause').addClass("play");
                //         $controls.find('.play').removeClass("pause");
                //     }

                // });                
                
            }
                
        };

}]);
