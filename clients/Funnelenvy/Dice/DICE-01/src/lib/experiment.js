import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import getSearchSuggestions from './helpers/getSearchSuggestions';
import searchSuggestions from './components/searchSuggestions';
import { debounce, observeDOM } from './helpers/utils';
import zipcodeWrapper from './components/zipcodeWrapper';
import errorHtml from './components/errorElem';
import zipInputHandler from './handlers/zipInputHandler';

const { ID, VARIATION } = shared;

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

  zipcodeInput.setAttribute('list', `${ID}__searchsuggestions`);

  //click on step 1 submit
  const submitBtn = leadForm.querySelector('.mktoButtonWrap button');
  const removeZipErr = () => document.querySelector(`.${ID}__mktZipError`)?.remove();
  const placeZipErr = () => {
    zipcodeInput.insertAdjacentHTML('afterend', errorHtml(ID));
  };

  const hadleZipError = (target) => {
    if (target.value === '') {
      removeZipErr();
      placeZipErr();
    }
  };

  submitBtn.addEventListener('click', (e) => {
    if (zipcodeInput.value === '' && mktForm.validate()) {
      e.preventDefault();
      hadleZipError(e.target);
    }
  });
  //handle blur & focus

  zipcodeInput.addEventListener('blur', ({ target }) => {
    hadleZipError(target);
  });
  zipcodeInput.addEventListener('focus', ({ target }) => {
    hadleZipError(target);
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
