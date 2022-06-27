import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  console.log("idddd",ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  if(document.querySelector('.sewing-personalization__action__row__customized-value--text') == null){
    const refNode = document.querySelector('.cart-product-list ul');
    var buttonHTML = `<button class="customize product-list-item__bottom__buttons__button">
                        Customize
                      </button>`;
   
    refNode.insertAdjacentHTML("afterend",buttonHTML);
    const customizeButton = document.querySelector('.sewing-personalization__action');
    document.querySelector('.customize').onclick = function(){
      customizeButton.click();
      // document.querySelector('.button-link order-action__button product-actions-button css-lv160i').click();
    }
  }

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
