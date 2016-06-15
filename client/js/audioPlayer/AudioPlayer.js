    angular.module('Sales')
    .factory('AudioPlayer', function() {


    //*Default variables*//

    var isPlaying = false; 

    var currentSong = null; 

    var currentSoundCloudLinks = []; 

    var scPlayerLinks = []; 

    var tracks = [];

    var scplayer = false; 

    var hasNotPlayed = true; 

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
                "link": "https://soundcloud.com/sales/ivy"
            },
            {
                "name" : "jamz",
                "link" : "https://soundcloud.com/sales/jamz"
            },
            {
                "name" : "ivy",
                "link" : "https://soundcloud.com/sales/chinese-new-year"
            }]


    }]; 




    //*********//
    //*Methods//
    //*******//

    var checkIfPlaying  = function() {

        return isPlaying; 
    };

    var currentSong = function() {

        return currentSong; 

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
    
    var getCurrentSong = function() {

        return currentSong; 

    };

    var getReleases = function() {
        return catalogue; 

    };

    var play =  function() {

        console.log('play'); 
        this.scplayer.play(); 

        isPlaying = true; 

        hasNotPlayed = false; 

        return isPlaying;
    };



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


    var setPlaylist = function(pSoundcloudLinks, pPlay) {

        var autoPlay = pPlay; 

        if(this.scplayer) {
            this.scplayer.stop(); 
        }

            this.scplayer = {}; 
        
        //Inits Soundcloud player with array of URLS
        this.scplayer = new SoundCloudPlayer(pSoundcloudLinks,{
              consumer_key: "7a6e6123d37c58d267bdfa4d526e554c"
            , autoplay: false
            , toggle_pause: true
            , preload: false
            , cache: true
            , loop : true
            , debug: false
        })

        scplayer = this.scplayer; 

        currentSoundCloudLinks = pSoundcloudLinks; 

    }; 

    var stop = function() {
        console.log('stop'); 
        this.scplayer.stop(); 
        isPlaying = false; 
        return isPlaying
    };


    var togglePlaylist = function() {
        if(this.isPlaying) {
            this.scplayer.pause();   
            isPlaying = false; 

        } else if(this.isPlaying === false){
            this.scplayer.play(); 
            console.log('play'); 
            isPlaying = true; 
        }
    }; 

    var playPlaylist = function() {
        this.scplayer.play();   
        isPlaying = true; 

    }; 


    var playSong = function(pPosition) {

        console.log('play'); 
        this.scplayer.goto(pPosition); 

        return pPosition; 
    }; 


    var getCurrentTrackInfo = function() {
        
        return this.scplayer.track_info(scplayer.track_index()); 

    }; 


    var changeCurrentTrackInfo = function(pTrackInfo) {

        currentSong = pTrackInfo; 

        return currentSong; 
    };
       
    //Changes currentSong and theme on the changing_track event
    // scplayer.on('scplayer.changing_track', function(e, index) {

    //     if(hasNotPlayed === true) {
    //         return;
    //     }

    //     changeCurrenTrackInfo(); 

    // });


    // var getArtworkOfCurrent = function() {

    //     return catalogue[0].artwork; 

    // }

    var audioPlayerObject = {

        scplayer: scplayer,
        "getCurrentTrackInfo": getCurrentTrackInfo,
        "changeCurrentTrackInfo": changeCurrentTrackInfo,
        "checkIfPlaying": checkIfPlaying, 
        "play": play, 
        "playPlaylist": playPlaylist, 
        playSong: function(pSongToPlay) {

            return playSong(pSongToPlay); 

        },
        "stop": stop,
        "getArtworkOfCurrent" : getArtworkOfCurrent,
        "getCatalogue": getCatalogue,
        "getCurrentSong": getCurrentSong,
        "getCurrentPlaylist": getCurrentPlaylist,
        "getReleases": getReleases,
        "generateSCPlayerLinks": generateSCPlayerLinks,
        isPlaying : function() {

            return checkIfPlaying(); 
        },
        "setPlaylist" : setPlaylist
    }; 

    audioPlayerObject.generateSCPlayerLinks(catalogue[0].tracks); 
    audioPlayerObject.setPlaylist(scPlayerLinks); 

    return audioPlayerObject; 

});
