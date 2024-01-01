import setup from './services/setup';
import shared from './shared/shared';
import { shippingIcon } from './assets/svg';

const { ID } = shared;

const init = () => {
  const anchorPoint = document.querySelector('.product-page--submit-action');

  const htmlStr = `<div class='${ID}__shippingNotice'>
    <span class='${ID}__shippingNotice-icon'>
      ${shippingIcon}
    </span>
    <div class='${ID}__shippingNotice-textWrapper'>
      <span class='${ID}__shippingNotice-text'>1-3 Day Delivery</span>
      <span class='${ID}__shippingNotice-subtext'>(Tuesday, January 4th To New York)</span>
    </div>
  </div>`;

  anchorPoint.insertAdjacentHTML('afterend', htmlStr);
};

export default () => {
  setup(); //use if needed
  init();
};
