import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';
import { pollerLite, observeDOM } from './helpers/utils';
import progressBar from './components/progressBar';
import data from './data/data';

const { ID } = shared;

const removeElementFromDOM = (selector) => {
  if (document.querySelector(selector)) {
    document.querySelectorAll(selector).forEach((el) => el.remove());
  }
};

const init = () => {
  const thresholdPrice = 300;
  const freeShippingThreshold = 200;
  const getFivePercentThreshold = 250;

  const basketTotalPriceCtrl = () => document.querySelector('.slidecart-subtotal');

  pollerLite([() => basketTotalPriceCtrl()], () => {
    const match = basketTotalPriceCtrl().textContent.match(/\d+\.\d+/);
    const basketTotalPrice = match ? +match[0] : 0;

    const progressWidth = (basketTotalPrice / thresholdPrice) * 100;

    const status =
      basketTotalPrice < freeShippingThreshold
        ? 'Get Free Shipping'
        : basketTotalPrice >= freeShippingThreshold && basketTotalPrice < getFivePercentThreshold
        ? 'Get 5% OFF'
        : basketTotalPrice >= getFivePercentThreshold && basketTotalPrice < thresholdPrice
        ? 'Get 10% OFF'
        : 'full';

    const extraPrice =
      basketTotalPrice < freeShippingThreshold
        ? (freeShippingThreshold - basketTotalPrice).toFixed(2)
        : basketTotalPrice < getFivePercentThreshold
        ? (getFivePercentThreshold - basketTotalPrice).toFixed(2)
        : basketTotalPrice < thresholdPrice
        ? (thresholdPrice - basketTotalPrice).toFixed(2)
        : 0;

    const shippingInfoHtml = `
    <div class='${ID}__shippingInfo'>
    <div class="${ID}__discountProgressCard">
    ${progressBar(ID, progressWidth.toFixed(2), status, extraPrice, data)}
    </div>
    </div>
    `;

    const anchorPoint = document.querySelector('#slidecarthq .items');
    removeElementFromDOM(`.${ID}__shippingInfo`);
    anchorPoint?.insertAdjacentHTML('beforebegin', shippingInfoHtml);
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest('a[aria-controls="CartDrawer"]')) {
      const cartElement = document.querySelector('#slidecarthq .slidecarthq');
      const isCartItems = cartElement.querySelector('.items')?.childElementCount;
      pollerLite([() => cartElement.classList.contains('open') && isCartItems], () => {
        init();
      });
    }
  });

  if (VARIATION === 'Control') {
    return;
  }

  observeDOM('#slidecarthq header .cart-count', () => {
    const cartElement = document.querySelector('#slidecarthq .slidecarthq');
    const isCartItems = cartElement?.querySelector('.items')?.childElementCount;
    if (isCartItems) {
      init();
    } else {
      removeElementFromDOM(`.${ID}__shippingInfo`);
    }
  });
};
