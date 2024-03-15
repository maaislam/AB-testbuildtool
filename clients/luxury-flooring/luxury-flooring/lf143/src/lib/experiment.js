import setup from './services/setup';
import shared from './shared/shared';
import orderButton from './components/orderButton';
import { observeDOM } from './helpers/utils';
import emitCartDataOnChange from './helpers/emitCartData';

const { ID } = shared;
const DOM_RENDER_DELAY = 2000;
const limitReached = 'Sample limit reached';

let stage3Msg = 'Added to basket';

let finalMessage = 'Order a sample';

const init = (mutation) => {
  const { addedNodes, removedNodes, target } = mutation;
  const orderSampleCta = document.querySelector(`.${ID}__order-button span`);
  if (removedNodes.length > 0 && target.innerText === 'Adding free sample') {
    orderSampleCta.innerText = 'Adding';
  } else if (addedNodes.length > 0 && target.innerText === 'Order a sample') {
    orderSampleCta.innerText = stage3Msg;
    setTimeout(() => {
      orderSampleCta.innerText = finalMessage;
    }, DOM_RENDER_DELAY);
  }
};

export default () => {
  const targetPoint = document.querySelector('#sample_addtocart_form');
  setup();
  emitCartDataOnChange();

  document.addEventListener('cartDataChanged', (e) => {
    console.log('Cart data:', e.detail);
    const cartData = e.detail;
    const thisProductSampleSku = document.querySelector('.sample-add-form form').dataset.productSku;
    const sampleInCart = cartData.items.find((item) => item.product_sku === thisProductSampleSku);

    const currentSampleQty = sampleInCart ? sampleInCart.qty : 0;

    const totalSampleQty = cartData.items.reduce(
      (acc, item) => (item.product_name.includes('Free Sample') ? acc + item.qty : acc),
      0
    );

    let btnSubtextMsg = '';
    //console.log('🚀 ~ cart.subscribe ~ currentSampleQty:', currentSampleQty);

    if (currentSampleQty > 1) {
      stage3Msg = limitReached;
      finalMessage = limitReached;
      btnSubtextMsg = "You've hit the sample limit for this product.";
    } else {
      stage3Msg = 'Added to basket';
      finalMessage = 'Order a sample';
    }
    console.log('🚀 ~ cart.subscribe ~ totalSampleQty:', totalSampleQty);

    if (totalSampleQty >= 15) {
      finalMessage = limitReached;
      stage3Msg = limitReached;
      btnSubtextMsg = "You've hit the sample limit for this order.";
    }

    //update btn text
    const orderSampleCta = document.querySelector(`.${ID}__order-button span`);
    const btnSubtext = document.querySelector(`.${ID}__order-button--subtext`);
    if (orderSampleCta) {
      orderSampleCta.innerText = finalMessage;
    }
    if (btnSubtext) {
      btnSubtext.innerText = btnSubtextMsg;
    }
  });

  if (!document.querySelector(`.${ID}__order-button`)) {
    targetPoint.insertAdjacentHTML(
      'afterend',
      `<div style="font-size:13px;margin-top:6px" class="${ID}__order-button--subtext"></div>`
    );
    targetPoint.insertAdjacentHTML('afterend', orderButton(ID));
  }

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__order-button`)) {
      targetPoint.querySelector('#product-addtocart-button1').click();
    }
  });

  observeDOM('#product-addtocart-button1 span', init);
};
