import usps from './components/usps';
import uspsV2 from './components/uspsV2';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  const anchorPoint = document.querySelector('.product-page--submit-action');

  if (!document.querySelector(`.${ID}__container`)) {
    VARIATION === '1' ? anchorPoint.insertAdjacentHTML('afterend', usps(ID)) : anchorPoint.insertAdjacentHTML('afterend', uspsV2(ID));
  }
};
