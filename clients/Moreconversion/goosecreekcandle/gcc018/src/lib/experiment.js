import usps from './components/usps';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('.product-page--submit-action');

  if (!document.querySelector(`.${ID}__container`)) {
    anchorPoint.insertAdjacentHTML('afterend', usps(ID));
  }
};
