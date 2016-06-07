    angular.module('Sales')
    .factory('AudioPlayer', function() {

    var isPlaying = false; 

    var currentSong = null; 

    var scPlayerLinks = []; 

    var tracks = [];

    var scplayer = false; 

    var checkIfPlaying  = function() {

        return isPlaying; 
    };

    var play =  function() {

        isPlaying = true; 
        return isPlaying;
    };

    var stopPlaying = function() {

        isPlaying = false; 
        return isPlaying
    };

    var getCurrentSong = function() {

        return currentSong; 
    }

    var changeCurrentSong = function(pSong) {

        currentSong = pSong;

        return currentSong; 

    }

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


    var generateSCPlayerLinks = function() {

        var list = catalogue[0].tracks;

        for(var i = 0; i < list.length; i++) {

            scPlayerLinks.push(list[i].link);

        }

        return scPlayerLinks; 

    }

    var getSCPlayerLinks = function() {

        return scPlayerLinks; 

    }


    var setPlaylist = function(pSoundcloudLinks) {

        if(scplayer) {

            console.log('there was already one hre');
            scplayer  = false; 

        }

        //Inits Soundcloud player with array of URLS
        scplayer = new SoundCloudPlayer(pSoundcloudLinks,{
              consumer_key: "7a6e6123d37c58d267bdfa4d526e554c"
            , autoplay: false
            , toggle_pause: true
            , preload: false
            , cache: true
            , loop : true
            , debug: false
        }); 

        console.log('success');

    }


    generateSCPlayerLinks()

    setPlaylist(scPlayerLinks); 


    // var generatePlaylist  = function() {

    //     var list = catalogue[0].tracks;

    //     var playlistLinks = scplayer.playlist(); 

    //     for(var i = 0; i < playlistLinks.length; i++) {

    //         scplayer.track_info(i).then(function(track) {

    //             var title = track.title; 

    //             tracks.push(title); 

    //         }); 
    //     }

    // }

    // generatePlaylist(); 

    var getCurrentPlaylist = function() {
        console.log(scplayer.playlist()); 
        return catalogue[0].tracks; 
    }

    var getArtworkOfCurrent = function() {

        return catalogue[0].artwork; 

    }

    var getReleases = function() {
        return catalogue; 

    }

    var playSong = function(pPosition) {
        console.log(pPosition);
        scplayer.goto(pPosition); 

        return pPosition; 
    }

    return {
        "scplayer": scplayer, 
        "changeCurrentSong": changeCurrentSong,
        "checkIfPlaying": checkIfPlaying, 
        "play": play, 
        "playSong":playSong,
        "stopPlaying": stopPlaying,
        "getArtworkOfCurrent" : getArtworkOfCurrent,
        "getCurrentPlaylist": getCurrentPlaylist,
        "getReleases": getReleases,
        "setPlaylist" : setPlaylist

    }

});
