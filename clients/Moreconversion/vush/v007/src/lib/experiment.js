import setup from './services/setup';
import { observeDOM } from './helpers/utils';

export default () => {
  setup();

  observeDOM('[data-js-cart-count]', () => {
    if (!document.querySelector('.quick-cart__wrapper').classList.contains('active')) {
      document.querySelector('[data-js-cart-count]').click();
    }
  });
};
