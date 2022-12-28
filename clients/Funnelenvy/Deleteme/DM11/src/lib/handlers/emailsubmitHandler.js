import gaTracking from '../services/gaTracking';

/*eslint-disable no-useless-escape */
const emailSibmitHandler = (id, target) => {
  //validate email
  //check if cjeck box is checked
  const email = target.closest('form').querySelector(`.${id}__getemail--input`).value;
  const isEmailGood = (input) => {
    const regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const blnEmail = regex.test(input);
    return blnEmail;
  };
  const chkTermAlert = () => {
    const blnTerm = document.getElementById('chk-term-1').checked === true;
    return blnTerm;
  };

  //display error if invalid
  const errElem = !isEmailGood(email)
    ? '<div class="input-error">The email field must be a valid email</div>'
    : '<div class="input-error">Please accept the terms and conditions</div>';
  if (!chkTermAlert() || !isEmailGood(email)) {
    target.insertAdjacentHTML('afterend', errElem);
    return;
  }
  document.getElementById('txt-email-1').value = email;
  document.getElementById('btn-submit-1').click();
  gaTracking(' step_3_completion');
};

export default emailSibmitHandler;
