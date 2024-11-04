import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { progressBar } from './components/progressBar';
import messageWrapper from './components/messageWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const thresholdPrice = 75;
  const basketTotalPriceCtrl = () => document.querySelector('.rebuy-cart__flyout-subtotal-amount');
  const mainWrapper = document.querySelector('#app');

  pollerLite([() => basketTotalPriceCtrl()], () => {
    const match = basketTotalPriceCtrl().textContent.match(/\d+\.\d+/);
    const basketTotalPrice = match ? +match[0] : 0;

    const isThresholdMet = basketTotalPrice < thresholdPrice;

    const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
    const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

    const shippingInfoHtml = `
      <div class='${ID}__shippingInfo'>
        <div class="${ID}__discountProgressCard">
          ${progressBar(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet)}
        </div>
      </div>
    `;

    const anchorPoint = document.querySelector('.rebuy-cart__flyout-content.has-items');

    if (document.querySelector(`.${ID}__shippingInfo`)) {
      document.querySelectorAll(`.${ID}__shippingInfo`).forEach((el) => el.remove());
    }

    if (document.querySelector(`.${ID}__announcement-bar`)) {
      document.querySelectorAll(`.${ID}__announcement-bar`).forEach((el) => el.remove());
    }

    anchorPoint?.insertAdjacentHTML('afterbegin', shippingInfoHtml);
    if (document.querySelector(`.${ID}__shippingInfo`)) {
      mainWrapper?.insertAdjacentHTML(
        'afterbegin',
        messageWrapper(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet, VARIATION)
      );
    }
  });
};

export default () => {
  setup();

  if (VARIATION === 'Control') {
    return;
  }

  init();

  document.addEventListener('rebuy:cart.change', () => {
    init();
    pollerLite(['.rebuy-cart__flyout-content.has-items'], () => {
      init();
    });
    if (document.querySelector('.rebuy-cart__flyout-content.no-items')) {
      document.querySelector(`.rebuy-cart__flyout-content .${ID}__shippingInfo`)?.remove();
      document.querySelector(`.${ID}__announcement-bar`)?.remove();
    }
  });
};
