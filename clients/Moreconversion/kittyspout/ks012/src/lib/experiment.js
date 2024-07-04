import setup from './services/setup';
import shared from './shared/shared';
import { getCartCallback, getLocalThreshold, pollerLite } from './helpers/utils';
import progressBar from './components/progressBar';

const { ID } = shared;

const init = () => {
  const DOLLAR_THRESHOLD = 125;
  const { formattedAmount, roundedAmount } = getLocalThreshold(DOLLAR_THRESHOLD);

  getCartCallback((cartData) => {
    const subTotal = cartData.total_price / 100;

    //console.log('basketTotalPrice: ', basketTotalPrice);
    const isThresholdMet = subTotal < roundedAmount;

    const progressWidth = (subTotal / roundedAmount) * 100;
    const deductedPrice = isThresholdMet && roundedAmount - subTotal;

    const shippingInfoHtml = `
      <div class='${ID}__shippingInfo'>
        <div class="${ID}__discountProgressCard">
          ${progressBar(
            ID,
            progressWidth.toFixed(2),
            deductedPrice,
            isThresholdMet,
            formattedAmount
          )}
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

    anchorPoint?.insertAdjacentHTML('afterbegin', shippingInfoHtml);
  });
};

export default () => {
  setup();
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
