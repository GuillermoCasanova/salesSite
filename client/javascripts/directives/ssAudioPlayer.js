angular.module("Sales")
    .directive('ssAudioPlayer', 
        function() {

        return {

            replace: true,
            restrict: "E",
            scope: true,
            require: "^ssPageTheme",
            templateUrl: "templates/directives/ssAudioPlayer.tpl.html",
            controller: [
            '$scope',
            function($scope) {

                $scope.placeHolderText = "Play the EP";
                $scope.loadingText = "Loading track..."; 

            }],
            link: function(scope, element, attrs, ssPageTheme) {


                //Initializes the current song text with the placeholder text
                //and sets notPlayed to true; 
                scope.currentSong = scope.placeHolderText;


                scope.changeTheme = function(pThemeName) {
                    //Uses parent directive's controller function to change theme
                    ssPageTheme.changeTheme(pThemeName);
                };


                //Inits Controls for Audio Player as Jquery Object
                $controls = element.find(".controls");


                //Inits Soundcloud player with array of URLS
                var scplayer = new SoundCloudPlayer([
                    "https://soundcloud.com/sales/sales-renee",
                    "https://soundcloud.com/sales/vow",
                    "https://soundcloud.com/sales/chinese-new-year",
                    "https://soundcloud.com/sales/getting-it-on",
                    "https://soundcloud.com/sales/toto",
                    "https://soundcloud.com/sales/toto-xxyyxx-remix/"
                    
                    ],{
                      consumer_key: "7a6e6123d37c58d267bdfa4d526e554c"
                    , autoplay: false
                    , toggle_pause: true
                    , preload: false
                    , cache: true
                    , loop : true
                    , debug: true
                });

                //Tells player the user has yet to play anything
                var hasNotPlayed = true; 

                //Function for changing theme
                var changeTheme = function() {
                    scope.isPlaying = true; 
                    scope.currentSong = scope.loadingText;
                    scope.$apply(); 

                    scplayer.track_info(scplayer.track_index()).done(function(track){
                        scope.currentSong = track.title;
                        scope.changeTheme(track.permalink);
                        //Has the jquery object use the scope of this directive 
                        scope.$apply();
                        
                    });
                };

                //Inits controls of audio player selecting DOM elements
                $controls.on("click", 'button', function(e){
                    
                    e.preventDefault();
                    var $this = jQuery(this)
                    if( $this.hasClass('play') ){ scplayer.pause(); }
                    else if( $this.hasClass('pause') ){ scplayer.pause(); }
                    else if( 
                        $this.hasClass('stop') ){ scplayer.stop(); 

                        /* Need to make pause button turn back to play button */
                        $controls.find('.play').addClass("pause");
                        $controls.find('.pause').removeClass("play");
                    }
                    else if( 
                        $this.hasClass('next') ){ scplayer.next(); 
                        if ( $controls.find('.pause') ){
                            $controls.find('.pause').addClass("play");
                            $controls.find('.play').removeClass("pause");
                            $controls.find('.play').click();                            
                        }
                    }
                    else if( 
                        $this.hasClass('prev') ){ scplayer.prev(); 
                        if ( $controls.find('.pause') ){
                            $controls.find('.pause').addClass("play");
                            $controls.find('.play').removeClass("pause");
                            $controls.find('.play').click();                            
                        }
                    }
                });

                
                scplayer.on("scplayer.pause", function(e, is_paused){

                    //Changes currentSong and theme on the initial play 
                    //since changing_track event has already been called 
                    if(hasNotPlayed === true) {
                        changeTheme(); 
                        hasNotPlayed = false; 
                    }
                    if(is_paused === true){
                        $controls.find('.play').addClass("pause");
                        $controls.find('.pause').removeClass("play");
                    }else{
                        $controls.find('.pause').addClass("play");
                        $controls.find('.play').removeClass("pause");
                    }

                });                
                
                //Changes currentSong and theme on the changing_track event
                scplayer.on('scplayer.changing_track', function(e, index) {

                    if(hasNotPlayed === true) {
                        return;
                    }

                    changeTheme(); 
                });

                
            }
        };

});
