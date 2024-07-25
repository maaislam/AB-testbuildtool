import banner from './components/banner';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const attachPoint = document.querySelector('.homepage-banner .promo_list');

  attachPoint.insertAdjacentHTML('beforebegin', banner(ID));
};

export default () => {
  setup();
  init();
};
