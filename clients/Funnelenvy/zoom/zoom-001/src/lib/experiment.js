import setup from './services/setup';
import shared from './shared/shared';
import { confirmEmail } from './components/confirmEmail';
import { fakeButton } from './components/fakeButton';

const { ID, VARIATION } = shared;

const init = () => {
  const signupElement = document.querySelector('.opc-checkout__main .opc-signup__main');
  const targetElement = signupElement.querySelector(
    'form > .zm-form-item.opc-signup__main__last-name + div'
  );
  if (document.querySelector(`.${ID}__confirmEmailAddress`)) {
    document.querySelector(`.${ID}__confirmEmailAddress`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('afterend', confirmEmail(ID));

  //fake button add
  const continueButton = signupElement.querySelector(
    '.zm-form-item button.opc-signup__main__action-btn'
  );

  if (document.querySelector(`.${ID}__fakeButton`)) {
    document.querySelector(`.${ID}__fakeButton`).remove();
  }

  continueButton && continueButton.insertAdjacentHTML('beforebegin', fakeButton(ID));

  const fakeButtonElement = document.querySelector(`.${ID}__fakeButton`);
  const confirmEmailAddress = document.querySelector(`.${ID}__confirmEmailAddress`);
  const confirmEmailAddressInput = confirmEmailAddress.querySelector('input');
  const emailAddressInput = document.querySelector('#email-address');
  const errorMessage = document.querySelector(`.${ID}__errorMessage`);

  const removeError = () => {
    errorMessage.style.display = 'none';
    confirmEmailAddress.classList.remove('is-error');
  };

  const showError = () => {
    errorMessage.style.display = 'block';
    confirmEmailAddress.classList.add('is-error');
  };

  const buttonVisibility = () => {
    fakeButtonElement.style.display = 'none';
    continueButton.style.display = 'inline-block';
  };

  const buttonHidden = () => {
    fakeButtonElement.style.display = 'inline-block';
    continueButton.style.display = 'none';
  };

  confirmEmailAddressInput.addEventListener('focus', () => {
    if (!confirmEmailAddressInput.value) {
      confirmEmailAddress.querySelector('.zm-input--show-label').classList.toggle('is-focused');
    }
  });

  confirmEmailAddressInput.addEventListener('blur', () => {
    if (!confirmEmailAddressInput.value) {
      confirmEmailAddress.querySelector('.zm-input--show-label').classList.toggle('is-focused');
      showError();
      return;
    }
    if (
      emailAddressInput.value.trim() === confirmEmailAddressInput.value.trim() &&
      !emailAddressInput.closest('.zm-form-item__content').querySelector('.zm-form-item__error')
    ) {
      removeError();
      buttonVisibility();
    } else if (emailAddressInput.value.trim() !== confirmEmailAddressInput.value.trim()) {
      showError();
      buttonHidden();
    }
  });

  confirmEmailAddressInput.addEventListener('input', () => {
    if (emailAddressInput.value) {
      removeError();
    }
    if (
      emailAddressInput.value.trim() === confirmEmailAddressInput.value.trim() &&
      !emailAddressInput.closest('.zm-form-item__content').querySelector('.zm-form-item__error')
    ) {
      removeError();
      buttonVisibility();
    } else {
      //showError();
      buttonHidden();
    }
  });

  emailAddressInput.addEventListener('blur', () => {
    if (
      emailAddressInput.value.trim() === confirmEmailAddressInput.value.trim() &&
      !emailAddressInput.closest('.zm-form-item__content').querySelector('.zm-form-item__error')
    ) {
      removeError();
      buttonVisibility();
    }
  });
};
export default () => {
  setup();
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  init();
};
