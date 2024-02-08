import setup from './services/setup';
import shared from './shared/shared';
import { observeIntersection } from './helpers/utils';
import stickyATC from './components/stickyATC';
import handleATC from './handlers/handleATC';

const { ID } = shared;

const intersectionAnchor = document.querySelector('[data-action="add-to-cart"]');
const anchorPoint = document.body;

const productData = JSON.parse(document.querySelector('[data-product-json]').innerHTML);

const init = () => {
  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      const stickySection = document.querySelector(`.${ID}__stickyATCContainer`);
      const backToTop = document.querySelector('.back-to-top[data-back-to-top]');
      let scrollTimer;
      clearTimeout(scrollTimer);
      if (entry.isIntersecting) {
        stickySection.classList.remove(`${ID}__show`);
        stickySection.classList.add('slide-out-bottom');
        backToTop?.classList.remove('move-up');

        scrollTimer = setTimeout(() => {
          stickySection.classList.add(`${ID}__hide`);
        }, 250);
      } else {
        stickySection.classList.remove('slide-out-bottom');
        stickySection.classList.remove(`${ID}__hide`);
        stickySection.classList.add(`${ID}__show`);

        backToTop?.classList.add('move-up');
      }
    });
  };

  anchorPoint.insertAdjacentHTML('beforeend', stickyATC(ID, productData.product));

  observeIntersection(intersectionAnchor, 0, handleIntersection);

  //handleATC(ID, intersectionAnchor);
};

export default () => {
  setup();
  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    const controlAtc = document.querySelector('[data-action="add-to-cart"]');
    if (target.closest(`.${ID}__atc`)) {
      controlAtc.click();
    }
  });
};
