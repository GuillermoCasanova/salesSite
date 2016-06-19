    angular.module("Sales")
    .directive('ssGlobalAudioPlayer', ['AudioPlayer', '$timeout',
        function(AudioPlayer, $timeout) {

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

                globalAudioPlayer.currentSongArtwork = AudioPlayer.getArtworkOfCurrent(); 

                // globalAudioPlayer.changeTheme = function(pThemeName) {
                //     //Uses parent directive's controller function to change theme
                //     // ssPageTheme.changeTheme(pThemeName);

                //     console.log(pThemeName); 
                // };

                // //Inits Controls for Audio Player as Jquery Object
                $controls = $(element).find(".globalAudioPlayer-controls");

                //Tells player the user has yet to play anything
                var hasNotPlayed = true; 

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    e.preventDefault();

                    var $this = jQuery(this)

                    if( $this.hasClass('play') ){ 

                        globalAudioPlayer.pause(); 

                    }
                    else if( $this.hasClass('pause') ) { 

                        if(hasNotPlayed === true) {

                            hasNotPlayed = false; 

                            globalAudioPlayer.play(); 

                            return; 
                        }
              
                        globalAudioPlayer.play(); 

                    }
                    else if( 
                        $this.hasClass('stop') ){ AudioPlayer.stop(); 
                  
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

                

                //listens for event on sc player being paused to change icon for play/pausing 
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
