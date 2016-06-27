    angular.module('Sales')
    .factory('AudioPlayer', ['$timeout', '$filter', function($timeout, $filter) {


    //*Default variables*//

    var currentPlaylist = null; 

    var currentTrack = null; 

    var currentSoundCloudLinks = []; 

    var hasNotPlayed = true; 

    var isPlaying = false; 

    var currentRelease = null; 

    var scPlayerLinks = []; 

    var scplayer = false; 

    var tracks = [];

    var catalogue = [{

        "name": 'SALES EP',
        "releaseIndex" : "1",
        "artwork": "https://f4.bcbits.com/img/a3156917839_16.jpg",

        "tracks": [
            {
                "name": "renee",
                "link": "https://soundcloud.com/sales/sales-renee",
                "id" : 0
            },
            {
                "name" : "vow",
                "link" : "https://soundcloud.com/sales/vow",
                "id" : 1

            },
            {
                "name" : "Chinese New Year",
                "link" : "https://soundcloud.com/sales/chinese-new-year",
                "id" : 2

            },
            {
                "name" : "Getting It On",
                "link" : "https://soundcloud.com/sales/getting-it-on",
                "id" : 3

            },
            {
                "name": "toto",
                "link" : "https://soundcloud.com/sales/toto",
                "id" : 4


            },
            {
                "name" : "toto (XXYYXX Remix)",
                "link" : "https://soundcloud.com/sales/toto-xxyyxx-remix/",
                "id" : 5

            }]
    },
    {
        "name": 'SALES LP',
        "releaseIndex" : "2",
        "artwork": "https://f4.bcbits.com/img/a1493513244_16.jpg",
        "tracks": [
            {
                "name": "big sis",
                "link": "https://soundcloud.com/sales/ivy", 
                "id" : 0
            },
            {
                "name" : "jamz",
                "link" : "https://soundcloud.com/sales/jamz", 
                "id": 1
            },
            {
                "name" : "ivy",
                "link" : "https://soundcloud.com/sales/chinese-new-year",
                "id" : 2
            }]


    }]; 




    //*********//
    //*Methods//
    //*******//

    var changeCurrentTrackInfo = function(pTrackInfo) {

        currentTrack = pTrackInfo;  
        console.log(currentTrack); 

    };

    var checkIfTrackPlaying = function(pTrack) {
  
    // Checks to see if there is a currentsong
    // and if there is checks to see if its the same one that is about
    // to be payed, if so, it just pauses the player
    if(!isPlaying) {

        return false; 

    }

    if(currentTrack) {
        var trackTitle = $filter('dashless')(currentTrack.title);

        trackTitle = trackTitle.toLowerCase(); 

        var trackPicked = pTrack.name.toLowerCase(); 

        return trackPicked === trackTitle; 

    } 


    };

    var checkIfPlaying = function() {

        return isPlaying; 
    }; 

    var getArtworkOfCurrent = function() {

        return catalogue[0].artwork; 

    }; 


    var getCatalogue = function() {

        return catalogue; 
    };

    var getCurrentPlaylist = function() {

        return this.scplayer; 

    };

    var getCurrentTheme = function() {

        if(currentTrack) {

            return currentTrack; 

        }
    }
    

    var getCurrentRelease = function() {

        return currentRelease; 

    }

    var getCurrentTrack = function() {

        if(currentTrack) {

            return currentTrack; 

        }
    }

    var getCurrentTrackInfo = function() {
        
        return scplayer.track_info(scplayer.track_index()); 

    }; 

    var getCatalogue = function() {
        return catalogue; 

    };

    var next = function() {

        console.log('play next'); 
        console.log(this.scplayer); 

        this.scplayer.next(); 

        getCurrentTrackInfo().done(function(track){

            changeCurrentTrackInfo(track); 

        });


        isPlaying = true; 

        return isPlaying
    }; 

    var pause = function() {

        this.scplayer.pause(); 

        if(isPlaying) {

            isPlaying = false;


        } else {
            
            isPlaying = true; 
        }

        return isPlaying; 
    }

    var play =  function() {

        this.scplayer.play(); 

        isPlaying = true; 

        if(hasNotPlayed) {

            getCurrentTrackInfo().done(function(track){

                changeCurrentTrackInfo(track); 

            });

        }

        hasNotPlayed = false; 

        return isPlaying;
    };

    // var playSong = function(pTrack) {


    //     console.log(pTrack); 

    //     // Checks to see if there is a currentsong
    //     // and if there is checks to see if its the same one that is about
    //     // to be payed, if so, it just pauses the player
    //     if(currentTrack) {

    //         var trackTitle = $filter('dashless')(currentTrack.title);

    //         trackTitle = trackTitle.toLowerCase(); 

    //         var trackPicked = pTrack.name.toLowerCase(); 

    //     }  

    //         if(trackPicked === trackTitle) {

    //             console.log('same track'); 

    //             this.pause();

    //         }  else {

    //         var position = pTrack.id;

    //         console.log(position); 

    //         this.scplayer.goto(position, true); 

    //         getCurrentTrackInfo().done(function(track){

    //             changeCurrentTrackInfo(track); 

    //             isPlaying = true; 

    //             hasNotPlayed = false; 

    //         });
    //     }

    //     return pTrack ; 
    // }; 

    var playSong = function(pTrack) {

        this.scplayer.goto(pTrack.id);
        
        console.log(pTrack.id); 
    }

    var prev = function() {

        this.scplayer.prev(); 
        isPlaying = true; 

    }

    var generateSCPlayerLinks = function(pTracks) {

        scPlayerLinks = []; 

        var list = pTracks;
        
        for(var i = 0; i < list.length; i++) {

            scPlayerLinks.push(list[i].link);

        }
        return scPlayerLinks; 

    }; 

    var getSCPlayerLinks = function() {

        return scPlayerLinks; 

    }; 


    var setPlaylist = function(pCatalogueRelease, pPlay) {

        var links = generateSCPlayerLinks(pCatalogueRelease.tracks); 

        currentRelease = pCatalogueRelease; 

        var autoPlay = pPlay; 

        if(this.scplayer) {
            this.scplayer.stop(); 
        }

        this.scplayer = {}; 

        //Inits Soundcloud player with array of URLS
        this.scplayer = new SoundCloudPlayer(links,{
              consumer_key: "7a6e6123d37c58d267bdfa4d526e554c"
            , autoplay: false
            , toggle_pause: true
            , preload: false
            , cache: true
            , loop : true
            , debug: false
        })

        scplayer = this.scplayer; 

        currentSoundCloudLinks = links; 

    }; 

    var playPlaylist = function(pPlaylist) {

        if(currentPlaylist === pPlaylist) {

            if(isPlaying) {

                this.pause(); 

            } else {

                this.play(); 

                getCurrentTrackInfo().done(function(track){

                    changeCurrentTrackInfo(track); 

                });

            }

        } else { 

            this.setPlaylist(pPlaylist); 

            this.stop(); 

            var that = this; 

            $timeout(function() {

                that.play(); 
                getCurrentTrackInfo().done(function(track){

                        changeCurrentTrackInfo(track); 

                    });
            }, 400); 

            getCurrentTrackInfo().done(function(track){

                changeCurrentTrackInfo(track); 

            });


        }

        currentPlaylist = pPlaylist; 

    }

    var stop = function() {

        this.scplayer.stop(); 

        isPlaying = false; 

        return isPlaying
    };

    var togglePlaylist = function() {

        if(isPlaying) {

            this.scplayer.pause();   
            isPlaying = false; 


        } else if(isPlaying === false){

            this.scplayer.play(); 

            isPlaying = true; 
        }

    }; 




    var updateCurrentTrackinfo = function() {

        getCurrentTrackInfo().done(function(track){

            AudioPlayer.changeCurrentTrackInfo(track); 

        });

    }; 

 
       
    //Changes currentSong and theme on the changing_track event

    if(scplayer) {

        scplayer.on('scplayer.changing_track', function(e, index) {

            if(hasNotPlayed === true) {
                return;
            }

            updateCurrentTrackinfo(); 

            console.log('update track info on changing track event'); 
        });

    }

    // var getArtworkOfCurrent = function() {

    //     return catalogue[0].artwork; 

    // }

    var audioPlayerObject = {

        scplayer: scplayer,
        "getCurrentTrackInfo": getCurrentTrackInfo,
        "changeCurrentTrackInfo": changeCurrentTrackInfo,
        "checkIfTrackPlaying" : checkIfTrackPlaying, 
        "currentTrack" : getCurrentTrack,
        "next" : next, 
        "getCurrentRelease" : getCurrentRelease,
        "pause": pause,  
        "play": play, 
        "playPlaylist" : playPlaylist, 
        "playSong": playSong,
        "prev" : prev, 
        "stop": stop,
        "getArtworkOfCurrent" : getArtworkOfCurrent,
        "getCatalogue": getCatalogue,
        "getCurrentPlaylist": getCurrentPlaylist,
        "getCurrentTheme": getCurrentTheme,
        "generateSCPlayerLinks": generateSCPlayerLinks,
        "isPlaying" : checkIfPlaying,
        "setPlaylist" : setPlaylist
    }; 

    audioPlayerObject.setPlaylist(catalogue[0]); 

    return audioPlayerObject; 

}]);
