import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const freeShippingThreshold = 100;
const tooltipText = 'tooltip text';

const init = () => {
  //your custom code goes here
  pollerLite(['.cart-drawer.active span[data-cart-total]'], () => {
    const cartTotal = parseFloat(
      document.querySelector('.cart-drawer.active span[data-cart-total]').innerText.replace('$', '')
    );

    const allItemsWrapper = document.querySelector(
      '.cart-drawer section[data-cart-drawer-line-items]'
    );

    if (cartTotal < freeShippingThreshold) {
      document.querySelector(`.${ID}__wrapper`).remove();
      return;
    }

    if (!document.querySelector(`.${ID}__wrapper`)) {
      allItemsWrapper.insertAdjacentHTML('afterend', wrapper(ID, tooltipText));
    }
  });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', () => {
    init(); //
  });
};
