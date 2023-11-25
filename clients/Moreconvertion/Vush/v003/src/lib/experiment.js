import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';
import stickyATC from './components/stickyATC';
import handleATC from './handlers/handleATC';

const { ID } = shared;

const intersectionAnchor = document.querySelector('.product-form__cart-submit');
const anchorPoint = document.body;

const productImg = document
  .querySelector('ul.product-thumbnails__items .product-thumbnails__item img')
  .getAttribute('src');
const productTitle = document.querySelector('.product__title').textContent.trim();
const productOriginalPrice = document.querySelector('[data-compare-price]').cloneNode(true);
const productSalePrice = document.querySelector('[data-price]').cloneNode(true);

const productData = {
  productImg,
  productTitle,
  productOriginalPrice,
  productSalePrice
};
//'body { background-color: lightblue; }'
const cssModObj = {
  adjust: '.vf-container {bottom: 90px !important; right: 16px !important;}',
  reset: '.vf-container {bottom: 25px !important; right: 16px !important;}'
};

const init = () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATCContainer`);
      const backToTop = document.querySelector('.back-to-top[data-back-to-top]');
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        backToTop.classList.remove('move-up');

        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(cssModObj.reset);

        window.repApp.$$.root.adoptedStyleSheets = [styleSheet];

        backToTop.classList.add('move-up');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
        const styleSheet = new CSSStyleSheet();
        styleSheet.replaceSync(cssModObj.adjust);

        window.repApp.$$.root.adoptedStyleSheets = [styleSheet];

        backToTop.classList.add('move-up');
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', stickyATC(ID, productData));

  observeIntersection(intersectionAnchor, 0, handleIntersection);

  handleATC(ID, intersectionAnchor);

  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(
    '.vf-button { bottom: 70px !important; } .vf-container { bottom: 140px !important; }'
  );

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
