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

  mktForm.onValidate(() => {
    //Get the values
    const vals = mktForm.vals();
    //Check condition
    if (isPossiblePhoneNumber(vals.Phone) && vals.Company !== '') {
      //console.log('custom validation passed');
      document.querySelector('#Phone + .mktoError').style.display = 'none';
      mktForm.submittable(true);
      return;
    }
    mktForm.submittable(false);
  });
};
