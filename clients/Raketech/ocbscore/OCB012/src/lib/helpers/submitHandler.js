import gaTracking from '../services/gaTracking';
import sendBrazeEvent from './sendBrazeEvent';

const submitHandler = (id) => {
  //Function to check email validity
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  };

  //Function to check mobile number validity
  const isValidMobile = (number) => {
    if (!number.trim()) {
      return true; //Allow empty values
    }
    const re = /^[0-9+\-\s]{7,15}$/; //Allows numbers, spaces, hyphens, and plus sign
    return re.test(number);
  };

  const cleanValue = (value) => {
    return value.replace(/^\s+|\s+$/g, '');
  };
  document
    .querySelector(`.${id}__subscribeModal #braze-modal-submit`)
    .addEventListener('click', (e) => {
      e.preventDefault();
      let isValid = true;

      const firstNameInput = document.getElementById('first-name');

      const mobileInput = document.getElementById('mobile-number');
      const mobileError = document.getElementById('braze-modal__mobile-error');

      if (!isValidMobile(mobileInput.value)) {
        mobileInput.classList.add('error');
        mobileError.style.display = 'block';
        isValid = false;
      } else {
        mobileInput.classList.remove('error');
        mobileError.style.display = 'none';
      }

      //Email validation
      const emailInput = document.getElementById('email');
      const emailError = document.getElementById('braze-modal__email-error');

      if (!emailInput.value || !isValidEmail(emailInput.value)) {
        emailInput.classList.add('error');
        emailError.style.display = 'block';
        isValid = false;
      } else {
        emailInput.classList.remove('error');
        emailError.style.display = 'none';
      }

      //"Consent" checkbox validation
      const consentCheckbox = document.getElementById('consent');
      const consentError = document.getElementById('braze-modal__consent-error');

      if (!consentCheckbox.checked) {
        consentCheckbox.classList.add('error');
        consentError.style.display = 'block';
        isValid = false;
      } else {
        consentCheckbox.classList.remove('error');
        consentError.style.display = 'none';
      }

      //"Privacy" checkbox validation
      const privacyCheckbox = document.getElementById('privacy');
      const privacyError = document.getElementById('braze-modal__privacy-error');

      if (!privacyCheckbox.checked) {
        privacyCheckbox.classList.add('error');
        privacyError.style.display = 'block';
        isValid = false;
      } else {
        privacyCheckbox.classList.remove('error');
        privacyError.style.display = 'none';
      }

      if (isValid) {
        sendBrazeEvent(emailInput.value, firstNameInput.value, mobileInput.value).then(() => {
          gaTracking('Subscribe Now Button');
          const mainContentModal = document.querySelector(
            `.${id}__subscribeModal .braze-modal.separate-window-off`
          );
          mainContentModal.style.display = 'none';
          document.querySelector('.braze-modal__thank-you').style.display = 'flex';
        });
      }
    });
};

export default submitHandler;
