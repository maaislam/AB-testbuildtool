import setup from './services/setup';
import shared from './shared/shared';
import orderButton from './components/orderButton';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

export default () => {
  setup();

  const targetPoint = document.querySelector('#sample_addtocart_form');

  if (!document.querySelector(`.${ID}__order-button`)) {
    targetPoint.insertAdjacentHTML('afterend', orderButton(ID));
  }

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__order-button`)) {
      targetPoint.querySelector('#product-addtocart-button1').click();
    }
  });

  const init = (mutation) => {
    const { addedNodes, removedNodes, target } = mutation;
    const orderSampleCta = document.querySelector(`.${ID}__order-button span`);
    if (removedNodes.length > 0 && target.innerText === 'Adding free sample') {
      orderSampleCta.innerText = 'Adding';
    } else if (addedNodes.length > 0 && target.innerText === 'Order a sample') {
      orderSampleCta.innerText = 'Added';
      setTimeout(() => {
        orderSampleCta.innerText = 'Order a sample';
      }, 2000);
    }
  };

  observeDOM('#product-addtocart-button1 span', init);
};
