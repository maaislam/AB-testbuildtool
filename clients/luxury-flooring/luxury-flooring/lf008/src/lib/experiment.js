import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';

const { ID } = shared;

let zoom = 1;
const zoominStr = `
<div class="zoom zoom-in" data-gallery-role="fotorama__zoom-in" aria-label="Zoom in" role="button" tabindex="0"></div>
`;
const zoomoutStr = `
<div class="zoom zoom-out" data-gallery-role="fotorama__zoom-out" aria-label="Zoom out" role="button" tabindex="0"></div>
`;

const init = (target) => {
  document
    .querySelector(`.fotorama__stage .fotorama__stage__frame.${target}`)
    .classList.remove(
      'fotorama-video-container',
      'video-unplayed',
      'fotorama__product-video--loaded',
      'magnify-wheel-loaded'
    );

  pollerLite(
    [
      '.fotorama__zoom-in.fotorama__zoom-in--disabled',
      '.fotorama__zoom-out.fotorama__zoom-out--disabled',
      () => document.querySelector(`.${ID}__fotorama__img--full`)?.closest('.fotorama__active')
    ],
    () => {
      if (!document.querySelector('.zoom-in')) {
        document.querySelector('.fotorama__zoom-in').insertAdjacentHTML('afterend', zoominStr);
      }

      if (!document.querySelector('.zoom-out')) {
        document.querySelector('.fotorama__zoom-out').insertAdjacentHTML('afterend', zoomoutStr);
      }
    }
  );

  pollerLite(
    [() => !document.querySelector(`.${ID}__fotorama__img--full`)?.closest('.fotorama__active')],
    () => {
      if (document.querySelector('.zoom-in')) {
        document.querySelector('.zoom-in').remove();
      }

      if (document.querySelector('.zoom-out')) {
        document.querySelector('.zoom-out').remove();
      }
      zoom = 1;
    }
  );
};

const callbackForLageImage = () => {
  if (document.querySelector('.product-video')) {
    document.querySelector('.product-video').remove();
  }
  if (
    document.querySelector(
      '.fotorama__stage .fotorama__stage__frame img[src*="hqdefault_46_12.webp"]'
    )
  ) {
    document
      .querySelector('.fotorama__stage .fotorama__stage__frame img[src*="hqdefault_46_12.webp"]')
      .remove();
  }

  if (document.querySelector(`.${ID}__fotorama__img--full`)) {
    document.querySelector(`.${ID}__fotorama__img--full`).style.cssText = 'transform: scale(1)';
  }
  pollerLite(
    ['.fotorama__stage .fotorama__stage__frame.fotorama-video-container img.fotorama__img'],
    () => {
      const selectedVideoLageImageEl = `
          <img src="https://luxury-flooring.s3.amazonaws.com/newthumb.jpg" alt="Studley Barn Engineered Oak" class="fotorama__img ${ID}__largeImage" aria-hidden="false">
        `;
      const selectedVideoExtraLageImageEl = `
        <img src="https://luxury-flooring.s3.amazonaws.com/newthumb.jpg" alt="Studley Barn Engineered Oak" class="${ID}__targetImage fotorama__img--full ${ID}__fotorama__img--full" aria-hidden="false">
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
      init('fotorama-video-container');
    }
  );

  pollerLite(
    ['.fotorama__stage .fotorama__stage__frame.magnify-wheel-loaded img.fotorama__img'],
    () => {
      init('magnify-wheel-loaded');
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
  setup();

  callBackForThumImage();
  observeDOM('.fotorama__stage .fotorama__stage__shaft', callbackForLageImage);

  document.body.addEventListener('pointerup', ({ target }) => {
    if (target.closest('.zoom.zoom-in')) {
      zoom += 0.2;
      document.querySelector(`.${ID}__targetImage`).style.transform = `scale(${zoom})`;
    }

    if (target.closest('.zoom.zoom-out')) {
      if (zoom > 1) {
        zoom -= 0.2;
        document.querySelector(`.${ID}__targetImage`).style.transform = `scale(${zoom})`;
      }
    }
  });

  document.body.addEventListener('wheel', (e) => {
    const { target, deltaY } = e;
    if (target.closest(`.${ID}__targetImage`)) {
      if (deltaY < 0 && zoom < 2) {
        zoom += 0.2;
        document.querySelector(`.${ID}__targetImage`).style.transform = `scale(${zoom})`;
      } else if (deltaY > 0 && zoom > 1) {
        zoom -= 0.2;
        document.querySelector(`.${ID}__targetImage`).style.transform = `scale(${zoom})`;
      }
    }
  });
};
