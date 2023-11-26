import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM, observeIntersection } from './helpers/utils';
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
  adjust: '.vf-button, .vf-container {bottom: 90px !important; right: 16px !important;}',
  reset: '.vf-button, .vf-container {bottom: 25px !important; right: 16px !important;}',
  hide: '.vf-button, .vf-container {display:none !important;}',
  show: '.vf-button, .vf-container {display:block !important;}'
};

const chatWidgetDisplay = (display = 'show') => {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(cssModObj[display]);

  window.repApp.$$.root.adoptedStyleSheets = [styleSheet];
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

        chatWidgetDisplay('reset');

        backToTop.classList.add('move-up');
        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
        chatWidgetDisplay('adjust');

        backToTop.classList.add('move-up');
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', stickyATC(ID, productData));

  observeIntersection(intersectionAnchor, 0, handleIntersection);

  handleATC(ID, intersectionAnchor);
  observeDOM('.quick-cart__wrapper', (mutation) => {
    if (mutation.target.classList.contains('active')) {
      chatWidgetDisplay('hide');
      return;
    }
    setTimeout(() => {
      chatWidgetDisplay('show');
      if (document.querySelector(`.${ID}__show`)) {
        chatWidgetDisplay('adjust');
      }
    }, 300);
  });
};

export default () => {
  setup();
  init();
};
