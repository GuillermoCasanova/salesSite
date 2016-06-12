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

                $scope.placeHolderText = "Play music below";
                $scope.loadingText = "Loading track..."; 
                $scope.isPlaying = AudioPlayer.isPlaying; 

                $scope.$watch( function() {

                    return AudioPlayer.isPlaying; 
                    
                }, function(newVal, oldVal) {

                    $scope.isPlaying = newVal;  
                });

            }],
            link: function(scope, element, attrs, ssPageTheme) {

                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                scope.currentSong = scope.placeHolderText;

                // //Inits Controls for Audio Player as Jquery Object
                // var $elemControls = element.find(".controls");

                var hasNotPlayed = true; 

                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                // globalAudioPlayer.currentSong = globalAudioPlayer.placeHolderText;

                // globalAudioPlayer.currentSongArtwork = AudioPlayer.getArtworkOfCurrent(); 

                // globalAudioPlayer.changeTheme = function(pThemeName) {
                //     //Uses parent directive's controller function to change theme
                //     // ssPageTheme.changeTheme(pThemeName);

                //         console.log(pThemeName); 
                // };

                // //Inits Controls for Audio Player as Jquery Object
                $controls = $(element).find(".controls");

                //Tells player the user has yet to play anything
                var hasNotPlayed = true; 

                //Function for changing theme
                // var changeTheme = function() {
                //     globalAudioPlayer.currentSong = globalAudioPlayer.loadingText;
                //     scope.$apply(); 

                //     AudioPlayer.scplayer.track_info(AudioPlayer.scplayer.track_index()).done(function(track){
                //         globalAudioPlayer.currentSong = track;
                //         globalAudioPlayer.changeTheme(track.permalink);
                //         scope.$apply(); 
                        
                //     });
                // };

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    var playlist = AudioPlayer.getCurrentPlaylist(); 

                    e.preventDefault();
                    var $this = jQuery(this)
                    if( $this.hasClass('play') ){ 
                        AudioPlayer.scplayer.pause();
                        AudioPlayer.isPlaying = false; 
                        scope.$apply(); 
                        console.log(AudioPlayer.isPlaying); 

                    }
                    else if( $this.hasClass('pause') ) { 



                        if(hasNotPlayed === true) {
                           // changeTheme(); 
                            hasNotPlayed = false; 

                            $timeout(function() {
                                AudioPlayer.scplayer.pause(); 
                                AudioPlayer.isPlaying = true; 
                                console.log(AudioPlayer.isPlaying); 
                            }, 1000)

                            return; 
                        }
              
                        AudioPlayer.scplayer.pause(); 
                        AudioPlayer.isPlaying = true; 
                        scope.$apply(); 
                        console.log(AudioPlayer.isPlaying); 


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
