import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';
import stickyATC from './components/stickyATC';

const { ID } = shared;

const intersectionAnchor = document.querySelector('.product-form__cart-submit');
const anchorPoint = document.body;

const productImg = document.querySelector('ul.product-thumbnails__items .product-thumbnails__item img').getAttribute('src');
const productTitle = document.querySelector('.product__title').textContent.trim();
const productOriginalPrice = document.querySelector('[data-compare-price]').cloneNode(true);
const productSalePrice = document.querySelector('[data-price]').cloneNode(true);
const productATC = document.querySelector('form .product-form__item--submit').cloneNode(true);

const productData = {
  productImg,
  productTitle,
  productOriginalPrice,
  productSalePrice,
  productATC
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
};

export default () => {
  setup();
  init();
  console.log(ID);
};
