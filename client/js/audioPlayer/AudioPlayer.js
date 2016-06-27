    angular.module('Sales')
    .factory('AudioPlayer', ['$http', '$timeout', '$filter', function($http, $timeout, $filter) {


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
                "name": "over",
                "link": "https://soundcloud.com/sales/over", 
                "id" : 0
            },
            {
                "name" : "ivy",
                "link" : "https://soundcloud.com/sales/ivy",
                "id" : 1
            },
            {
                "name" : "crash",
                "link" : "https://soundcloud.com/sales/crash",
                "id" : 2
            },
            {
                "name": "untitled 01",
                "link": "https://soundcloud.com/sales/untitled-01", 
                "id" : 3
            },
            {
                "name" : "pope is a rockstar",
                "link" : "https://soundcloud.com/sales/pope-is-a-rockstar", 
                "id": 4
            },
            {
                "name" : "pope is a rockstar",
                "link" : "https://soundcloud.com/sales/trapped-in-a-club", 
                "id": 5
            },
            {
                "name" : "mondays",
                "link" : "https://soundcloud.com/sales/mondays", 
                "id": 6
            },
            {
                "name": "big sis",
                "link": "https://soundcloud.com/sales/big-sis", 
                "id" : 7
            },
            {
                "name" : "jamz",
                "link" : "https://soundcloud.com/sales/jamz", 
                "id": 8
            },
            {
                "name" : "thurs 6-25",
                "link" : "https://soundcloud.com/sales/thurs-6-25", 
                "id": 9
            },
            {
                "name" : "seven's day",
                "link" : "https://soundcloud.com/sales/sevens-day", 
                "id": 10
            },
            {
                "name" : "sorry bro",
                "link" : "https://soundcloud.com/sales/sorry-bro", 
                "id": 11
            }
            ]


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

            if(currentTrack)
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

    audioPlayerObject.setPlaylist(catalogue[1]); 

    return audioPlayerObject; 

}]);
