import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  const checkoutBtn = document.querySelector('.quick-cart__container');
  checkoutBtn.classList.add(`${ID}__cartContainer`);
};
