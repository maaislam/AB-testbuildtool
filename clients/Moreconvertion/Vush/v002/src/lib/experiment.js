import { observeDOM } from './helpers/utils';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;
const cssModObj = {
  hide: '.vf-button, .vf-container {display:none !important;}',
  show: '.vf-button, .vf-container {display:block !important;}'
};

const chatWidgetDisplay = (display = 'show') => {
  const styleSheet = new CSSStyleSheet();
  styleSheet.replaceSync(cssModObj[display]);

  window.repApp.$$.root.adoptedStyleSheets = [styleSheet];
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
  const checkoutBtn = document.querySelector('.quick-cart__container');
  checkoutBtn.classList.add(`${ID}__cartContainer`);
  observeDOM('.quick-cart__wrapper', (mutation) => {
    if (mutation.target.classList.contains('active')) {
      chatWidgetDisplay('hide');
      return;
    }
    setTimeout(() => {
      chatWidgetDisplay('show');
    }, 300);
  });

  observeDOM('[data-js-cart-count]', () => {
    const isCartOpen = document.querySelector('.quick-cart__wrapper.active');
    if (isCartOpen) return;
    document.querySelector('.header__icon-touch').click();
  });
};
