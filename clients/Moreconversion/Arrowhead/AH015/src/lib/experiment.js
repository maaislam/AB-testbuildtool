import shippingProtection from './components/shippingProtection';
import { pollerLite } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const footerElem = document.querySelector('.cart__footer-page');
  const attachPoint = document.querySelector('.cart__note');
  const routeHtml = '<div class="route-div" desktop-align="center"></div>';

  footerElem.insertAdjacentHTML('beforeend', routeHtml);

  pollerLite(['route-protect-widget'], () => {
    const routeWidgetElem = document.querySelector('route-protect-widget');
    const price = routeWidgetElem.getAttribute('quote');

    if (document.querySelector(`.${ID}__shippingProtectionWrapper`)) return;
    attachPoint.insertAdjacentHTML('beforebegin', shippingProtection(ID, price));
  });
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__switchLabel`)) {
      window.Route.Protection.toggle();
    }
  });
};
