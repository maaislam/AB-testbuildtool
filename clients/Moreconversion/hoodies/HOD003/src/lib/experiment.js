import setup from './services/setup';

import shared from './shared/shared';
import { buttonContainer } from './components/buttonContainer';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  const atcButton = document.querySelector(
    '.product__info-container .product-form form[action="/cart/add"] .product-form__submit'
  );

  const quantityBox = document.querySelector(
    '.product__info-container .product-form__quantity input[name="quantity"]'
  );

  if (document.querySelector(`.${ID}__buttonContainer`)) {
    document.querySelector(`.${ID}__buttonContainer`).remove();
  }

  atcButton.insertAdjacentHTML('afterend', buttonContainer(ID, 'Buy 2 get 20% off'));

  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__buttonContainer`)) {
      quantityBox.value = 2;
      atcButton.click();
    }
  });
};
