/*eslint-disable no-param-reassign */
import { observeDOM } from './helpers/utils';
import setup from './services/setup';

const init = () => {
  const recommCarousels = document.querySelectorAll('[id*="dialogue-product-recommendations"]');
  recommCarousels.forEach((recommCarousel) => {
    recommCarousel.style.display = 'none';
  });

  const recommWidgets = document.querySelectorAll('[id*="js_feed_widget"]');
  recommWidgets.forEach((recommWidget) => {
    recommWidget.style.display = 'none';
  });
};

export default () => {
  setup();
  init();
  observeDOM('body', init);
};
