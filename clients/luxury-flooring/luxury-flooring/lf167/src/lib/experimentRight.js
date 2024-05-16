import setup from './services/setup';
import { observeDOM } from './helpers/utils';
import shared from './shared/shared';
import { calculateBox } from './components/calculateBox';
import { fpCalculator } from './components/fpCalculator';
import { checkBox } from './components/checkBox';
import { deliveryMessage } from './components/deliveryMessage';
import { priceWrapperV4, priceWrapperV5, priceWrapperV6 } from './components/priceWrapper';

const { ID, VARIATION } = shared;
const DOM_RENDER_DELAY = 2000;
const finalMessage = 'order a free sample';

const renderPriceSection = () => {
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

  if (VARIATION === '4' || VARIATION === '1') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV4(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  if (VARIATION === '5' || VARIATION === '2') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV5(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  if (VARIATION === '6' || VARIATION === '3') {
    if (document.querySelector(`.${ID}__priceWrapper`)) {
      document.querySelector(`.${ID}__priceWrapper`).remove();
    }
    priceElement.insertAdjacentHTML('beforebegin', priceWrapperV6(ID, sellPrice, comparePrice));
    const orderSampleWrapper = document.querySelector(`.${ID}__orderSampleWrapper-button`);
    renderSampleElement(orderSampleWrapper);
    textChangeHandler(orderSampleWrapper);
  }

  const renderText = (mutation) => {
    const { addedNodes, target } = mutation;
    const orderSampleButton = document.querySelector(
      `.${ID}__orderSampleWrapper-button button > span`
    );

    if (addedNodes.length > 0 && target.innerText.toLowerCase() === 'order a sample') {
      setTimeout(() => {
        orderSampleButton.innerText = finalMessage;
      }, DOM_RENDER_DELAY);
    }
  };

  //text chnage handler
  observeDOM('#product-addtocart-button1 span', renderText);
};

export default () => {
  if (!document.documentElement.classList.contains('lf167')) {
    setup();
  }

  //render price section
  renderPriceSection();
  const targetElement = document.querySelector('.product-info-main .product-info-cta');
  const deliveryData = document.querySelector('#del_date').innerText;

  if (document.querySelector(`.${ID}__calculateBox`)) {
    document.querySelector(`.${ID}__calculateBox`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('afterend', calculateBox(ID, deliveryData));

  const inputElem = document.querySelector(`.${ID}__input-box input`);
  const controlInputElement = document.querySelector('.fp-calculator .fp-controls input');

  controlInputElement.addEventListener('input', () => {
    if (controlInputElement.value === '') {
      document.querySelector(`.${ID}__calculateBox`).classList.remove(`${ID}__hide`);
      inputElem.value = '';
      inputElem.focus();
    }
  });

  inputElem.addEventListener('input', () => {
    //const areaInput = document.querySelector('.fp-calculator .fp-controls input');
    controlInputElement.value = inputElem.value;
    controlInputElement.dispatchEvent(new Event('change'));
    if (inputElem.value > '0') {
      document.querySelector(`.${ID}__calculateBox`).classList.add(`${ID}__hide`);
      controlInputElement.focus();
    }
  });

  const fpControls = document.querySelector('.fp-controls');
  const fpRequire = document.querySelector('.fp-require');
  const wastageDetails = document.querySelector('.wastage-details');
  const fpTotalAmount = document.querySelector('.fp-require-statement:not(.-bold)');

  if (document.querySelector(`.${ID}__fpCalculator`)) {
    document.querySelector(`.${ID}__fpCalculator`).remove();
  }
  fpRequire.insertAdjacentHTML('afterbegin', fpCalculator(ID));
  const fpCalculatorInputBox = document.querySelector(`.${ID}__fpCalculator-input`);
  const fpCalculatorTotalBox = document.querySelector(`.${ID}__fpCalculator-calculation`);
  fpCalculatorInputBox.querySelector('p').insertAdjacentElement('afterend', fpControls);
  fpCalculatorTotalBox.querySelector('p').insertAdjacentElement('afterend', fpTotalAmount);
  if (fpCalculatorTotalBox.querySelector(`.${ID}__checkBox`)) {
    fpCalculatorTotalBox.querySelector(`.${ID}__checkBox`).remove();
  }
  fpCalculatorTotalBox
    .querySelector('p[data-bind="text: total_info"]')
    .insertAdjacentHTML('beforebegin', checkBox(ID));

  if (fpRequire.querySelector(`.${ID}__delivery-message`)) {
    fpRequire.querySelector(`.${ID}__delivery-message`).remove();
  }

  fpRequire
    .querySelector('.product-add-form')
    .insertAdjacentHTML('afterend', deliveryMessage(ID, deliveryData));

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      target.closest('label[for="add-10percent-wastage"]') &&
      target.closest(`.${ID}__calculateBox`)
    ) {
      console.log('enter');
      target.closest(`.${ID}__calculateBox`).querySelector('input').click();
      document.querySelector(`.${ID}__fpCalculator-calculation input`).click();
      wastageDetails.querySelector('.missing-wastage').click();
    } else if (
      target.closest('label[for="add-10percent-wastage"]') &&
      target.closest(`.${ID}__fpCalculator`)
    ) {
      console.log('enter......');
      document.querySelector(`.${ID}__calculateBox input`).click();
      wastageDetails.querySelector('.missing-wastage').click();
    }
  });
};
