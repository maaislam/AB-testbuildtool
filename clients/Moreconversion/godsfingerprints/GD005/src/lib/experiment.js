import setup from './services/setup';
import shared from './shared/shared';
import uspsWrapper from './components/uspsWrapper';

const { ID } = shared;

const init = () => {
  const targetElement = document.querySelector('.product [data-product-block="buy_buttons"]');

  if (!document.querySelector(`.${ID}__usps-wrapper`)) {
    targetElement.insertAdjacentHTML('afterend', uspsWrapper(ID));
  }
};

export default () => {
  setup();

  init();
};
