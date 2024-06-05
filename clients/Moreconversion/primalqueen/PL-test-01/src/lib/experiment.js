import setup from './services/setup';
import shared from './shared/shared';
import { videoPlayer } from './components/videoPlayer';

const { ID, VARIATION } = shared;
const init = () => {
  const targetElement = document.querySelector('.section_6 .sec6_left .s6_product_model');
  if (document.querySelector(`.${ID}__videoContainer`)) {
    document.querySelector(`.${ID}__videoContainer`).remove();
  }
  targetElement.insertAdjacentHTML('beforebegin', videoPlayer(ID));

  const videoSection = document.querySelector(`.${ID}__video`);

  const videoPausePlayHandler = (e) => {
    if (e.type === 'playing') {
      //add controls
      videoSection.setAttribute('controls', 'controls');
    } else if (e.type === 'pause') {
      //remove controls
      videoSection.removeAttribute('controls');
    }
  };

  //Add event listeners
  videoSection.addEventListener('playing', videoPausePlayHandler, false);
  videoSection.addEventListener('pause', videoPausePlayHandler, false);
};

export default () => {
  setup();
  console.log(ID);

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'control') return;

  init();
};
