import setup from './services/setup';
import shared from './shared/shared';
import redem from './components/redem';
import { obsIntersection, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize experiment specific code here
  if (!document.querySelector(`.${ID}__redemWrapper`)) {
    document.body.insertAdjacentHTML('beforeend', redem(ID));
  }
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__button`)) {
      document.querySelector(`.${ID}__redemWrapper a`).click();
    }
  });

  init();

  pollerLite(['.join_package_box'], () => {
    const targetElement = document.querySelector('.join_package_box');
    const intersectionCallback = (entry) => {
      const stickyElement = document.querySelector(`.${ID}__redemContainer`);
      if (!entry.isIntersecting) {
        stickyElement.classList.add(`${ID}__show`);
      } else {
        stickyElement.classList.remove(`${ID}__show`);
      }
    };
    obsIntersection(targetElement, 0.1, intersectionCallback);
  });
};
