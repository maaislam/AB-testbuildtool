import { formatCardNumber } from './formatCreditCardNumber';

const stepTwoValidation = (id) => {
  //Dom elements
  const form = document.querySelector(`.${id}__form-two`);
  const userName = form.querySelector('#name');
  const email = form.querySelector('#email');
  const creditCardNumber = form.querySelector('#cc');
  //const password = document.querySelector('#password');
  //const confirmPassword = document.querySelector('#cpassword');
  //To check if email is valid or not ?
  const isEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateInput = (event) => {
    const input = event.target;
    const value = input.value.replace(/\D/g, '');
    input.value = value;
  };

  //Validate credit card number using Luhn algorithm
  //const isCreditCard = (number) => {
  //const re = /^\d{13,19}$/; //Check for a valid credit card number format
  //if (!re.test(String(number))) {
  //return false;
  //}

  //let sum = 0;
  //let shouldDouble = false;
  //for (let i = number.length - 1; i >= 0; i--) {
  //let digit = parseInt(number.charAt(i), 10);

  //if (shouldDouble) {
  //digit *= 2;
  //if (digit > 9) {
  //digit -= 9;
  //}
  //}

  //sum += digit;
  //shouldDouble = !shouldDouble;
  //}

  //return sum % 10 === 0;
  //};

  const valid_credit_card = (value) => {
    //Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) return false;

    //The Luhn Algorithm. It's so pretty.
    let nCheck = 0;
    let bEven = false;
    value = value.replace(/\D/g, '');

    for (let n = value.length - 1; n >= 0; n--) {
      const cDigit = value.charAt(n);
      let nDigit = parseInt(cDigit, 10);

      if (bEven && (nDigit *= 2) > 9) nDigit -= 9;

      nCheck += nDigit;
      bEven = !bEven;
    }

    return nCheck % 10 == 0;
  };

  const setErrorFor = (input, message) => {
    const formControl = input.parentElement;
    formControl.className = `${id}__form-field error`;
    const small = formControl.querySelector('small');
    small.innerText = message;
  };

  //If there is no error, than what we want to do with input ?
  const setSuccessFor = (input) => {
    const formControl = input.parentElement;
    formControl.className = `${id}__form-field success`;
  };

  const handleInput = () => {
    //Values from dom elements ( input )
    const userNameValue = userName.value.trim();
    const emailValue = email.value.trim();
    const creditCardValue = valid_credit_card(creditCardNumber.value.trim().toString());

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
    console.log(
      'value checking for credit',
      creditCardValue,
      valid_credit_card(creditCardValue) === false
    );
    if (creditCardNumber.value.trim().toString() === '') {
      setErrorFor(creditCardNumber, 'Card cannot be blank');
    } else if (!creditCardValue) {
      console.log('enter');
      setErrorFor(creditCardNumber, 'Card is not valid');
    } else {
      setSuccessFor(creditCardNumber);
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

  //Event listener to submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInput();
  });
};

export default stepTwoValidation;
