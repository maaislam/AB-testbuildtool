import setup from './services/setup';

import shared from './shared/shared';
import { timerStr } from './components/timerStr';
import { displayTimeRemaining } from './helpers/utils';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const timer = document
    .querySelector('body .product.product--medium center:not(.ig006__timer)')
    .innerText.split('by')[1]
    .trim();

  if (document.querySelector(`.${ID}__timer`)) {
    document.querySelector(`.${ID}__timer`).remove();
  }

  document
    .querySelector('.addcart:not(.addcartbox)')
    .insertAdjacentHTML('beforeend', timerStr(ID, timer));

  if (document.getElementById('timeLeft')) {
    displayTimeRemaining();
    setInterval(displayTimeRemaining, 1000);
  }
};
