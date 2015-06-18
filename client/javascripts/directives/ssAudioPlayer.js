angular.module("Sales")
    .directive('ssAudioPlayer', [
        '$timeout',
        function(
                $timeout) {

        return {

            replace: true,
            restrict: "E",
            scope: true,
            require: "^ssPageTheme",
            templateUrl: "templates/directives/ssAudioPlayer.tpl.html",
            controller: [
            '$scope',
            '$http',
            function($scope, $http) {

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
                $controls = jQuery(".controls");


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
                    , debug: false
                });

                //Inits controls of audio player selecting DOM elements


                $controls.on("click", 'button', function(e){
                    
                    e.preventDefault();
                    var $this = jQuery(this)
                    if( $this.hasClass('play') ){ scplayer.pause(); }
                    else if( $this.hasClass('pause') ){ 

                        if(hasNotPlayed) {

                            scplayer.play(); 

                        } else {
                            scplayer.pause(); 
                        }

                    }
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

                
                // scplayer.on('scplayer.play', function(e, index) {
                //     if(scope.hasNotPlayed) {

                //         scope.currentSong = scope.loadingText;
                //         scope.$apply();     

                //         scplayer.track_info(index).done(function(track){
                //             scope.currentSong = track.title;
                //             scope.changeTheme(track.permalink);
                //         });
                //     }
                // });

                // scplayer.on('scplayer.changing_track', function(e, index) {
                //         scope.currentSong = scope.loadingText;
                //         scope.$apply(); 

                //     scplayer.track_info(index).done(function(track){
                //         scope.currentSong = track.title;
                //         scope.changeTheme(track.permalink);
                //         //Has the jquery object use the scope of this directive 
                //         scope.$apply();
                        
                //     });

                // });

                
            }
        };

}]);
