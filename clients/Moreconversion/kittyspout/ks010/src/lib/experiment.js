/*eslint-disable max-len */
import { getCartVal, observeDOM, pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const { rate } = window.Shopify.currency;
  const { country } = window.Shopify;
  const currencySymbol = window.LocaleBar.data.currenciesByCountryCode[country].symbol;
  const validIds = [44927403327708, 44927405883612, 44927412601052, 44927415615708];

  getCartVal().then((data) => {
    const isIdAvailable = data.items.some((item) => validIds.includes(item.id));

    if (!isIdAvailable) return;

    const anchorPoint = document.querySelector('.rebuy-cart__flyout-subtotal');
    const anchorPoint2 = document.querySelector('.cart__item-sub.cart__item-row:not(.cart__discounts)');
    const totalValue = data.total_price / 100;
    const shippingValue = VARIATION === '1' ? 7.99 : VARIATION === '2' ? 15.99 : 0;
    const shippingRate = shippingValue * rate;
    const shippingTotal = country === 'US' ? (shippingRate / 100) * 100 : Math.ceil((shippingRate / 100) * 100);

    const grandTotal = shippingTotal + totalValue;

    const htmlStr = `
    <div class='${ID}__row'>
      <div class='${ID}__shippingTextRow'>
        <span class='${ID}__shippingText'>Shipping Charge</span>
        <span class='${ID}__shippingValue'>${currencySymbol}${shippingTotal.toFixed(2)}</span>
      </div>
      <div class='${ID}__grandTotalRow'>
        <span class='${ID}__shippingText'>Total</span>
        <span class='${ID}__shippingValue'>${currencySymbol}${grandTotal.toFixed(2)}</span>
      </div>
    </div>`;

    if (document.querySelector(`.${ID}__row`)) {
      document.querySelectorAll(`.${ID}__row`).forEach((el) => el.remove());
    }
    anchorPoint?.insertAdjacentHTML('afterend', htmlStr);
    anchorPoint2?.insertAdjacentHTML('afterend', htmlStr);
  });
};

export default () => {
  setup();

  const { pathname } = window.location;
  const isMetalBundles = pathname.includes('/products/metalbundles') && !pathname.includes('/products/metalbundles2') && !pathname.includes('/products/metalbundles3');
  const isKittyspoutKit = pathname.includes('/products/the-kittyspout-kit') && !pathname.includes('/products/the-kittyspout-kit4') && !pathname.includes('/products/the-kittyspout-kit5');
  if (isMetalBundles && VARIATION === '1') {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles2';
  } else if (isMetalBundles && VARIATION === '2') {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/metalbundles3';
  } else if (isKittyspoutKit && VARIATION === '1') {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/the-kittyspout-kit4';
  } else if (isKittyspoutKit && VARIATION === '2') {
    document.body.style = 'display: none';
    window.location.href = 'https://www.kittyspout.com/products/the-kittyspout-kit5';
  }

  pollerLite([() => typeof window.LocaleBar === 'object'], () => {
    init();

    //fire on form submit
    document.addEventListener('submit', (e) => {
      if (e.target.closest('form')) {
        pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
          init();
        });
      }
    });

    document.addEventListener('rebuy:cart.change', () => {
      pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
        init();
      });
    });

    const configObj = {
      childList: true,
      subtree: false,
      attributes: true,
      characterData: true,
      characterDataOldValue: true
    };
    observeDOM(
      'body',
      () => {
        init();
        pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
          init();
        });
      },
      configObj
    );
  });
};
