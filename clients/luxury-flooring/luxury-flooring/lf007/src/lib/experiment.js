import { observeIntersection } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const intersectionAnchor = document.querySelector('.product-options-bottom .tocart');
  const anchorPoint = document.body;
  const htmlStr = `<div id="sticky-section" class="${ID}__hide ${ID}__stickyATC">
    Add to Cart
  </div>`;
  anchorPoint.insertAdjacentHTML('beforeend', htmlStr);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATC`);

      if (entry.isIntersecting) {
        stickySection.classList.add(`${ID}__hide`);
      } else {
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);
      }
    });
  };

  observeIntersection(intersectionAnchor, 0, handleIntersection);
};

export default () => {
  setup();
  init();
  console.log(ID);
};
