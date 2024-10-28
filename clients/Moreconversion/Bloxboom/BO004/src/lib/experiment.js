import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const extractNumber = (str) => {
  const numberMatch = str.match(/[\d.]+/);

  return numberMatch ? parseFloat(numberMatch[0]) : null;
};

const init = () => {
  const modalButtons = document.querySelectorAll('section[role="dialog"] div button[data-price]');
  modalButtons.forEach((button) => {
    const price = button.getAttribute('data-price');
    const priceNumber = extractNumber(price);
    console.log('priceNumber: ', priceNumber);
  });
};

export default () => {
  setup();

  init();
};
