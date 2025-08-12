import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  const zipCodeInput = document.querySelectorAll('input[name="ZipCode"], input[name="zip"]');
  if (zipCodeInput.length > 0) {
    zipCodeInput.forEach((zipCode) => {
      zipCode.value = '00000';
      zipCode.parentElement.classList.add('zip-code-input-field-hidden');
    });
  }
};
