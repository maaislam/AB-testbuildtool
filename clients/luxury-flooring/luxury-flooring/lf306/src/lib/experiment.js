import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.homepage-banner .promo_list');

  if (!document.querySelector(`.${ID}__banner`) || !document.querySelector(`.${ID}__bannerV2`)) {
    attachPoint.insertAdjacentHTML('beforebegin', banner(ID, VARIATION));

    if (VARIATION === '1') return;

    const container = document.querySelector(`.${ID}__banner-container`);
    const slider = document.querySelector(`.${ID}__slider`);

    slider.addEventListener('input', (e) => {
      container.style.setProperty('--position', `${e.target.value}%`);
    });
  }
};

export default () => {
  setup();
  init();
};
