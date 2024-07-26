import banner from './components/banner';
import { setAspectRatio } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.homepage-banner .promo_list');

  if (!document.querySelector(`.${ID}__banner`)) {
    attachPoint.insertAdjacentHTML('beforebegin', banner(ID, VARIATION));

    if (VARIATION === '1') return;

    const container = document.querySelector(`.${ID}__banner-container`);
    const slider = document.querySelector(`.${ID}__slider`);

    slider.addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });

    // const image1 = document.querySelector(`.${ID}__bannerV2 .image-1`);
    // const image2 = document.querySelector(`.${ID}__bannerV2 .image-2`);

    // image1.addEventListener('load', () => {
    //   setAspectRatio(1);
    // });

    // image2.addEventListener('load', () => {
    //   setAspectRatio(2);
    // });
  }
};

export default () => {
  setup();
  init();
};
