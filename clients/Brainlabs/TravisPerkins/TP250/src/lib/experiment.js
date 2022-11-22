import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import observeDOM from './helpers/observeDOM';
import { isPDP, isPLP, isValidSku } from './helpers/utils';
import shared from './shared/shared';
import { skuList } from './skuList';

const { ID, VARIATION } = shared;

const SKU_SELECTOR_STRING = '[data-test-id="product-card-code"]';

const init = () => {
  setup('Experimentation', `TravisPerkins - ${ID}`, shared);

  if (!isPLP() && !isPDP()) return;
  console.log(ID);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //revmove existing

  const getProductId = (elem) => elem.innerText.split(': ')[1];

  if (isPLP()) {
    const productCards = document.querySelectorAll('[data-test-id="product"]');

    productCards.forEach((productCard) => {
      const productId = getProductId(productCard.querySelector(SKU_SELECTOR_STRING));

      if (!isValidSku(skuList, productId)) return;
      //revmove existing
      //render black Friday banners
    });
  } else if (isPDP()) {
    const productId = getProductId(document.querySelector(SKU_SELECTOR_STRING));
    if (!isValidSku(skuList, productId)) return;
    //revmove existing
    //render black Friday banners
  }
};

export default () => {
  //add event listener

  init();

  const mutationCallback = () => {
    init();
  };

  //const appContainer = document.getElementById('app-container');

  observeDOM('#app-container', mutationCallback);
};
