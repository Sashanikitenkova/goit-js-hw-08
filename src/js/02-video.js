import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

import '../css/common.css';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.on('timeupdate', throttle (function(data) {
        // data is an object containing properties specific to that event
        localStorage.setItem('videoplayer-current-time', data.seconds);
    }, 1000));

    const sevedsecond = localStorage.getItem('videoplayer-current-time');
 
    player.setCurrentTime(sevedsecond).then(function(seconds) {
        // seconds = the actual time that the player seeked to  
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
            default:
                // some other error occurred
                break;
        }
    });


  

   