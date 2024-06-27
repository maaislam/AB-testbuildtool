import setup from './services/setup';
import shared from './shared/shared';
import { uspsWrapper } from './components/uspsWrapper';
import { uspsData } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('form[id^="AddToCartForm"] .atc-qty-merge');

  if (!document.querySelector(`.${ID}__uspsWrapper`)) {
    targetElement.insertAdjacentHTML('afterend', uspsWrapper(ID, uspsData));
  }
};
export default () => {
  setup();

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
