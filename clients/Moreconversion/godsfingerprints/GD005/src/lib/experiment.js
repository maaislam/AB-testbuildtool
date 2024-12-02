import setup from './services/setup';
import shared from './shared/shared';
import uspsWrapper from './components/uspsWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  //Your experiment code here

  const targetElement = document.querySelector('.product [data-product-block="quantity_selector"]');
  console.log(targetElement, 'targetElement');
  if (!document.querySelector(`.${ID}__usps-wrapper`)) {
    targetElement.insertAdjacentHTML('beforebegin', uspsWrapper(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init();
};
