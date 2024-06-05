import setup from './services/setup';
import shared from './shared/shared';
import { videoPlayer } from './components/videoPlayer';
import { videoData } from './data/data';

const { ID, VARIATION } = shared;
const init = () => {
  const data =
    VARIATION === '1'
      ? videoData[VARIATION]
      : VARIATION === '2'
      ? videoData[VARIATION]
      : videoData[VARIATION];

  const targetElementForDesktop = document.querySelector(
    '#MainContent .banner .banner_product_model'
  );
  const targetElementForMobile = document.querySelector(
    '#MainContent .banner .banner_left .showMob'
  );
  if (document.querySelector(`.${ID}__videoContainer.${ID}__desktop`)) {
    document.querySelector(`.${ID}__videoContainer.${ID}__desktop`).remove();
  }
  //desktop
  targetElementForDesktop.insertAdjacentHTML('beforebegin', videoPlayer(ID, data, 'desktop'));

  if (document.querySelector(`.${ID}__videoContainer.${ID}__mobile`)) {
    document.querySelector(`.${ID}__videoContainer.${ID}__mobile`).remove();
  }
  //mobile
  targetElementForMobile.insertAdjacentHTML('afterbegin', videoPlayer(ID, data, 'mobile'));

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
