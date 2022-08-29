import throttle from "lodash.throttle"
    const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);


player.on('timeupdate', throttle((a) => { localStorage.setItem("videoplayer-current-time", a.seconds) }, 1000)) 
    
            


    player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))

