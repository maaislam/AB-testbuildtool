import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

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

  const zipcodeRow = `
  <div class="mktoFormRow form-row fe_step2">
    <div class="mktoFieldDescriptor">
      <div class="mktoOffset"></div>
      <div class="mktoRequiredField">
        <label for="Zipcode" id="LblZipcode" class="mktoLabel mktoHasWidth">
          <div class="mktoAsterix">*</div>
          Zipcode:</label
        >
        <div class="mktoGutter mktoHasWidth"></div>
        <input
          id="Zipcode"
          name="Zipcode"
          maxlength="255"
          aria-labelledby="LblZipcode InstructZipcode"
          type="text"
          class="mktoField mktoTextField mktoHasWidth mktoRequired form-control"
          aria-required="true"
          placeholder=""
          required=""
        />
        <span id="InstructZipcode" tabindex="-1" class="mktoInstruction"></span>
        <div class="mktoClear"></div>
      </div>
      <div class="mktoClear"></div>
    </div>
    <div class="mktoClear"></div>
  </div>
  `;

  //add input listener to validate zipcode

  const companyInput = document.getElementById('Company');
  const anchorElem = companyInput.closest('.mktoFormRow');
  anchorElem.insertAdjacentHTML('beforebegin', zipcodeRow);
};
