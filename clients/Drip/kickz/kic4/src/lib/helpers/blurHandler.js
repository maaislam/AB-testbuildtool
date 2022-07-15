import { setCookie } from './setCookie';

const blurHandler = (ID, inputSelector, isEmailValid) => {
  const emailAddress = inputSelector.value;

  //is input a valid email

  const validity = isEmailValid(emailAddress);
  document.querySelector(`#dwfrm_billing_contactInfoFields_email`).value = emailAddress;
  const objBasket = JSON.parse(
    document.querySelector('#checkout-main').getAttribute('data-basket')
  );
  const emailStoredInDOM = objBasket.orderEmail || emailAddress;
  setCookie('emailStored', emailStoredInDOM, 30);

  if (!validity.isValid) {
    // show error message and add error classes
    document.querySelector(`.${ID}_login_guestEmail--label`).classList.remove(`${ID}-valid`);
    document.querySelector(`.${ID}_login_guestEmail-error`).innerText = validity.errorMsg;
    document.querySelector(`.${ID}_login_guestEmail`).classList.add(`${ID}__m-invalid`);

    return;
  }

  if (validity.isValid) {
    document.querySelector(`.${ID}_login_guestEmail--label`).classList.add(`${ID}-valid`);
    document.querySelector(`.${ID}_login_guestEmail`).classList.remove(`${ID}__m-invalid`);
    document.querySelector(`.${ID}_login_guestEmail-error`).innerText = '';
  }
};

export default blurHandler;
