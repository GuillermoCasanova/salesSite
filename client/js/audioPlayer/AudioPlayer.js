angular.module('Sales')
    .factory('AudioPlayer', function() {

    var isPlaying = false; 

    var currentSong = null; 

    var scPlayerLinks = []; 

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

    var catalogue = [{

        "name": 'SALES EP',
        "releaseIndex" : "1",
        "tracks": [
            {
                "name": "renee",
                "link": "https://soundcloud.com/sales/sales-renee"
            },
            {
                "name" : "vow",
                "link" : "https://soundcloud.com/sales/vow"
            },
            {
                "name" : "Chinese New Year",
                "link" : "https://soundcloud.com/sales/chinese-new-year"
            },
            {
                "name" : "Getting It On",
                "link" : "https://soundcloud.com/sales/getting-it-on"
            },
            {
                "name": "toto",
                "link" : "https://soundcloud.com/sales/toto"

            },
            {
                "name" : "toto (XXYYXX Remix)",
                "link" : "https://soundcloud.com/sales/toto-xxyyxx-remix/"
            }]
    },
    {
        "name": 'SALES LP',
        "releaseIndex" : "2",
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

        return linksList; 

    }

    var getSCPlayerLinks = function() {

        return scPlayerLinks; 

    }

    //Inits Soundcloud player with array of URLS
    var scplayer = new SoundCloudPlayer(scPlayerLinks,{
          consumer_key: "7a6e6123d37c58d267bdfa4d526e554c"
        , autoplay: false
        , toggle_pause: true
        , preload: false
        , cache: true
        , loop : true
        , debug: false
    });


    var generatePlaylist  = function() {

        var list = catalogue[0].tracks;
        
        var playlistLinks = scplayer.playlist(); 

        for(var i = 0; i < playlistLinks.length; i++) {

            scplayer.track_info(i).then(function(track) {

                var title = track.title; 

                tracks.push(title); 

            }); 
        }

    }

    var getCurrentPlaylist = function() {

       return tracks; 
    }

    generatePlaylist(); 

    return {
        "scplayer": scplayer, 
        "checkIfPlaying": checkIfPlaying, 
        "play": play, 
        "stopPlaying": stopPlaying,
        "getCurrentPlaylist": getCurrentPlaylist

    }

});
