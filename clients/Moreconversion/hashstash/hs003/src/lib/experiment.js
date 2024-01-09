import setup from './services/setup';

import shared from './shared/shared';
import annoucementBar from './components/annoucementBar';
import progressBar from './components/progressBar';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const thresholdPrice = 99;
  const basketTotalPriceCtrl = document.querySelector(
    '[slot="footer"] .h-stack span.h5:nth-child(2)'
  ).textContent;
  const match = basketTotalPriceCtrl.match(/\d+\.\d+/);
  const basketTotalPrice = match ? +match[0] : 0;

  const isThresholdMet = basketTotalPrice < thresholdPrice;
  if (isThresholdMet) {
    //fireEvent('user meets the threshold');
  }

  const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
  const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

  const shippingInfoHtml = `
    <div class='${ID}__shippingInfo'>
      ${annoucementBar(ID)}
      <div class="${ID}__discountProgressCard">
        ${progressBar(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet)}
      </div>
    </div>
  `;

  const anchorPoint = document.querySelector('.cart-drawer__top');

  if (document.querySelector(`.${ID}__shippingInfo`)) {
    document.querySelector(`.${ID}__shippingInfo`).remove();
  }

  anchorPoint.insertAdjacentHTML('afterend', shippingInfoHtml);

  if (basketTotalPrice < 65) {
    document.querySelector('.cart-drawer').classList.add(`${ID}__below65`);
  } else {
    document.querySelector('.cart-drawer').classList.remove(`${ID}__below65`);
  }
};

export default () => {
  setup();
  init();

  observeDOM('.count-bubble', init);
};
