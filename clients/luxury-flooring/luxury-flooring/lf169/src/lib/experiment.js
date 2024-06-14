import keyBenefits from './components/keyBenefits';
import reviews from './helpers/reviews';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  reviews(ID);








  //sakib
  keyBenefits(ID);
};

export default () => {
  setup();

  init();
};
