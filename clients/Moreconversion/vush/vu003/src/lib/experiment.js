import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { freeShipping } from './components/freeShiping';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  console.log('id', ID);

  if (!document.querySelector(`.${ID}__freeShipping`)) {
    document
      .querySelector('body .announcement-bar__outer-wrapper')
      .insertAdjacentHTML('beforebegin', freeShipping(ID));
  }
  if (VARIATION === '2') {
    document.querySelector('.quick-cart').classList.add(`${ID}__quick-cart`);
  }
};
