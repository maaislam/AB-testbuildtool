import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';

const { ID, VARIATION } = shared;

const handleIntersection = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const viewMoreButton = document.querySelector('.amscroll-load-button');
      if (viewMoreButton) {
        viewMoreButton.click();
      }
    }
  });
};

export default () => {
  setup();

  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const intersectionAnchor = document.querySelector('.amscroll-load-button ~ .widget.block');
  observeIntersection(intersectionAnchor, 0.1, handleIntersection);
};
