import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import progressWrapper from './components/progressWrapper';
import banner from './components/banner';
import tooltipWrapper from './components/tooltipWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.wrap.page-step-2');
  const vehicleDetails = document.querySelector('.vehicle-details');
  const modelElem = vehicleDetails.querySelector('span.model');
  const model = modelElem ? modelElem.textContent.trim() : '';
  const registrationElem = vehicleDetails.querySelector('span.car_registration');
  const registration = registrationElem ? registrationElem.textContent.trim() : '';
  const submitBtnElement = document.querySelector('#submit');
  const telephoneLabelElem = document.querySelector('label[for="tel_num"]');
  const emailLabelElem = document.querySelector('label[for="email"]');
  if (!document.querySelector('.steps-container')) {
    targetPoint.insertAdjacentHTML('beforebegin', progressWrapper(ID));
  }

  if (model && registration && !document.querySelector(`.${ID}__car-banner`)) {
    targetPoint.insertAdjacentHTML('beforebegin', banner(ID, model, registration));
  }

  if (telephoneLabelElem && !telephoneLabelElem.querySelector(`.${ID}__tooltip-wrapper`)) {
    telephoneLabelElem.insertAdjacentHTML(
      'beforeend',
      tooltipWrapper(ID, 'So we can send you an SMS of your quote')
    );
  }

  if (emailLabelElem && !emailLabelElem.querySelector(`.${ID}__tooltip-wrapper`)) {
    emailLabelElem.insertAdjacentHTML(
      'beforeend',
      tooltipWrapper(ID, 'So we can send you a copy of your quote')
    );
  }
  if (submitBtnElement) submitBtnElement.textContent = 'GET MY OFFERS';
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
