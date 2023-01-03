import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import getSearchSuggestions from './helpers/getSearchSuggestions';
import searchSuggestions from './components/searchSuggestions';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //place new zipcode input field`
  const zipcodeWrapper = `
  <div class="${ID}__mktoFormRow mktoFormRow form-row fe_step2">
  <div class="mktoFieldDescriptor">
      <div class="mktoOffset"></div>
      <div class="${ID}__mktoRequiredField mktoRequiredField"><label for="Zipcode"
                 id="LblZipcode"
                 class="mktoLabel mktoHasWidth">
              <div class="mktoAsterix">*</div>Zipcode:
          </label>
          <div class="mktoGutter mktoHasWidth zipcode-anchor"></div>
            <span id="InstructZipcode"
                tabindex="-1"
                class="mktoInstruction"></span>
          <div class="mktoClear"></div>
      </div>
      <div class="mktoClear"></div>
  </div>
  <div class="mktoClear"></div>
</div>`;

  const errorHtml = `
    <div class="${ID}__mktZipError mktoError"
        style="right: 90px; bottom: -35px;">
      <div class="mktoErrorArrowWrap">
          <div class="mktoErrorArrow"></div>
      </div>
      <div id="ValidMsgCompany"
            role="alert"
            tabindex="-1"
            class="mktoErrorMsg">This field is required.</div>
    </div>
  `;

  //add input listener to validate zipcode
  const formId = document.querySelector('[name="formid"]').value;
  const leadForm = document.getElementById(`mktoForm_${formId}`);

  const mktForm = window.MktoForms2.getForm(formId);
  mktForm.addHiddenFields({
    Zipcode: ''
  });
  const zipcodeInput = document.querySelector('[name="Zipcode"]');

  const companyInput = document.getElementById('Company');

  //click on step 1 submit
  const submitBtn = document.querySelector('.mktoButtonWrap');
  submitBtn.addEventListener('click', () => {
    setTimeout(() => {
      companyInput.closest('.mktoFormRow').insertAdjacentHTML('beforebegin', zipcodeWrapper);

      const zipcodeAnchor = document.querySelector('.zipcode-anchor');
      zipcodeAnchor.insertAdjacentElement('afterend', zipcodeInput);
      zipcodeInput.closest('.mktoFormRow').classList.add('fe_show');
      zipcodeInput.setAttribute('type', 'text');
      zipcodeInput.setAttribute('required', 'required');
      zipcodeInput.setAttribute('list', `${ID}__searchsuggestions`);
      //check if any required field is empty
      const requiredFields = leadForm.querySelectorAll('input[required]');
      const emptyField = [...requiredFields].every((input) => input.value === '');
      if (emptyField) {
        submitBtn.classList.add(`${ID}__disable`);
      } else {
        submitBtn.classList.remove(`${ID}__disable`);
      }
    }, 500);
  });
  //handle blur

  zipcodeInput.addEventListener('blur', ({ target }) => {
    if (target.value === '') {
      target.insertAdjacentHTML('afterend', errorHtml);
      submitBtn.classList.add(`${ID}__disable`);
      return;
    }

    submitBtn.classList.remove(`${ID}__disable`);
  });

  //validate
  zipcodeInput?.addEventListener('input', ({ target }) => {
    const searchTerm = target.value;
    if (searchTerm === '' || searchTerm.length < 4 || searchTerm.length > 15) return;
    try {
      getSearchSuggestions(searchTerm)
        .then((response) => {
          console.log(response);
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network response was not ok.');
        })
        .then((data) => {
          console.log(data);
          //render search suggestion dropdown

          zipcodeInput.insertAdjacentHTML(
            'afterend',
            searchSuggestions(ID, data[0].body.predictions)
          );
        });
    } catch (error) {
      console.error('There has been a problem with your fetch operation:', error);
    }
  });
};
