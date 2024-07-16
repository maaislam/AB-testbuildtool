import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { deliveryDate } from './components/deliveryDate';
import { deliveryOptions } from './components/deliveryOption';
import { stateList } from './data/stateList';

const { ID, VARIATION } = shared;

const init = () => {
  const atcButton = document.querySelector('.productpage-right-buttons');
  const paymentIcons = document.querySelector('.productpage-right-info-secure');

  if (document.querySelector(`.${ID}__deliveryDate`)) {
    document.querySelector(`.${ID}__deliveryDate`).remove();
  }

  if (document.querySelector(`.${ID}__deliveryOptionsWrapper`)) {
    document.querySelector(`.${ID}__deliveryOptionsWrapper`).remove();
  }

  if (atcButton) {
    atcButton.insertAdjacentHTML('beforeend', deliveryDate(ID));
    atcButton.insertAdjacentHTML('beforeend', deliveryOptions(ID, stateList));
    atcButton && atcButton.insertAdjacentElement('beforeend', paymentIcons);
  }
};
export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__title`)) {
      document.querySelector(`.${ID}__content`).classList.toggle('active');
    } else if (target.closest(`.${ID}__item`)) {
      const item = target.closest(`.${ID}__item`);
      const text = item.textContent.trim();
      const dropdownTitle = document.querySelector(`.${ID}__content .${ID}__text`);
      dropdownTitle.textContent = text;
      document.querySelector(`.${ID}__content`).classList.toggle('active');
    }
  });

  window.addEventListener('scroll', () => {
    if (document.querySelector(`.${ID}__content`).classList.contains('active')) {
      document.querySelector(`.${ID}__content`).classList.toggle('active');
    }
  });

  if (VARIATION === 'Control') return;

  init();
};
