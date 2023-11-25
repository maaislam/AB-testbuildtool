import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection, pollerLite } from './helpers/utils';
import stickyATC from './components/stickyATC';
import handleATC from './handlers/handleATC';

const { ID } = shared;

const intersectionAnchor = document.querySelector('.product-form__cart-submit');
const anchorPoint = document.body;

const productImg = document.querySelector('ul.product-thumbnails__items .product-thumbnails__item img').getAttribute('src');
const productTitle = document.querySelector('.product__title').textContent.trim();
const productOriginalPrice = document.querySelector('[data-compare-price]').cloneNode(true);
const productSalePrice = document.querySelector('[data-price]').cloneNode(true);

const productData = {
  productImg,
  productTitle,
  productOriginalPrice,
  productSalePrice
};

const init = () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATCContainer`);
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', stickyATC(ID, productData));

  observeIntersection(intersectionAnchor, 0, handleIntersection);

  handleATC(ID, intersectionAnchor);

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync('.vf-button { bottom: 70px !important; }');

  const styleSheets = [styleSheet];

  if (Symbol.iterator in styleSheets) {
    window.repApp.$$.root.adoptedStyleSheets = styleSheets;
  } else {
    console.error('Invalid iterable object');
  }
};

export default () => {
  setup();
  init();
};
