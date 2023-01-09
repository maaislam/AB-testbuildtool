/*eslint-disable no-param-reassign */
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import zipcodeWrapper from './components/zipcodeWrapper';
import errorHtml from './components/errorElem';
import zipInputHandler from './handlers/zipInputHandler';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;
console.log('ID', ID);
const init = () => {
  //place new zipcode input field`

  //add input listener to validate zipcode
  const formId = document.querySelector('[name="formid"]').value;
  const leadForm = document.getElementById(`mktoForm_${formId}`);

  const mktForm = window.MktoForms2.getForm(formId);
  mktForm.addHiddenFields({
    Zipcode: ''
  });
  const zipcodeInput = document.querySelector('[name="Zipcode"]');

  const companyInput = document.getElementById('Company');
  companyInput.closest('.mktoFormRow').insertAdjacentHTML('beforebegin', zipcodeWrapper(ID));

  const zipcodeAnchor = document.querySelector('.zipcode-anchor');
  zipcodeAnchor.insertAdjacentElement('afterend', zipcodeInput);
  zipcodeInput.closest('.mktoFormRow').classList.add('fe_show');
  zipcodeInput.setAttribute('type', 'text');
  zipcodeInput.setAttribute('required', 'required');

  //click on step 1 submit
  const submitBtn = leadForm.querySelector('.mktoButtonWrap button');
  const removeZipErr = () => document.querySelector(`.${ID}__mktZipError`)?.remove();
  const placeZipErr = (errMsg) => {
    zipcodeInput.insertAdjacentHTML('afterend', errorHtml(ID, errMsg));
  };

  const isZipValid = () => {
    const zipCode = document.querySelector('[name="Zipcode"]').value;
    const options = [...document.querySelectorAll(`.${ID}__zipcodeoption`)].map((option) => {
      return option.dataset.value;
    });
    const selectedFromList = options.some((option) => option === zipCode);
    return selectedFromList && zipCode !== '';
  };
  const hadleZipError = (event) => {
    if (!isZipValid()) {
      event.preventDefault();

      removeZipErr();
      placeZipErr(
        document.querySelector('[name="Zipcode"]').value === ''
          ? 'This field is required.'
          : 'Not a valid zipcode.'
      );
      return;
    }
    removeZipErr();
  };

  const zipDropdown = document.querySelector(`.${ID}__searchsuggestions`);

  zipDropdown.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest(`.${ID}__zipcodeoption`)) {
      const fullAddress = target.closest(`.${ID}__zipcodeoption`).dataset.value;
      zipcodeInput.value = fullAddress;
      target.parentNode.classList.add(`${ID}__hide`);
      hadleZipError(event);
    }
  });

  submitBtn.addEventListener('click', (e) => {
    if (!mktForm.validate() || !isZipValid()) {
      e.preventDefault();
      hadleZipError(e);
    }
  });
  //handle blur & focus

  zipcodeInput.addEventListener('blur', (e) => {
    hadleZipError(e);
  });
  zipcodeInput.addEventListener('focus', (e) => {
    hadleZipError(e);
  });

  //validate
  zipcodeInput?.addEventListener('input', ({ target }) => {
    removeZipErr();
    zipInputHandler(target);
  });
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  document.body.addEventListener('click', ({ target }) => {
    if (!target.closest(`.${ID}__searchsuggestions`) || !target.closest('[name="Zipcode"]')) {
      document.querySelector(`.${ID}__searchsuggestions`).classList.add(`${ID}__hide`);
    }
  });

  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const formId = document.querySelector('[name="formid"]').value;

  const callbackFn = (mutation) => {
    if (
      mutation.addedNodes.length > 0 &&
      mutation.addedNodes[0].nodeValue.toLowerCase() === 'get in touch'
    ) {
      init();
    }
  };
  const configObj = {
    childList: true
  };
  observeDOM(`#mktoForm_${formId} button[type="submit"]`, callbackFn, configObj);
};
