import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const productWrapper = document.querySelector('.featured-product');
  const productSection = productWrapper.closest('section');
  productSection.classList.add(`${ID}-productSection`);

  const heroElem = document.querySelector('.split-screen-hero');
  const heroSection = heroElem.closest('section');

  heroSection.insertAdjacentElement('afterend', productSection);
  heroSection.insertAdjacentHTML('afterend', `<img src='https://cdn.shopify.com/s/files/1/0644/1349/9629/files/derm_megawide.png?v=1731379821' class="${ID}-img">`);
};

export default () => {
  setup();

  init();
};
