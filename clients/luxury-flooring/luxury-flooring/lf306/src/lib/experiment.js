import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.homepage-banner .promo_list');

  if (!document.querySelector(`.${ID}__banner`)) {
    attachPoint.insertAdjacentHTML('beforebegin', banner(ID));
  }
};

export default () => {
  setup();
  init();
};
