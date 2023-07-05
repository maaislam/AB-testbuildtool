import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { VARIATION } = shared;

const clickHandler = (event) => {
  const { target } = event;

  if (target.closest('.c-header__main__logo .logo')) {
    // gaTracking('clicks on brand logo');
    console.log('clicks on brand logo');
  }
};

const mutationCallback = (mutation) => {
  if (mutation.target.classList.contains('active')) {
    console.log(mutation);
    // gaTracking('clicks on basket icon');
    console.log('clicks on basket icon');
  }
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', clickHandler);
  observeDOM('.minicart-wrapper', mutationCallback);
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
  document.querySelector('.nav-sections-items').style.display = 'none';
};
