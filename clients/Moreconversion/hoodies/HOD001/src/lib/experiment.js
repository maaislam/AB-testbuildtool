import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

import { swatchContainer } from './components/swatchContainer';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
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
  const targetElement = document.querySelector('.product__info-wrapper variant-radios');

  if (document.querySelector(`.${ID}__swatchContainer`)) {
    document.querySelector(`.${ID}__swatchContainer`).remove();
  }
  if (targetElement) {
    targetElement.insertAdjacentHTML('afterend', swatchContainer(ID, targetElement));
  }

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__swatchItem`)) {
      const value = target.closest(`.${ID}__swatchItem`).getAttribute('value');
      document.querySelectorAll(`.${ID}__swatchItem`).forEach((item) => {
        if (item.classList.contains(`${ID}__selected`)) {
          item.classList.remove(`${ID}__selected`);
        }
      });
      target.closest(`.${ID}__swatchItem`).classList.add(`${ID}__selected`);
      targetElement
        .querySelector(`.product-form__input input[value="${value}"]`)
        .nextElementSibling.click();
    }
  });
};
