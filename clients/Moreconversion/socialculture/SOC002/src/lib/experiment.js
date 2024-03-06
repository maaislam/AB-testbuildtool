import setup from './services/setup';

import shared from './shared/shared';
import delivery from './components/delivery';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  const atcContainer = document.querySelector(
    '.product-button-block button.product-button[type="submit"]'
  );

  if (document.querySelector(`.${ID}__delivery`)) {
    document.querySelector(`.${ID}__delivery`).remove();
  }

  setTimeout(() => atcContainer.insertAdjacentHTML('beforebegin', delivery(ID)), 2000);
};
