import setup from './services/setup';
import shared from './shared/shared';
import { obsIntersection, pollerLite } from './helpers/utils';
import stickyWrapper from './components/stickyWrapper';

const { ID } = shared;

const init = () => {
  if (!document.querySelector(`.${ID}__stickyWrapper`)) {
    document.querySelector('body').insertAdjacentHTML('beforeend', stickyWrapper(ID));
  }
};

export default () => {
  setup();

  init();
  pollerLite(['.join_package_box'], () => {
    const targetElement = document.querySelector('.join_package_box');
    const intersectionCallback = (entry) => {
      const stickyElement = document.querySelector(`.${ID}__stickyWrapper`);
      if (!entry.isIntersecting) {
        stickyElement.classList.add(`${ID}__show`);
      } else {
        stickyElement.classList.remove(`${ID}__show`);
      }
    };
    obsIntersection(targetElement, 0.1, intersectionCallback);
  });
};
