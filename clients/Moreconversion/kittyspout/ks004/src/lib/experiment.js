import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import progressBar from './components/progressBar';

const { ID, VARIATION } = shared;

const init = () => {
  const thresholdPrice = 85;
  const basketTotalPriceCtrl =
    document.querySelector('.rebuy-cart__flyout-subtotal-amount')?.textContent ||
    document.querySelector('.drawer__inner .drawer__footer .cart__item-sub .money')?.textContent;

  const match = basketTotalPriceCtrl.match(/\d+\.\d+/);
  const basketTotalPrice = match ? +match[0] : 0;

  const isThresholdMet = basketTotalPrice < thresholdPrice;
  if (isThresholdMet) {
    //fireEvent('user meets the threshold');
  }
  console.log(basketTotalPrice);

  const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
  const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

  const shippingInfoHtml = `
    <div class='${ID}__shippingInfo'>
      <div class="${ID}__discountProgressCard">
        ${progressBar(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet)}
      </div>
    </div>
  `;

  const anchorPoint =
    document.querySelector('.rebuy-cart__flyout-content.has-items') ||
    document.querySelector('#CartDrawer.drawer--is-open .drawer__inner');

  if (document.querySelector(`.${ID}__shippingInfo`)) {
    document.querySelector(`.${ID}__shippingInfo`).remove();
  }

  anchorPoint.insertAdjacentHTML('afterbegin', shippingInfoHtml);
};

export default () => {
  setup();
  console.log(ID);

  const configObj = {
    childList: true,
    subtree: false,
    attributes: false
  };
  observeDOM(
    'body',
    () => {
      if (document.querySelector('.rebuy-cart__flyout-content.has-items')) {
        init();
      }
      if (document.querySelector('#CartDrawer.drawer--is-open:not(.is-empty)')) {
        init();
      }
      if (document.querySelector('#CartDrawer.drawer--is-open.is-empty')) {
        document.querySelector(`#CartDrawer .${ID}__shippingInfo`)?.remove();
      }
      if (document.querySelector('.rebuy-cart__flyout-content.no-items')) {
        document.querySelector(`.rebuy-cart__flyout-content .${ID}__shippingInfo`)?.remove();
      }
    },
    configObj
  );
};
