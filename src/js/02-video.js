import throttle from "lodash.throttle";
import Player from '@vimeo/player';

const CURRENT_TIME = "videoplayer-current-time"
const video = document.querySelector('#vimeo-player');

const player = new Player(video);

onFinishTime()

player.on('timeupdate', throttle(onSaveTime, 1000)); 
player.on('ended', onClearStorage);

function onClearStorage() {
    localStorage.removeItem(CURRENT_TIME);
    console.log()
}

function onSaveTime(e) {
    const saveTime = e.seconds
    localStorage.setItem(CURRENT_TIME, saveTime)
}

function onFinishTime() {

    if (localStorage.getItem(CURRENT_TIME)) {
    const currentTime = localStorage.getItem(CURRENT_TIME);
    player.setCurrentTime(currentTime) 
    }
}



