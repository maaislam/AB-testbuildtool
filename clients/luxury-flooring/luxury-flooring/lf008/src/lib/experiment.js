import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const callbackForLageImage = (mutation) => {
  if (
    document.querySelector(`.${ID}__largeImage`) &&
    document.querySelector(`.${ID}__fotorama__img--full`)
  ) {
    return;
  }

  pollerLite(
    ['.fotorama__stage .fotorama__stage__frame.fotorama-video-container img.fotorama__img'],
    () => {
      const selectedVideoLageImageEl = `
        <img src="https://luxury-flooring.s3.amazonaws.com/newthumb.jpg" alt="Studley Barn Engineered Oak" class="fotorama__img ${ID}__largeImage" aria-hidden="false">
      `;

      const selectedVideoExtraLageImageEl = `
      <img src="https://luxury-flooring.s3.amazonaws.com/newthumb.jpg" alt="Studley Barn Engineered Oak" class="fotorama__img--full ${ID}__fotorama__img--full" aria-hidden="false">
    `;

      if (!document.querySelector(`.${ID}__largeImage`)) {
        document
          .querySelector(
            '.fotorama__stage .fotorama__stage__frame.fotorama-video-container img.fotorama__img'
          )
          .insertAdjacentHTML('afterend', selectedVideoLageImageEl);
      }

      if (!document.querySelector(`.${ID}__fotorama__img--full`)) {
        document
          .querySelector(
            '.fotorama__stage .fotorama__stage__frame.fotorama-video-container .fotorama__img'
          )
          .insertAdjacentHTML('beforebegin', selectedVideoExtraLageImageEl);
      }

      document
        .querySelector('.fotorama__stage .fotorama__stage__frame.fotorama-video-container')
        .classList.remove('magnify-wheel-loaded', 'fotorama-video-container', 'video-unplayed');
    }
  );
};

const callBackForThumImage = () => {
  const selectedVideoThumbEl = document.querySelector(
    '.fotorama__nav-wrap .fotorama__nav__frame.video-thumb-icon'
  );
  const selectedVideoThumbImageEl = selectedVideoThumbEl.querySelector('img.fotorama__img');

  selectedVideoThumbImageEl.src = 'https://luxury-flooring.s3.amazonaws.com/newthumb.jpg';
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  callBackForThumImage();
  observeDOM('.fotorama__stage .fotorama__stage__shaft', callbackForLageImage);
};
