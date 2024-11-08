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

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('.pakge_btn')) {
      const count = 200;
      const defaults = {
        origin: {
          y: 0.7
        }
      };

      const fire = (particleRatio, opts) => {
        window.confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      };

      fire(0.25, {
        spread: 26,
        startVelocity: 55
      });

      fire(0.2, {
        spread: 60
      });

      fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
      });

      fire(0.1, {
        spread: 120,
        startVelocity: 45
      });
    }
  });

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
