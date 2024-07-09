/*eslint-disable no-param-reassign */
import { expireDateInputHandler } from './expireDateInputHandler';
import { expireDateValidation } from './expireDateValidation';
import { formatCardNumber } from './formatCreditCardNumber';
import gaTracking from '../services/gaTracking';

const stepTwoValidation = (id) => {
  //Dom elements
  const form = document.querySelector(`.${id}__form-two`);
  const userName = form.querySelector('#name');
  const email = form.querySelector('#email');
  const creditCardNumber = form.querySelector('#cc');
  const expireDateElem = form.querySelector('#expiring-date');
  const cvcNumber = form.querySelector('#cvc');
  const checkbox = form.querySelector('input[type="checkbox"]');

  const isEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateCardNumber = (number) => {
    const visaRegex = /^4\d{15}$/;
    const mcRegex = /^5\d{15}$/;
    const amexRegex = /^3\d{14}$/;

    const cleanedValue = number.replace(/\D/g, '');

    if (visaRegex.test(cleanedValue)) {
      return true;
    }
    if (mcRegex.test(cleanedValue)) {
      return true;
    }
    if (amexRegex.test(cleanedValue)) {
      return true;
    }
    return false;
  };

  const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    formControl.classList.remove('success');
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
  };

  const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.classList.remove('error');
    formControl.classList.add('success');
  };

  const handleInput = () => {
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const creditCardValue = validateCardNumber(creditCardNumber.value.trim().toString());
    const expireDateValue = expireDateValidation(expireDateElem.value);
    const cvcValue = cvcNumber.value;

    console.log('creditCardValue', creditCardValue);

    //Checking for username
    if (userNameValue === '') {
      setErrorFor(userName, 'Username cannot be blank');
    } else {
      setSuccessFor(userName);
    }

    //Checking for email
    if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid');
    } else {
      setSuccessFor(email);
    }

    //checking for credit card
    if (creditCardNumber.value.trim().toString() === '') {
      setErrorFor(creditCardNumber, 'Card cannot be blank');
    } else if (!creditCardValue) {
      setErrorFor(creditCardNumber, 'Card is not valid');
    } else {
      setSuccessFor(creditCardNumber);
    }

    //checking for credit card expire date
    if (expireDateElem.value === '') {
      setErrorFor(expireDateElem, 'date cannot be blank');
    } else if (!expireDateValue) {
      setErrorFor(expireDateElem, 'date is not valid');
    } else {
      setSuccessFor(expireDateElem);
    }

    //checking for credit card expire date
    if (cvcValue === '') {
      setErrorFor(cvcNumber, 'cvc cannot be blank');
    } else if (cvcValue && cvcValue.length < 3) {
      setErrorFor(cvcNumber, 'cvc is not valid');
    } else {
      setSuccessFor(cvcNumber);
    }

    if (
      userNameValue &&
      isEmail(emailValue) &&
      creditCardValue &&
      expireDateValue &&
      cvcValue &&
      checkbox.checked
    ) {
      gaTracking('Subscribe Button');
      const parentEl = form.closest(`.${id}__step`);
      parentEl.classList.remove(`${id}__show`);
      const nextEl = parentEl.nextElementSibling;
      nextEl.classList.add(`${id}__show`);
      document.body.classList.remove('step-one');
      document.body.classList.add('step-two');
    } else if (
      userNameValue &&
      isEmail(emailValue) &&
      creditCardValue &&
      expireDateValue &&
      cvcValue &&
      !checkbox.checked
    ) {
      checkbox.closest('.legal__rule').classList.add('error');
    }
  };

  creditCardNumber.addEventListener('input', () => {
    const node = document.querySelector('#cc'); //vanilla javascript element
    let cursor = node.selectionStart; //store cursor position
    const lastValue = node.value; //get value before formatting

    const formattedValue = formatCardNumber(lastValue);
    document.querySelector('#cc').value = formattedValue; //set value to formatted

    //keep the cursor at the end on addition of spaces
    if (cursor === lastValue.length) {
      cursor = formattedValue.length;
      //decrement cursor when backspacing
      //i.e. "4444 |" => backspace => "4444|"
      if (
        document.querySelector('#cc').getAttribute('data-lastvalue') &&
        document
          .querySelector('#cc')
          .getAttribute('data-lastvalue')
          .charAt(cursor - 1) == ' '
      ) {
        //eslint-disable-next-line no-plusplus
        cursor--;
      }
    }

    //eslint-disable-next-line eqeqeq
    if (lastValue != formattedValue) {
      //increment cursor when inserting character before a space
      //i.e. "1234| 6" => "5" typed => "1234 5|6"
      if (lastValue.charAt(cursor) == ' ' && formattedValue.charAt(cursor - 1) == ' ') {
        //eslint-disable-next-line no-plusplus
        cursor++;
      }
    }

    //set cursor position
    node.selectionStart = cursor;
    node.selectionEnd = cursor;
    //store last value
    document.querySelector('#cc').setAttribute('data-lastvalue', formattedValue);
  });

  //Event listener to expire date input field
  expireDateInputHandler(expireDateElem);

  //cvc
  cvcNumber.addEventListener('input', (event) => {
    let value = event.target.value.replace(/\D/g, ''); //Remove non-digit characters

    if (value.length > 3) {
      value = value.slice(0, 3); //Limit to maximum 3 digits
    }

    event.target.value = value;
  });

  //checkbox input field
  checkbox.addEventListener('click', (e) => {
    if (e.target.checked) {
      checkbox.closest('.legal__rule').classList.remove('error');
    }
  });

  //Event listener to submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInput();
  });
};

export default stepTwoValidation;
