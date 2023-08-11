import callUs from './components/callUs';
import deliveryTime from './components/deliveryTime';

import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
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
  //show expected delivery time
  const pageTitleElem = document.querySelector('h1.page-title');
  if (!document.querySelector(`.${ID}__callus`)) {
    pageTitleElem.insertAdjacentHTML('afterend', callUs(ID));
  }

  const expectedDeliveryElem = document.querySelector('.cart.main.actions');
  if (!document.querySelector(`.${ID}__deliverytime`)) {
    expectedDeliveryElem.insertAdjacentHTML('afterend', deliveryTime(ID));
  }
};
