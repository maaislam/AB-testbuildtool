import { observeDOM } from '../../../../../../globalUtil/util';

import guestEmailInput from './components/emailField';
import submitButton from './components/formSubmitBtn';
import titleLoginHeader from './components/titleLogin';
import blurHandler from './helpers/blurHandler';
import clickHandler from './helpers/clickHandler';
import { isCheckoutPage } from './helpers/pageTypes';
import { getCookie } from './helpers/setCookie';
import sideCartBtnHandler from './helpers/sideCartBtnHandler';
import submitEmail from './helpers/submitEmail';
import isEmailValid from './helpers/validateEmail';
import shared from './shared/shared';

const { ID } = shared;

const init = async (orderEmail) => {
  document.body.classList.add(`${ID}_body_variation`);
  //console.log('target matched');
  sideCartBtnHandler();
  // email address input for checkout page
  if (isCheckoutPage) {
    if (document.querySelector('[data-tau="shipping_address_selector"]')) {
      document.querySelector(`body`).classList.add(`${ID}__hide--btn`);
    }

    const obj = JSON.parse(document.querySelector('#checkout-main').getAttribute('data-customer'));
    if (!obj.registeredUser) {
      const selectorField = document.querySelector(`[data-ref="fieldset"]`);

      // document
      //   .querySelector(`[data-ref="shippingStep"] .b-checkout_step-controls`)
      //   .classList.add(`${ID}__hide`);

      // document
      //   .querySelector(`.b-checkout_step-content`)
      //   .insertAdjacentHTML('beforebegin', titleLoginHeader(ID));
      selectorField.insertAdjacentHTML('beforebegin', titleLoginHeader(ID));
      selectorField.insertAdjacentHTML('beforebegin', guestEmailInput(ID));

      if (orderEmail) {
        document.querySelector(`.${ID}_login_guestEmail`).value = orderEmail;
      }
      document
        .querySelector('[data-ref="shippingStep"] .b-checkout_step-controls')
        .classList.add(`${ID}__hide`);
      document
        .querySelector(`.b-checkout_step-section`)
        .insertAdjacentHTML('beforeend', submitButton(ID));

      /**
       * *task for karima*
       * optimise the clicks so we only need 1 click handler
       */

      const inputSelector = document.querySelector(`.${ID}_login_guestEmail`);
      document.querySelector(`.${ID}_b-checkout_step-controls`)?.addEventListener('click', () => {
        clickHandler(ID, isEmailValid, inputSelector.value, submitEmail);
      });

      inputSelector.addEventListener('blur', () => {
        blurHandler(ID, inputSelector, isEmailValid);
      });
    }
  }

  //changing checkout url in cart page
};

export default () => {
  /**
   * *task for karima*
   * go through the code here and see where we can optimise
   * clean up code here especially mutation callbacks
   */

  const orderEmail = getCookie('emailStored');
  setTimeout(() => {
    init(orderEmail);
  }, 500);

  const configs = {
    attributes: true,
  };

  const targetClass = isCheckoutPage ? 'm-hide' : 'm-opened';
  const mutationCallback = (mutation) => {
    if (mutation.attributeName === 'class') {
      if (mutation.target.classList.contains(targetClass)) {
        setTimeout(() => {
          init();
        }, 1500);
      }
    }
  };

  const mutationCallbackBtn = (mutation) => {
    if (mutation.attributeName === 'class') {
      if (mutation.target.classList.contains(targetClass)) {
        document.querySelector(`body`).classList.remove(`${ID}__hide--btn`);
      } else {
        document.querySelector(`body`).classList.add(`${ID}__hide--btn`);
      }
    }
  };

  if (isCheckoutPage) {
    if (document.querySelector('[data-tau="shipping_address_selector"]')) {
      observeDOM(`[data-tau="shipping_address_selector"]`, mutationCallbackBtn, configs);
    }
  }

  if (isCheckoutPage) {
    const secondMutCallback = () => {
      //console.log(mutation);
      setTimeout(() => {
        const orderEmail = getCookie('emailStored');
        init(orderEmail);
      }, 1500);
    };

    observeDOM(`[data-ref="fieldset"]`, secondMutCallback, {
      childlist: true,
      subtree: true,
      attributes: true,
    });

    document.body.addEventListener('click', (e) => {
      const target = e.target;

      const targetMatched = (desiredMatch) =>
        target.matches(desiredMatch) || target.closest(desiredMatch);

      if (
        targetMatched('[data-tau="edit_address"]') ||
        targetMatched('[data-tau="add_new_address"]') ||
        targetMatched('[data-ref="controlSection"]>button') ||
        targetMatched('[data-ref="editStepBtn"]')
      ) {
        setTimeout(() => {
          const orderEmail = getCookie('emailStored');
          init(orderEmail);
        }, 500);
      }
    });
    return;
  }
  observeDOM(`.m-minicart`, sideCartBtnHandler, {
    childlist: true,
    subtree: true,
    attributes: true,
    characterData: true,
  });

  observeDOM(`.b-minicart_panel-container`, mutationCallback, configs);
};
