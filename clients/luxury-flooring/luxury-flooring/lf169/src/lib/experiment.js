import keyBenefits from './components/keyBenefits';
import { keyBenefitsData } from './data/data';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');
  reviews(ID, reviewContainer);

  //sakib
  if (!document.querySelector(`.${ID}__benefits`)) {
    const atfMediaElem = document.querySelector('.product.media');
    atfMediaElem.insertAdjacentHTML('afterend', keyBenefits(ID, keyBenefitsData));
  }
};

export default () => {
  setup();

  console.log('id', ID);

  init();
};
