import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const classRemove = (target) => {
  document
    .querySelector(`.fotorama__stage .fotorama__stage__frame.${target}`)
    .classList.remove(
      'fotorama-video-container',
      'video-unplayed',
      'fotorama__product-video--loaded',
      'magnify-wheel-loaded'
    );

  // pollerLite(
  //   [
  //     '.fotorama__zoom-in.fotorama__zoom-in--disabled',
  //     '.fotorama__zoom-out.fotorama__zoom-out--disabled'
  //   ],
  //   () => {
  //     document
  //       .querySelector('.fotorama__zoom-in.fotorama__zoom-in--disabled')
  //       .classList.remove('fotorama__zoom-in--disabled');
  //     document
  //       .querySelector('.fotorama__zoom-out.fotorama__zoom-out--disabled')
  //       .classList.remove('fotorama__zoom-out--disabled');
  //   }
  // );
};

const callbackForLageImage = (mutation) => {
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
          .insertAdjacentHTML('beforebegin', selectedVideoLageImageEl);
      }
      if (!document.querySelector(`.${ID}__fotorama__img--full`)) {
        document
          .querySelector('.fotorama__stage .fotorama__stage__frame.fotorama-video-container')
          .insertAdjacentHTML('afterbegin', selectedVideoExtraLageImageEl);
      }
      classRemove('fotorama-video-container');
    }
  );

  pollerLite(
    ['.fotorama__stage .fotorama__stage__frame.magnify-wheel-loaded img.fotorama__img'],
    () => {
      classRemove('magnify-wheel-loaded');
    }
  );
};

const callBackForThumImage = () => {
  const selectedVideoThumbEl = document.querySelector(
    '.fotorama__nav-wrap .fotorama__nav__frame.video-thumb-icon'
  );
  const selectedVideoThumbImageEl = selectedVideoThumbEl.querySelector('img.fotorama__img');
  selectedVideoThumbImageEl.style.cssText = `
  max-width: 100%;
  border:none !important;
`;

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
