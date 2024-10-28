import badge from './components/badge';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const extractNumber = (str) => {
  const numberMatch = str.match(/[\d.]+/);

  return numberMatch ? parseFloat(numberMatch[0]) : null;
};

const init = () => {
  const modalButtons = document.querySelectorAll('section[role="dialog"] div button[data-price]');
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

  if (largestBundleButton) {
    largestBundleButton.insertAdjacentHTML('afterbegin', badge(ID, VARIATION));
  }
};

export default () => {
  setup();

  init();
};
