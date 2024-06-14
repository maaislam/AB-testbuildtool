import keyBenefits from './components/keyBenefits';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const reviewContainer = document.querySelector('.pdp-reviews#reviews');
  reviews(ID, reviewContainer);

  //sakib
  keyBenefits(ID);
};

export default () => {
  setup();

  console.log('id', ID);

  init();
};
