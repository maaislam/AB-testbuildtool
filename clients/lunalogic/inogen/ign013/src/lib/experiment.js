import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import formHeader from './components/formHeader';
import customRadioButtonListener from './helpers/customRadioButtonListener';
import { image } from './assets/icons';

const { ID, VARIATION } = shared;
const init = () => {
  const formContainer = document.querySelector('#formSection');
  const leadFormElement = formContainer.querySelector('#leadForm fieldset');
  const fields = formContainer.querySelector('.form_field_container')
    ? formContainer.querySelectorAll('.form_field_container')
    : formContainer.querySelectorAll('.form-group');

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
  });

  if (
    !document.querySelector(`.${ID}__imageWrapper`) &&
    document.querySelector('#formSection .form_footer')
  ) {
    const targetPoint = document.querySelector('#formSection .lead_form_page.lead_form_page1');
    targetPoint.querySelector('.form_footer').insertAdjacentHTML(
      'beforeend',
      `<div class="${ID}__imageWrapper">
            <div class="logoSet">
                <img decoding="async" src="https://try.inogen.com/wp-content/uploads/2025/01/badge_BBB_Aplus_highres.jpg" alt="BBB Rating A+">
                <img decoding="async" src="https://try.inogen.com/wp-content/uploads/2025/01/logo_lifetime_170.png" alt="Designed and assembled in USA">
                <img decoding="async" alt="USA Logo" src="https://try.inogen.com/wp-content/uploads/2025/01/USA-Logo-new.png">
            </div>
          </div>`
    );
  }

  if (
    document.querySelector('#topform_disclaimer') &&
    !document.querySelector('.disclaimer-wrapper')
  ) {
    const disclaimerElem = document.querySelector('#topform_disclaimer');
    const logoSetElem = document.querySelector('#formSection .logoSet');
    disclaimerElem.insertAdjacentHTML('beforebegin', '<div class="disclaimer-wrapper"></div>');

    document.querySelector('.disclaimer-wrapper').appendChild(disclaimerElem);
    document.querySelector('.disclaimer-wrapper').appendChild(logoSetElem);
  }
};
export default () => {
  setup(); //use if needed
  init();
};
