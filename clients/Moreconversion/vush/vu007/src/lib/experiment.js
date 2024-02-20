import setup from './services/setup';

import shared from './shared/shared';
import annoucementBar from './components/annoucementBar';
import progressBar from './components/progressBar';
import { addToCart, observeDOM } from './helpers/utils';
import product from './components/product';

const { ID } = shared;

const init = () => {
  const thresholdPrice = 49;
  const basketFooterPriceElement = document.querySelector('.quick-cart__footer-subtotal > span');
  const basketTotalPriceCtrl = basketFooterPriceElement
    ? basketFooterPriceElement.textContent
    : '0';
  const match = basketTotalPriceCtrl.match(/\d+\.\d+/);
  const basketTotalPrice = match ? +match[0] : 0;

  const isThresholdMet = basketTotalPrice < thresholdPrice;
  console.log('🚀 ~ init ~ isThresholdMet:', isThresholdMet);
  if (isThresholdMet) {
    //fireEvent('user meets the threshold');
  }

  const progressWidth = (basketTotalPrice / thresholdPrice) * 100;
  const deductedPrice = isThresholdMet && (thresholdPrice - basketTotalPrice).toFixed(2);

  const shippingInfoHtml = `
    <div class='${ID}__shippingInfo'>
      ${annoucementBar(ID)}
      <div class="${ID}__discountProgressCard">
        ${progressBar(ID, progressWidth.toFixed(2), deductedPrice, isThresholdMet)}
      </div>
    </div>
  `;

  const anchorPoint = document.querySelector('.quick-cart__header');

  if (document.querySelector(`.${ID}__shippingInfo`)) {
    document.querySelector(`.${ID}__shippingInfo`).remove();
  }

  anchorPoint.insertAdjacentHTML('afterend', shippingInfoHtml);

  console.log('🚀 ~ init ~ basketTotalPrice:', basketTotalPrice);
};

const upSell = () => {
  const upsellProducts = ['/products/curiosity-cues', '/products/feelin-myself-intimate-gel'];
  //const upsellSkus = ['curiosity-cues', 'feelin-myself-intimate-gel'];
  //use promise all to fetch
  Promise.all(upsellProducts.map((item) => fetch(`${item}.js`)))
    .then((responses) => Promise.all(responses.map((res) => res.json())))
    .then((products) => {
      //console.log('🚀 ~ upSell ~ products', products);

      const uniqueProducts = products.filter((item) => {
        const sku = item.variants[0].id;
        return !document.querySelector(`.quick-cart__item[data-id="${sku}"]`);
      });
      console.log('🚀 ~ uniqueProducts ~ uniqueProducts:', uniqueProducts);

      if (uniqueProducts.length === 0) {
        document.querySelector(`.${ID}__upSell`)?.remove();
        document.body.classList.remove(`${ID}__upSell-show`);
        return;
      }

      const anchorPoint = document.querySelector('.quick-cart__footer');
      if (!anchorPoint) return;
      const upSellHtml = `
        <div class='${ID}__upSell'>
          <h3>YOU MIGHT ALSO LIKE:</h3>
          <div class='${ID}__upSellProducts'>
            ${uniqueProducts.map((item) => product(ID, item)).join('\n')}   
          </div>
        </div>`;

      if (document.querySelector(`.${ID}__upSell`)) return;

      document.body.classList.add(`${ID}__upSell-show`);

      anchorPoint.insertAdjacentHTML('afterbegin', upSellHtml);
    });
};

export default () => {
  setup();
  init();
  upSell();

  document.body.addEventListener('click', (e) => {
    if (e.target.closest(`.${ID}__add-to-cart`)) {
      e.preventDefault();
      const id = e.target.closest(`.${ID}__add-to-cart`).getAttribute('data-id');
      addToCart(id, 1).then((res) => {
        console.log('🚀 ~ res', res);
        const event = new CustomEvent('apps:product-added-to-cart');
        document.dispatchEvent(event);
      });
    }
  });

  observeDOM('[data-js-cart-count]', () => {
    setTimeout(() => {
      init();
      upSell();
    }, 1000);
  });
};
