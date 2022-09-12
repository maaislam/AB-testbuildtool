///*eslint-disable no-shadow */
///*eslint-disable max-len */
//import { observeDOM } from '../../../../../../globalUtil/util';

//import guestEmailInput from './components/emailField';
//import submitButton from './components/formSubmitBtn';
//import titleLoginHeader from './components/titleLogin';
//import blurHandler from './helpers/blurHandler';
//import clickHandler from './helpers/clickHandler';
//import { isCartPage, isCheckoutPage } from './helpers/pageTypes';
//import { getCookie } from './helpers/setCookie';
//import sideCartBtnHandler from './helpers/sideCartBtnHandler';
//import submitEmail from './helpers/submitEmail';
//import isEmailValid from './helpers/validateEmail';
//import shared from './shared/shared';

//const { ID } = shared;

//const init = async (orderEmail) => {
//document.body.classList.add(`${ID}_body_variation`);
//sideCartBtnHandler();
//if (isCartPage) {
//sideCartBtnHandler(true);
//}
////email address input for checkout page
//if (isCheckoutPage) {
//if (document.querySelector('[data-tau="shipping_address_selector"]')) {
//document.querySelector('body').classList.add(`${ID}__hide--btn`);
//}

//const obj = JSON.parse(document.querySelector('#checkout-main').getAttribute('data-customer'));
//if (!obj.registeredUser) {
//document.body.classList.add(`${ID}_hide-original-btn`);

//const selectorField = document.querySelector('[data-ref="fieldset"]');

//selectorField.insertAdjacentHTML('beforebegin', titleLoginHeader(ID));
//selectorField.insertAdjacentHTML('beforebegin', guestEmailInput(ID));

//if (orderEmail) {
//document.querySelector(`.${ID}_login_guestEmail`).value = orderEmail;
//}
////document
////.querySelector('[data-ref="shippingStep"] .b-checkout_step-controls')
////.classList.add(`${ID}__hide`);
//document
//.querySelector('.b-checkout_step-section')
//.insertAdjacentHTML('beforeend', submitButton(ID));

///**
//**task for karima*
//*optimise the clicks so we only need 1 click handler
//*/

//const inputSelector = document.querySelector(`.${ID}_login_guestEmail`);
//document.querySelector(`.${ID}_b-checkout_step-controls`)?.addEventListener('click', () => {
//clickHandler(ID, isEmailValid, inputSelector.value, submitEmail);
//});

//inputSelector.addEventListener('blur', () => {
//blurHandler(ID, inputSelector, isEmailValid);
//});
//}
//}
////document
////.querySelector('[data-ref="shippingStep"] .b-checkout_step-controls')
////.classList.add(`${ID}__hide`);

////changing checkout url in cart page
//};

//export default () => {
//console.log('in test');
//const orderEmail = getCookie('emailStored');
//setTimeout(() => {
//init(orderEmail);
//}, 500);

//if (isCheckoutPage) {
//const secondMutCallback = () => {
//setTimeout(() => {
//const orderEmail = getCookie('emailStored');
//init(orderEmail);
//}, 500);
//};

//observeDOM('[data-ref="fieldset"]', secondMutCallback, {
//childlist: true,
//subtree: true,
//attributes: true
//});

//document.body.addEventListener('click', (e) => {
//const { target } = e;

//const targetMatched = (desiredMatch) => target.matches(desiredMatch) || target.closest(desiredMatch);

//if (
//targetMatched('[data-tau="edit_address"]') ||
//targetMatched('[data-tau="add_new_address"]') ||
//targetMatched('[data-ref="controlSection"]>button') ||
//targetMatched('[data-ref="editStepBtn"]')
//) {
//setTimeout(() => {
//const orderEmail = getCookie('emailStored');
//init(orderEmail);
//}, 500);
//}
//});
//return;
//}

//const minicartControl = () => {
//sideCartBtnHandler();
//if (isCartPage) {
//sideCartBtnHandler(true);
//}
//};
//if (isCheckoutPage) {
//observeDOM('.b-minicart', minicartControl, {
//attributes: true
//});
//}

//observeDOM('.b-minicart_icon', minicartControl, {
//attributes: true
//});

////if (isCartPage) {
////observeDOM('.b-coupon_form-content_inner.b-form', minicartControl, {
////attributes: true
////});
////}
//};

import { observeDOM, pollerLite } from '../../../../../../globalUtil/util';

import guestEmailInput from './components/emailField';
import submitButton from './components/formSubmitBtn';
import loginLoader from './components/loginLoader';
import titleLoginHeader from './components/titleLogin';
import blurHandler from './helpers/blurHandler';
import clickHandler from './helpers/clickHandler';
import { isCheckoutPage, isLoginPage } from './helpers/pageTypes';
import { getCookie } from './helpers/setCookie';
import submitEmail from './helpers/submitEmail';
import isEmailValid from './helpers/validateEmail';
import shared from './shared/shared';

const { ID } = shared;

const init = async (orderEmail) => {
  document.body.classList.add(`${ID}_body_variation`);
  //sideCartBtnHandler();
  //if (isCartPage) {
  //sideCartBtnHandler(true);
  //}
  //email address input for checkout page
  if (isCheckoutPage) {
    if (document.querySelector('[data-tau="shipping_address_selector"]')) {
      document.querySelector('body').classList.add(`${ID}__hide--btn`);
    }

    const obj = JSON.parse(document.querySelector('#checkout-main').getAttribute('data-customer'));
    if (!obj.registeredUser) {
      document.body.classList.add(`${ID}_hide-original-btn`);
      const selectorField = document.querySelector('[data-ref="fieldset"]');

      selectorField.insertAdjacentHTML('beforebegin', titleLoginHeader(ID));
      selectorField.insertAdjacentHTML('beforebegin', guestEmailInput(ID));

      if (orderEmail) {
        document.querySelector(`.${ID}_login_guestEmail`).value = orderEmail;
      }
      //document
      //.querySelector('[data-ref="shippingStep"] .b-checkout_step-controls')
      //.classList.add(`${ID}__hide`);
      document
        .querySelector('.b-checkout_step-section')
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
        //console.log('blurrr');

        blurHandler(ID, inputSelector, isEmailValid);
      });

      pollerLite([() => `.${ID}__login--text`], () => {
        console.log('found login btn');
        document.querySelector(`.${ID}__login--text`).addEventListener('click', () => {
          sessionStorage.setItem('fromShipping', 'true');
        });
      });
    }
  }

  pollerLite(['a[data-event-click="proceedToCheckout"]'], () => {
    console.log('polllllllll');
    document.querySelectorAll('a[data-event-click="proceedToCheckout"]').forEach((item, key) => {
      item.addEventListener('click', (e) => {
        sessionStorage.removeItem('fromShipping');
        console.log('clicked after shipping');
      });
    });
  });

  //changing checkout url in cart page
};

export default () => {
  /**
   * *task for karima*
   * go through the code here and see where we can optimise
   * clean up code here especially mutation callbacks
   */

  let orderEmail = getCookie('emailStored');
  setTimeout(() => {
    init(orderEmail);
  }, 500);

  if (isCheckoutPage) {
    const secondMutCallback = () => {
      //console.log('mutation2');
      setTimeout(() => {
        orderEmail = getCookie('emailStored');
        //console.log('neww', orderEmail);
        if (orderEmail.value !== null) {
          init(orderEmail);
        }
      }, 500);
    };

    observeDOM('[data-ref="fieldset"]', secondMutCallback, {
      childList: true,
      subtree: true,
      attributes: true
    });

    document.body.addEventListener('click', (e) => {
      const { target } = e;

      const targetMatched = (desiredMatch) =>
        target.matches(desiredMatch) || target.closest(desiredMatch);

      if (
        targetMatched('[data-tau="edit_address"]') ||
        targetMatched('[data-tau="add_new_address"]') ||
        targetMatched('[data-ref="controlSection"]>button') ||
        targetMatched('[data-ref="editStepBtn"]')
      ) {
        setTimeout(() => {
      //console.log('click');
        //orderEmail = getCookie('emailStored');
        orderEmail = JSON.parse(
          document.querySelector('#checkout-main').getAttribute('data-basket')
        ).orderEmail;
          init(orderEmail);
        }, 500);
      }
    });
  }

//const minicartControl = () => {
//sideCartBtnHandler();
//if (isCartPage) {
//sideCartBtnHandler(true);
//}
//};
//!isCheckoutPage && observeDOM('.b-minicart', minicartControl, {
//attributes: true
//});

//observeDOM('.b-minicart_icon', minicartControl, {
//attributes: true
//});

//if (isCartPage) {
//observeDOM('.b-coupon_form-content_inner.b-form', minicartControl, {
//attributes: true
//});
//}
};
