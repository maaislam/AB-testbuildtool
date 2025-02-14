import setup from './services/setup';
import shared from './shared/shared';
import wrapper from './components/wrapper';
import videoObj from './data/data';

const { ID, VARIATION } = shared;

const activateVideo = () => {
  const videoElement = document.querySelector(`.${ID}__videoWrapper .${ID}__video`);

  if (!videoElement) return;

  //Toggle play/pause on click
  videoElement.addEventListener('click', () => {
    if (videoElement.paused || videoElement.ended) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  });

  //Ensure the video stays paused when it ends
  videoElement.addEventListener('ended', () => {
    videoElement.pause();
  });
};

const init = () => {
  const targetPoint = document.querySelector('.queen_promise_section');
  if (!document.querySelector(`.${ID}__videoWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', wrapper(ID, videoObj[VARIATION], VARIATION));
  }

  activateVideo();
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__icon.muted`)) {
      const videoElement = document.querySelector(`.${ID}__videoWrapper .${ID}__video`);
      const audioController = document.querySelector(`.${ID}__audioController`);
      videoElement.muted = false;
      audioController.setAttribute('data-attr', 'unmute');
    } else if (target.closest(`.${ID}__icon.unmuted`)) {
      const videoElement = document.querySelector(`.${ID}__videoWrapper .${ID}__video`);
      const audioController = document.querySelector(`.${ID}__audioController`);
      videoElement.muted = true;
      audioController.setAttribute('data-attr', 'mute');
    }
  });

  init(); //
};
