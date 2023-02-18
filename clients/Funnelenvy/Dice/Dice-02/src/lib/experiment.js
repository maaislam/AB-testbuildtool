import setup from './services/setup';
//import gaTracking from './services/gaTracking';
//import shared from './shared/shared';

//const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const formId = document.querySelector('[name="formid"]').value;
  const mktForm = window.MktoForms2.getForm(formId);

  const { isPossiblePhoneNumber } = window.libphonenumber;

  mktForm.onValidate((isValid) => {
    //Get the values
    const vals = mktForm.vals();
    const phoneNumStr = vals.Phone;
    if (!phoneNumStr) return;
    const phoneNumber = phoneNumStr.match(/\d/g).join('');

    if ((isPossiblePhoneNumber(phoneNumber) || isValid) && vals.Company !== '') {
      const phoneErr = document.querySelector('#Phone + .mktoError');
      if (phoneErr) {
        document.querySelector('#Phone + .mktoError').style.display = 'none';
      }
      mktForm.submittable(true);
      return;
    }
    //document.querySelector('#Phone + .mktoError').style.display = 'block';
    mktForm.submittable(false);
  });
};
