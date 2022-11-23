import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { messages, promoLabel } from './asset';
import promoBanner from './components/promoBanner';
import clickHandler from './helpers/clickHandler';
import observeDOM from './helpers/observeDOM';
import { getCookie, isPDP, isPLP, isValidSku } from './helpers/utils';
import shared from './shared/shared';
import { skuList } from './skuList';

const { ID, VARIATION } = shared;

const SKU_SELECTOR = '[data-test-id="product-card-code"]';
const QTY_SELECTOR = '[data-test-id="qty-selector"]';
const PRICE_SELECTOR = '[data-test-id="main-price"] > h2';

const isLoggedIn = () => !!getCookie('access_token');
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

  const getProductId = (elem) => elem?.innerText.split(': ')[1];
  const getProductPrice = (priceText) => priceText.trim().split('£')[1] * 1;

  if (isPLP()) {
    const productCards = document.querySelectorAll('[data-test-id="product"]');

    productCards.forEach((productCard) => {
      const productId = getProductId(productCard.querySelector(SKU_SELECTOR));

      if (!isValidSku(skuList, productId)) return;
      //revmove existing
      //check login status
      //render black Friday banners
      const anchorElem = productCard.querySelector(QTY_SELECTOR);
      const itemPriceText = productCard.querySelector(PRICE_SELECTOR).innerText;
      const price = getProductPrice(itemPriceText);

      const renderData = {
        messages,
        icon: promoLabel,
        price
      };
      if (productCard.querySelector(`.${ID}__promobanner`)) return;
      productCard.classList.add(`${ID}__diagonal-banner`);
      anchorElem.insertAdjacentHTML(
        'beforebegin',
        promoBanner(ID, renderData, 'plp', isLoggedIn())
      );
    });
  } else if (isPDP()) {
    const productId = getProductId(document.querySelector(SKU_SELECTOR));
    if (!isValidSku(skuList, productId)) return;
    //revmove existing
    //render black Friday banners
  }
};

export default () => {
  //add event listener
  const appContainer = document.getElementById('app-container');
  document.body.addEventListener('click', (e) => {
    clickHandler(ID, e, isLoggedIn());
  });

  init();

  const mutationCallback = () => {
    init();
  };

  //const appContainer = document.getElementById('app-container');

  observeDOM('#app-container', mutationCallback, ID);
};
