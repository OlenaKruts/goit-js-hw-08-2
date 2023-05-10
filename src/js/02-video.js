import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onCurrentTime, 5000));

function onCurrentTime(currentTime) {
  const setCurrentTime = JSON.stringify(currentTime.seconds);
  localStorage.setItem('LOCAL_STORAGE_KEY', setCurrentTime);
  console.log(setCurrentTime);
}
const getCurrentTime = JSON.parse(localStorage.getItem('LOCAL_STORAGE_KEY'));
console.log(getCurrentTime);

player
  .setCurrentTime(getCurrentTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
