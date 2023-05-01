/*eslint-disable no-param-reassign */
import { observeDOM } from './helpers/utils';
import setup from './services/setup';

const init = () => {
  const recommCarousels = document.querySelectorAll('[id*="dialogue-product-recommendations"]');
  recommCarousels.forEach((recommCarousel) => {
    recommCarousel.style.display = 'none';
  });
};

export default () => {
  setup();
  init();
  observeDOM('body', init);
};
