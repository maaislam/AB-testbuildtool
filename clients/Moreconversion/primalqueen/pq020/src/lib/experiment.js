import setup from './services/setup';
import shared from './shared/shared';
import { addCssToPage, addJsToPage, isIOS, pollerLite } from './helpers/utils';
import homepageBanner from './components/homepageBanner';
import { reviewData, videoData } from './data/data';
import initSwiper from './helpers/initSwiper';
import { swiperConfig } from './configs/swiperConfigs';
import volumnPill from './components/volumnPill';
import { muteIcon, unMuteIcon } from './assets/icon';
import { videoPlayer } from './components/videoPlayer';

const { ID, VARIATION } = shared;

const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

const init = () => {
  const targetPoint = document.querySelector('.banner');
  if (!document.querySelector(`.${ID}__homepageBanner`)) {
    targetPoint.insertAdjacentHTML('beforebegin', homepageBanner(ID, reviewData));
  }

  pollerLite([() => window.Swiper !== undefined], () => {
    initSwiper('.swiper-bookmaker', swiperConfig);
  });

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
  targetElementForDesktop.insertAdjacentHTML('beforebegin', videoPlayer(ID, data, 'desktop'));
  if (document.querySelector(`.${ID}__videoContainer.${ID}__mobile`)) {
    document.querySelector(`.${ID}__videoContainer.${ID}__mobile`).remove();
  }
  targetElementForMobile.insertAdjacentHTML('afterbegin', videoPlayer(ID, data, 'mobile'));
  if (isIOS()) {
    const videoElem = document.querySelector(`.${ID}__video`);
    videoElem.muted = true;
    const pillText = videoElem.muted ? 'Click to Unmute' : 'Click to Mute';
    const pillIcon = videoElem.muted ? muteIcon : unMuteIcon;
    const volumnPillElem = volumnPill(ID, pillIcon, pillText);
    const videoSections = document.querySelectorAll(`.${ID}__videoContainer`);
    videoSections.forEach((videoSection) => {
      videoSection.insertAdjacentHTML('beforeend', volumnPillElem);
      const video = videoSection.querySelector(`.${ID}__video`);
      video.play();
    });
  }
};

export default () => {
  setup();
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  console.log(ID);

  if (VARIATION === 'control') return;

  init(); //

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__videoContainer`) && !target.closest(`.${ID}__volumnPillBtn`)) {
      console.log('i am in', target);
      const videoWrapper = target.closest(`.${ID}__videoContainer`);

      const video = videoWrapper.querySelector('video');
      if (video.paused) {
        video.play();
        if (!isIOS()) {
          video.muted = false;
        }
      } else {
        video.pause();
        video.muted = true;
      }
    } else if (target.closest(`.${ID}__volumnPillBtn`)) {
      e.preventDefault();
      const videoWrapper = target.closest(`.${ID}__videoContainer`);
      const video = videoWrapper.querySelector('video');
      const videoTextElem = videoWrapper.querySelector(`.${ID}__volumnPillBtn-text`);
      video.muted = !video.muted;
      const videoText = video.muted ? 'Click to Unmute' : 'Click to Mute';
      videoTextElem.textContent = videoText;
      const videoPillIcon = video.muted ? muteIcon : unMuteIcon;
      const videoIconElem = videoWrapper.querySelector(`.${ID}__volumnPillBtn-icon`);
      videoIconElem.innerHTML = videoPillIcon;
      if (!video.muted) {
        video.pause();
        video.currentTime = 0;
        video.play();
      }
    }
  });

  const videoSection = document.querySelectorAll(`.${ID}__video`);
  console.log(videoSection, 'videoSection');

  const videoPausePlayHandler = (e) => {
    if (e.type === 'playing') {
      e.target.setAttribute('controls', 'controls');
      e.target.closest(`.${ID}__videoContainer`).querySelector(`.${ID}__playButton`).style.display =
        'none';
    } else if (e.type === 'pause') {
      e.target.removeAttribute('controls');
      e.target.closest(`.${ID}__videoContainer`).querySelector(`.${ID}__playButton`).style.display =
        'block';
    }
  };
};
