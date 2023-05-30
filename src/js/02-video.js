import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onCurrentTime, 5000));

function onCurrentTime({ seconds }) {
  localStorage.setItem('LOCAL_STORAGE_KEY', seconds);
}
const getCurrentTime = localStorage.getItem('LOCAL_STORAGE_KEY') || 0;

player
  .setCurrentTime(getCurrentTime)
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
