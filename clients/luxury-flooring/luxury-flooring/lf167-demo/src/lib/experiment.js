import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import { calculateBox } from './components/calculateBox';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.product-info-main .product-info-cta');
  if (document.querySelector(`.${ID}__calculateBox`)) {
    document.querySelector(`.${ID}__calculateBox`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('afterend', calculateBox(ID));
};
export default () => {
  setup();
  console.log(ID);

  init();
};
