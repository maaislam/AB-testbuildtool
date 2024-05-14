import { calculateBox } from './components/calculateBox';
import { fpCalculator } from './components/fpCalculator';
import { checkBox } from './components/checkBox';
import { deliveryMessage } from './components/deliveryMessage';
import shared from './shared/shared';

const { ID } = shared;

export default () => {
  console.log('right side', ID);
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
  //const wastageDetails = document.querySelector('.wastage-details');
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
};
