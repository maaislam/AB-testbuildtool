import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //Add your experiment code here

  const discountElement = document.querySelector(
    '.herosection [data-pf-type="Heading2"] + [data-pf-type="Heading2"]'
  );

  const buttonElements = document.querySelectorAll('[data-pf-type^=Button]');
  if (discountElement) {
    discountElement.textContent = '-60%';
  }

  if (buttonElements && buttonElements.length > 0) {
    buttonElements.forEach((button) => {
      button.textContent = 'Buy 2 - Get 60% OFF';
    });
  }
};

export default () => {
  setup();
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
