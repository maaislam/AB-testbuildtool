import plpCards from './components/plpCards';
import { plpData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const { pathname } = window.location;
  const headerTitleElem = document.querySelector('.shopify-section[id*="__text"] .text-heading-lg');
  const headerTitleGridElem = document.querySelector('.shopify-section[id*="__text"] .bg-background');
  const attachPoint = document.querySelector('[id*="featured_products"]');
  const featuredProducts = document.querySelectorAll('[id*="featured_products"]');
  const data = plpData[pathname];

  featuredProducts.forEach((featuredProduct) => {
    featuredProduct.classList.add('hidden');
  });

  headerTitleGridElem.classList.add(`${ID}__heading`);
  if (!document.querySelector(`.${ID}__cards`)) {
    headerTitleElem.insertAdjacentHTML('afterend', `<div class="${ID}__headingText">${data.headingText}</div>`);
    attachPoint.insertAdjacentHTML('beforebegin', plpCards(ID, data));
  }
};

export default () => {
  setup();

  init();
};
