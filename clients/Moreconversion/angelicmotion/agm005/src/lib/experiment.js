import setup from './services/setup';
import shared from './shared/shared';
import { discountIcon } from './assets/svgs';
import modal from './components/modal';
import { hoodiesData, zipupData } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const isHoodies = () => window.location.pathname.includes('hoodie');
  const isZipup = () => window.location.pathname.includes('zipup');

  const attachPoint = document.querySelector('.product-form__submit');
  const offerBtn = `<button class="${ID}__offerBtn" type="button">
  ${discountIcon} Buy 3 & Get 1 FREE
  </button>`;

  if (!document.querySelector(`.${ID}__offerBtn`)) {
    attachPoint.insertAdjacentHTML('afterend', offerBtn);
  }

  if (isHoodies()) {
    document.body.insertAdjacentHTML('afterbegin', modal(ID, hoodiesData));
  } else if (isZipup()) {
    document.body.insertAdjacentHTML('afterbegin', modal(ID, zipupData));
  }
};

export default () => {
  setup();

  document.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__offerBtn`)) {
      document.querySelector(`.${ID}__modal`).classList.add('active');
    }
  });

  init();
};
