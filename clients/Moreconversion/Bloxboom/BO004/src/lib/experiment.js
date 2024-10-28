import badge from './components/badge';
import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const extractNumber = (str) => {
  const numberMatch = str.match(/[\d.]+/);

  return numberMatch ? parseFloat(numberMatch[0]) : null;
};

const init = () => {
  const modalButtons = document.querySelectorAll('section[role="dialog"] div button[data-price]');
  if (modalButtons.length === 0) return;

  let largestBundle = 0;
  let largestBundleButton = null;

  modalButtons.forEach((button) => {
    const price = button.getAttribute('data-price');
    const priceNumber = extractNumber(price);

    if (priceNumber > largestBundle) {
      largestBundle = priceNumber;
      largestBundleButton = button;
    }
  });

  if (largestBundleButton && !document.querySelector(`.${ID}__badge`)) {
    largestBundleButton.insertAdjacentHTML('afterbegin', badge(ID, VARIATION));
  }
};

export default () => {
  setup();

  init();

  observeDOM('body', init, {
    childList: true,
    subtree: false,
    attributes: true,
    characterData: false,
    characterDataOldValue: false
  });
};
