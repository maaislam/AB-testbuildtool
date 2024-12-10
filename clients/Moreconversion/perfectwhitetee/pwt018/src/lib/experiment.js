import { newArrivalHandles } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const isNewArrival = () => {
  const { pathname } = window.location;

  const isProductPage = pathname.includes('products');
  if (isProductPage) {
    const productHandle = pathname.split('/products/')[1];

    if (newArrivalHandles.includes(productHandle)) {
      return true;
    }
    return false;
  }
  return false;
};

const init = () => {
  if (isNewArrival()) {
    const colorLabels = document.querySelectorAll('.variant-input-wrap[data-handle="color"] label');

    colorLabels.forEach((colorLabel) => {
      colorLabel.classList.add(`${ID}__colorLabel`);
      colorLabel.setAttribute('disabled', false);
      colorLabel.removeAttribute('disabled');
    });
  }
};

export default () => {
  setup();

  init();
};
