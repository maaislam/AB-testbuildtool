import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { freeShippingIcon } from './assets/svg';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.body;

  if (VARIATION === '1') {
    pollerLite(['.essential_countdown_annoucement_bar_wrapper'], () => {
      const announcementBar = document.querySelector('.essential_countdown_annoucement_bar_wrapper');
      announcementBar.classList.add(`${ID}__announcementBar`);
    }, 20000);
  }

  const freeShippingHtml = `<div class='${ID}__freeShipping'>
        <span>${freeShippingIcon}</span>
        <div class='free-shipping-text'><b>Free Shipping</b> on all orders above $125</div>
      </div>`;

  if (!document.querySelector(`.${ID}__freeShipping`)) {
    attachPoint.insertAdjacentHTML('afterbegin', freeShippingHtml);
  }
};

export default () => {
  setup();
  init();
};
