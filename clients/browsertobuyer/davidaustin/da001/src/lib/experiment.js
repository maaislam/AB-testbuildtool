import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const productGrid = document.querySelector('.shopify-section-product-grid');
  productGrid.classList.add(`${ID}__productGrid`);
};

export default () => {
  setup();
  init();
};
