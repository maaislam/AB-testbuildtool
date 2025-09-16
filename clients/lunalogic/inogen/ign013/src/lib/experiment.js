import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import formHeader from './components/formHeader';
import customRadioButtonListener from './helpers/customRadioButtonListener';
import { image } from './assets/icons';

const { ID, VARIATION } = shared;
const init = () => {
  const formContainer = document.querySelector('#form_container');
  const leadFormElement = formContainer.querySelector('.lead_form_page');
  const fields = formContainer.querySelectorAll('.form_field_container');

  if (!leadFormElement.querySelector('.new-wrapper')) {
    leadFormElement.insertAdjacentHTML('afterbegin', '<div class="new-wrapper"></div>');
  }
  Array.from(fields)
    .slice(0, 3)
    .forEach((field) => {
      leadFormElement.querySelector('.new-wrapper').appendChild(field);
    });

  if (!document.querySelector(`.${ID}__form-header`)) {
    leadFormElement.querySelector('.new-wrapper').insertAdjacentHTML('beforebegin', formHeader(ID));
  }

  pollerLite(['#formSection .lead_form_page'], () => {
    const targetPoint = document.querySelector('#formSection .lead_form_page.lead_form_page1');
    const prescribedElem = document.querySelector('#formSection .prescribed_o2_patient_container');

    const str = `
    <div class="custom-radio-buttons">
      <input type="radio" id="yes" name="response" value="Yes">
      <label for="yes">Yes</label>
      <input type="radio" id="no" name="response" value="No">
      <label for="no">No</label>
    </div>
    `;

    if (!document.querySelector('.custom-radio-buttons')) {
      prescribedElem.querySelector('p').insertAdjacentHTML('afterend', str);
      customRadioButtonListener();
    }

    const termLinkElem = document.querySelector('.checkbox_container.term_link');
    if (termLinkElem) {
      termLinkElem.innerHTML = `
        I agree to Inogen’s <a href="/terms-of-use/" target="_blank">Terms of Use</a> and authorize Inogen to contact me including by phone and sms&nbsp;text&nbsp;messaging.
          <input type="checkbox" name="terms" required="required">
          <span class="checkmark"></span>
      `;
    }

    if (!document.querySelector(`.${ID}__imageWrapper`)) {
      targetPoint
        .querySelector('.form_footer')
        .insertAdjacentHTML('beforeend', `<div class="${ID}__imageWrapper">${image}</div>`);
    }
  });
};
export default () => {
  setup(); //use if needed
  init();
};
