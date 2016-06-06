    angular.module("Sales")
    .directive('ssGlobalAudioPlayer', ['AudioPlayer',
        function(AudioPlayer) {

        return {

            replace: true,
            restrict: "E",
            scope: true,
            templateUrl: "js/AudioPlayer/ssGlobalAudioPlayer.html",
            bindToController: {},
            controller: 'globalAudioPlayerCtrl',
            controllerAs: 'globalAudioPlayer',
            link: function(scope, element, attrs, globalAudioPlayer) {

                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                globalAudioPlayer.currentSong = globalAudioPlayer.placeHolderText;

                globalAudioPlayer.changeTheme = function(pThemeName) {
                    console.log(pThemeName); 
                    //Uses parent directive's controller function to change theme
                    ssPageTheme.changeTheme(pThemeName);
                };

                // //Inits Controls for Audio Player as Jquery Object
                $controls = element.find(".globalAudioPlayer-controls");

                //Tells player the user has yet to play anything
                var hasNotPlayed = true; 

                //Function for changing theme
                var changeTheme = function() {
                    globalAudioPlayer.isPlaying = true; 
                    globalAudioPlayer.currentSong = globalAudioPlayer.loadingText;
                    scope.$apply(); 

                    AudioPlayer.scplayer.track_info(AudioPlayer.scplayer.track_index()).done(function(track){
                        globalAudioPlayer.currentSong = track.title;
                        globalAudioPlayer.changeTheme(track.permalink);
                        //Has the jquery object use the globalAudioPlayer of this directive 
                        scope.$apply();
                        
                    });
                };

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    var playlist = AudioPlayer.getCurrentPlaylist(); 

                    e.preventDefault();
                    var $this = jQuery(this)
                    if( $this.hasClass('play') ){ 

                        AudioPlayer.scplayer.pause();
                    }
                    else if( $this.hasClass('pause') ) { 
                        if(hasNotPlayed === true) {
                            changeTheme(); 
                            hasNotPlayed = false; 

                            setTimeout(function() {
                                AudioPlayer.scplayer.pause(); 
                            }, 1000)

                            return; 
                        }
              
                        AudioPlayer.scplayer.pause(); 

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
                
                //Changes currentSong and theme on the changing_track event
                AudioPlayer.scplayer.on('scplayer.changing_track', function(e, index) {

                    if(hasNotPlayed === true) {
                        return;
                    }

                    changeTheme(); 
                });


                
            }
        };

}]);
