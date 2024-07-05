import gaTracking from '../services/gaTracking';

const stepThreeValidation = (id) => {
  //Dom elements
  const form = document.querySelector(`.${id}__form-three`);
  const email = form.querySelector('#email');
  const checkbox = form.querySelector('input[type="checkbox"]');

  const isEmail = (email) => {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
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

    const emailValue = email.value.trim();

    //Checking for email
    if (emailValue === '') {
      setErrorFor(email, 'Email cannot be blank');
    } else if (!isEmail(emailValue)) {
      setErrorFor(email, 'Email is not valid');
    } else {
      setSuccessFor(email);
    }

    if (isEmail(emailValue) && checkbox.checked === true) {
      gaTracking('DB_NoAds Button');
      document.body.classList.remove(`${id}__modalOpen`);
    }
  };

  //Event listener to submit form
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    handleInput();
  });
};

export default stepThreeValidation;
