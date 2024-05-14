import setup from './services/setup';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';
import { priceWrapperV1, priceWrapperV2, priceWrapperV3 } from './components/priceWrapper';

const { ID, VARIATION } = shared;
const DOM_RENDER_DELAY = 200;
const finalMessage = 'Order a free sample';

const init = () => {
  const priceElement = document.querySelector('.product-info-price');
  const sellPrice = priceElement
    .querySelector('.final-price > .price-including-tax:last-child')
    .innerText.trim();
  const comparePrice = priceElement
    .querySelector('.old-price > .price-including-tax:last-child')
    .innerText.trim();
  const orderASampleElement = document.querySelector('.product-info-main .sample-add-form');

  const renderSampleElement = (element) => {
    element.insertAdjacentElement('beforeend', orderASampleElement);
  };

  const textChangeHandler = (element) => {
    //eslint-disable-next-line no-param-reassign
    element.querySelector('button > span').innerText = finalMessage;
  };

  if (VARIATION === '1') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV1(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  if (VARIATION === '2') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV2(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  if (VARIATION === '3') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV3(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  const renderText = (mutation) => {
    const { addedNodes, target } = mutation;
    const orderSampleButton = document.querySelector(
      `.${ID}__orderSampleWrapper-button button > span`
    );
    if (addedNodes.length > 0 && target.innerText === 'Order a sample') {
      setTimeout(() => {
        orderSampleButton.innerText = finalMessage;
      }, DOM_RENDER_DELAY);
    }
  };

  observeDOM('#product-addtocart-button1 span', renderText);
};

export default () => {
  setup(); //use if needed
  init(); //
};
