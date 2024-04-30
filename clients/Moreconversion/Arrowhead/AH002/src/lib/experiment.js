import setup from './services/setup';
import shared from './shared/shared';
import { freeExChange } from './components/freeExChange';

const { ID, VARIATION } = shared;
const init = () => {
  const parentElement = document.querySelector('.product-single__meta');
  const targetElement = parentElement.querySelector('.atc-qty-merge');
  if (document.querySelector(`.${ID}__freeExChange`)) {
    document.querySelector(`.${ID}__freeExChange`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('afterend', freeExChange(ID));
};

export default () => {
  setup();
  console.log(ID);
  if (VARIATION === 'Control') {
    return;
  }
  init();
};
