import callUs from './components/callUs';
import deliveryTime from './components/deliveryTime';

import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
  //console.log(ID);
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

  //const expectedDeliveryElem = document.querySelector('.cart.main.actions');
  const cartBtn = document.querySelector('.cart-summary ul.checkout-methods-items');
  if (document.querySelector(`.${ID}__deliverytime`)) return;
  cartBtn.insertAdjacentHTML('afterend', deliveryTime(ID));
  //if (window.innerWidth < 768) {
  //cartBtn.insertAdjacentHTML('afterend', deliveryTime(ID));
  //} else {
  //expectedDeliveryElem.insertAdjacentHTML('afterend', deliveryTime(ID));
  //}
};
