//import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { cartIcon } from './components/cartIcon';

const { ID } = shared;

export default () => {
  //setup(); //use if needed
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
  document.querySelectorAll('.products-list li.item .product.actions').forEach((item) => {
    if (item) {
      item.insertAdjacentHTML('beforebegin', cartIcon(ID));
    }
  });

  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${ID}__cart-button`)) {
      const targetParent = e.target.closest('.product-item-inner');
      targetParent.querySelector('.product.actions button').click();
    }
  });
};
