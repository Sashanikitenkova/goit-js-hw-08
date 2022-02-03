import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);
    
    // player.on('play', function() {
    //     console.log('played the video!');
    // });

    player.on('timeupdate', function(data) {
        // data is an object containing properties specific to that event
        // localStorage.setItem('videoplayer-current-time', JSON.stringify({data}));
        const scienceTime = data.seconds;
        // console.log(scienceTime);
        localStorage.setItem('videoplayer-current-time', JSON.stringify({scienceTime}));
    });


    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });


  

   