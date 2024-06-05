import setup from './services/setup';
import shared from './shared/shared';
import { videoPlayer } from './components/videoPlayer';
import { videoData } from './data/data';
import { isIOS } from './helpers/utils';
import { muteIcon, unMuteIcon } from './assets/icons';
import volumnPill from './components/volumnPill';

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

  //show volume pill on mobile only ios
  if (isIOS()) {
    //mute video
    const videoElem = document.querySelector(`.${ID}__video`);
    videoElem.muted = true;

    //push volumn pill
    const pillText = videoElem.muted ? 'Click to Unmute' : 'Click to Mute';
    const pillIcon = videoElem.muted ? muteIcon : unMuteIcon;
    const volumnPillElem = volumnPill(ID, pillIcon, pillText);
    const videoSections = document.querySelectorAll(`.${ID}__videoContainer`);
    videoSections.forEach((videoSection) => {
      videoSection.insertAdjacentHTML('beforeend', volumnPillElem);
    });
  }
};

export default () => {
  setup();

  //eslint-disable-next-line no-useless-return
  if (VARIATION === 'control') return;

  init();

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__playButton`)) {
      const videoWrapper = target.closest(`.${ID}__videoContainer`);
      videoWrapper.querySelector('video').click();
    } else if (target.closest(`.${ID}__volumnPillBtn`)) {
      const videoWrapper = target.closest(`.${ID}__videoContainer`);
      const video = videoWrapper.querySelector('video');
      const videoTextElem = videoWrapper.querySelector(`.${ID}__volumnPillBtn-text`);
      video.muted = !video.muted;
      //text change
      const videoText = video.muted ? 'Click to Unmute' : 'Click to Mute';
      videoTextElem.textContent = videoText;
      //icon change
      const videoPillIcon = video.muted ? muteIcon : unMuteIcon;
      const videoIconElem = videoWrapper.querySelector(`.${ID}__volumnPillBtn-icon`);
      videoIconElem.innerHTML = videoPillIcon;
    }
  });

  const videoSection = document.querySelectorAll(`.${ID}__video`);

  const videoPausePlayHandler = (e) => {
    if (e.type === 'playing') {
      //add controls
      e.target.setAttribute('controls', 'controls');
      e.target.closest(`.${ID}__videoContainer`).querySelector(`.${ID}__playButton`).style.display =
        'none';
    } else if (e.type === 'pause') {
      //remove controls
      e.target.removeAttribute('controls');
      e.target.closest(`.${ID}__videoContainer`).querySelector(`.${ID}__playButton`).style.display =
        'block';
    }
  };

  //Add event listeners
  videoSection.forEach((item) => {
    item.addEventListener('playing', videoPausePlayHandler, false);
  });

  videoSection.forEach((item) => {
    item.addEventListener('pause', videoPausePlayHandler, false);
  });
};
