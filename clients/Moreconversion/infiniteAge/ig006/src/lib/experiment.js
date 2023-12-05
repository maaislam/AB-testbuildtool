import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { timerStr } from './components/timerStr';
import { displayTimeRemaining } from './helpers/utils';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
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

  // document
  //   .querySelector('body .product.product--medium center')
  //   .insertAdjacentHTML('beforebegin', timerStr(ID, timer));

  document
    .querySelector('.addcart:not(.addcartbox)')
    .insertAdjacentHTML('beforeend', timerStr(ID, timer));

  if (document.getElementById('timeLeft')) {
    setInterval(displayTimeRemaining, 1000);
    displayTimeRemaining();
  }
};
