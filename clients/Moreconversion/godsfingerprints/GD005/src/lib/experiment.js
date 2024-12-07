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
  setup();

  init();
};
