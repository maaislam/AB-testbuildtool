import setup from './services/setup';
import shared from './shared/shared';
import { discountIcon } from './assets/svgs';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.product-form__submit');
  const offerBtn = `<button class="${ID}__offerBtn" type="button">
  ${discountIcon}

  Buy 3 & Get 1 FREE
  </button>`;
  if (!document.querySelector(`.${ID}__offerBtn`)) {
    attachPoint.insertAdjacentHTML('afterend', offerBtn);
  }
};

export default () => {
  setup(); //use if needed
  init();
};
