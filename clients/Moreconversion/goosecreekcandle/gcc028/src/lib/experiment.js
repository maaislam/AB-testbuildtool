import { observeDOM } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const afterpayLinkElem = document.querySelector('#afterpay-info a');

  if (!afterpayLinkElem) return;

  const paymentUrlsHTML = `, <a class='${ID}__klarnaTermsUrl' target="_blank" href="https://www.klarna.com/us/legal/">Klarna</a>
  or <a target="_blank" href="https://www.paylaterapp.com/terms-conditions">PayLater</a>`;

  if (!document.querySelector(`.${ID}__klarnaTermsUrl`)) {
    afterpayLinkElem.insertAdjacentHTML('afterend', paymentUrlsHTML);
  }
};

export default () => {
  setup();

  init();

  observeDOM(['.upez--inner-drawer-container'], init);
};
