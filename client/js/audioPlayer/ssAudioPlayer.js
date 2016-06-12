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
                $scope.isPlaying = AudioPlayer.isPlaying; 

                $scope.$watch( function() {

                    return AudioPlayer.isPlaying; 
                    
                }, function(newVal, oldVal) {

                    $scope.isPlaying = newVal;  
                    console.log(newVal); 
                });

              $scope.$watch(function() {

                    return AudioPlayer.currentSong; 
                    
                }, function(newVal, oldVal) {
                    $scope.currentSong = AudioPlayer.currentSong;  

                });

              $scope.$watch(function() {

                return AudioPlayer.isPlaying; 
                    
                }, function(newVal, oldVal) {
                    
                    $scope.isPlaying = AudioPlayer.isPlaying;  

                });

            }],
            link: function(scope, element, attrs, ssPageTheme) {

                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                scope.currentSong = scope.placeHolderText;

                // //Inits Controls for Audio Player as Jquery Object
                $controls = $(element).find(".controls");

                var hasNotPlayed = true; 

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    var playlist = AudioPlayer.getCurrentPlaylist(); 

                    e.preventDefault();
                    var $this = jQuery(this)
                    if( $this.hasClass('play') ){ 
                        AudioPlayer.scplayer.pause();
                        AudioPlayer.isPlaying = false;
                                scope.$apply(); 

                        AudioPlayer.changeCurrentTrackInfo().done(function(track){

                            AudioPlayer.currentSong = track; 
                            scope.$apply(); 

                        });

                    }
                    else if( $this.hasClass('pause') ) { 


                        if(hasNotPlayed === true) {
                           // changeTheme(); 
                            hasNotPlayed = false; 

                            AudioPlayer.scplayer.pause();
                            AudioPlayer.isPlaying = true;
                                scope.$apply(); 

                            AudioPlayer.changeCurrentTrackInfo().done(function(track){

                                AudioPlayer.currentSong = track; 
                                scope.$apply(); 

                            });
                            return; 
                        }
              
                        AudioPlayer.scplayer.pause();
                        AudioPlayer.isPlaying = true;
                                scope.$apply(); 

                        AudioPlayer.changeCurrentTrackInfo().done(function(track){

                            AudioPlayer.currentSong = track; 
                            scope.$apply(); 

                        });

                    }
                    else if( 
                        $this.hasClass('stop') ){ AudioPlayer.scplayer.stop(); 
                  
                        /* Need to make pause button turn back to play button */
                        $controls.find('.play').addClass("pause");
                        $controls.find('.pause').removeClass("play");
                    }
                    else if( 
                        $this.hasClass('next') ){ AudioPlayer.scplayer.next(); 
                        if ( $controls.find('.pause') ){
                            $controls.find('.pause').addClass("play");
                            $controls.find('.play').removeClass("pause");
                            $controls.find('.play').click();                            
                        }
                    }
                    else if( 
                        $this.hasClass('prev') ){ AudioPlayer.scplayer.prev(); 
                        if ( $controls.find('.pause') ){
                            $controls.find('.pause').addClass("play");
                            $controls.find('.play').removeClass("pause");
                            $controls.find('.play').click();                            
                        }
                    }
                });

                
                AudioPlayer.scplayer.on("scplayer.pause", function(e, is_paused){

                    if(is_paused === true){
                        $controls.find('.play').addClass("pause");
                        $controls.find('.pause').removeClass("play");
                    }else{
                        $controls.find('.pause').addClass("play");
                        $controls.find('.play').removeClass("pause");
                    }

                });                

            }
        };

}]);
