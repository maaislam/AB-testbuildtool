import { pollerLite } from '../../../../../../globalUtil/util';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  console.log('in variation 377');

  //if (!document.querySelector('[data-gateway-name="credit_card"] .radio__input input').checked) {
  //document.querySelector('[data-subfields-for-gateway=\'22797156422\']').classList.add('hidden');
  //} else if (!document.querySelector('[data-gateway-name="offsite_v2"] .radio__input input').checked) {
  //document.querySelector('[data-subfields-for-gateway=\'81648550155\']').classList.add('hidden');
  //} else if (!document.querySelector('[data-gateway-name="amazon_pay"] .radio__input input').checked) {
  //document.querySelector('[data-subfields-for-gateway=\'23299227718\']').classList.add('hidden');
  //}

  document.querySelectorAll('.section--payment-method .radio-wrapper .radio__input input').forEach((item) => {
  if (!item.checked) {
  const itemNum = item.getAttribute('value');
  document.querySelector(`[data-subfields-for-gateway='${itemNum}']`).classList.add('hidden');
  }
  });

  document.querySelectorAll('.section--payment-method .radio-wrapper .radio__input input').forEach((item) => {
  if (item.checked) {
  const itemNum = item.getAttribute('value');
  document.querySelector(`[data-subfields-for-gateway='${itemNum}']`).classList.remove('hidden');
  }
  });

  document.querySelector('[data-gateway-name="credit_card"]').insertAdjacentElement('beforebegin', document.querySelector('[data-gateway-name=\'paypal\']'));
  document.querySelector('[data-gateway-name="credit_card"]').insertAdjacentElement('beforebegin', document.querySelector('[data-subfields-for-gateway=\'22797123654\']'));
  if (!sessionStorage.getItem('payment-paypal')) {
    console.log('selecting paypal');
    document.querySelector('[data-gateway-name=\'paypal\'] .radio__input input').click();
  }
};

export default () => {
window.onload = () => {
  //sessionStorage.removeItem('payment-paypal');
  if (sessionStorage.getItem('payment-selected')) {
    pollerLite(['.section--payment-method .section__content'], () => {
      document.querySelectorAll('.section--payment-method .radio-wrapper .radio__input input').forEach((item) => {
        if (item.closest('.radio-wrapper').getAttribute('data-gateway-name') === sessionStorage.getItem('payment-selected')) {
          item.click();
        }
        });
    });
  }
};

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    const targetMatched = (desiredMatch) =>
      target.matches(desiredMatch) || target.closest(desiredMatch);

    if (
      targetMatched('[data-gateway-name="credit_card"] .radio__label label') ||
      targetMatched('[data-gateway-name="credit_card"] .radio__input input') ||
      targetMatched('[data-gateway-name="amazon_pay"] .radio__label label') ||
      targetMatched('[data-gateway-name="amazon_pay"] .radio__input input') ||
      targetMatched('[data-gateway-name="offsite_v2"] .radio__label label') ||
      targetMatched('[data-gateway-name="offsite_v2"] .radio__input input')
    ) {
    console.log('paypal not clicked', target.closest('.radio-wrapper').getAttribute('data-gateway-name'));
    sessionStorage.setItem('payment-paypal', 'false');
    sessionStorage.setItem('payment-selected', `${target.closest('.radio-wrapper').getAttribute('data-gateway-name')}`);
    } else if (targetMatched('[data-gateway-name="paypal"] .radio__input input') ||
    targetMatched('[data-gateway-name="paypal"] .radio__label label') || targetMatched('.step__footer__previous-link')) {
      sessionStorage.removeItem('payment-paypal');
      sessionStorage.removeItem('payment-selected');
    }
  });
};
