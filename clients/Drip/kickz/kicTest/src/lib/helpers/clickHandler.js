import { setCookie } from './setCookie';
import updateDataBasket from './updateDataBasket';

const clickHandler = async (ID, isEmailValid, emailAddress, submitEmail) => {
  //document.querySelector(`.${ID}_b-checkout_step-controls`).addEventListener('click', function() {
  const validity = isEmailValid(emailAddress);
  if (!validity.isValid) {
    document.querySelector('.l-header-inner').scrollIntoView(true);
    document.querySelector(`.${ID}_login_guestEmail-error`).innerText = validity.errorMsg;
    document.querySelector(`.${ID}_login_guestEmail--label`).classList.remove(`${ID}-valid`);
    document.querySelector(`.${ID}_login_guestEmail`).classList.add(`${ID}__m-invalid`);

    return;
  }
  document.querySelector(`.${ID}_login_guestEmail--label`).classList.add(`${ID}-valid`);
  document.querySelector(`.${ID}_login_guestEmail`).classList.remove(`${ID}__m-invalid`);
  document.querySelector(`.${ID}_login_guestEmail-error`).innerText = validity.errorMsg;

  //resubmit email

  const submitStatus = await submitEmail(emailAddress);
  //console.log(submitStatus)

  if (submitStatus.success) {
    document.querySelector('#dwfrm_billing_contactInfoFields_email').value = emailAddress;
    setCookie('emailStored', emailAddress, 30);
    //document.querySelector(`.${ID}_b-checkout_step-controls`)?.classList.add(`${ID}__hide`);
    //document
    //.querySelector(`[data-ref="shippingStep"] .b-checkout_step-controls`)
    //?.classList.add(`${ID}__hide`);
    updateDataBasket(emailAddress);
  }

  document.querySelector('[data-ref="shippingStep"] .b-checkout_step-controls button').click();
};

export default clickHandler;
