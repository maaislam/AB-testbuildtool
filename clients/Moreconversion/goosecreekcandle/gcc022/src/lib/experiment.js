import setup from './services/setup';
import shared, { VARIATION } from './shared/shared';
import { pollerLite } from './helpers/utils';
import progressBar from './components/progressBar';
import data from './data/data';

const { ID } = shared;

const init = () => {
  const thresholdPrice = 100;
  const basketTotalPriceCtrl = () =>
    document.querySelector('.rebuy-cart__flyout-subtotal-amount') ||
    document.querySelector('.drawer__inner .drawer__footer .cart__item-sub .money');

  //console.log('basketTotalPriceCtrl: ', basketTotalPriceCtrl());

  pollerLite([() => basketTotalPriceCtrl()], () => {
    const match = basketTotalPriceCtrl().textContent.match(/\d+\.\d+/);
    const basketTotalPrice = match ? +match[0] : 0;

    //console.log('basketTotalPrice: ', basketTotalPrice);
    const isThresholdMet = basketTotalPrice < thresholdPrice;

    const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
    const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

    const shippingInfoHtml = `
      <div class='${ID}__shippingInfo'>
        <div class="${ID}__discountProgressCard">
          ${progressBar(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet, data)}
        </div>
      </div>
    `;

    const anchorPoint =
      document.querySelector('.rebuy-cart__flyout-content.has-items') ||
      document.querySelector('#CartDrawer.drawer--is-open .drawer__inner') ||
      document.querySelector('.drawer__inner');

    if (document.querySelector(`.${ID}__shippingInfo`)) {
      document.querySelectorAll(`.${ID}__shippingInfo`).forEach((el) => el.remove());
    }
    //console.log('🚀 ~ pollerLite ~ anchorPoint:', anchorPoint);

    //anchorPoint2?.insertAdjacentHTML('afterbegin', shippingInfoHtml);
    anchorPoint?.insertAdjacentHTML('afterbegin', shippingInfoHtml);
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
    if (document.querySelector('#CartDrawer.drawer--is-open.is-empty')) {
      document.querySelector(`#CartDrawer .${ID}__shippingInfo`)?.remove();
    }
    if (document.querySelector('.rebuy-cart__flyout-content.no-items')) {
      document.querySelector(`.rebuy-cart__flyout-content .${ID}__shippingInfo`)?.remove();
    }
  });
};
