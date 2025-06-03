import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import tooltip from './components/tooltip';

const { ID, VARIATION } = shared;

const touchHandler = (el) => {
  el.classList.add('touch-active');
  setTimeout(() => el.classList.remove('touch-active'), 300);
};

const init = () => {
  if (VARIATION === '1') {
    const alltargetPints = document.querySelectorAll('.fs-subtitle');
    alltargetPints.forEach((element) => {
      if (!element.querySelector(`.${ID}__tooltip`)) {
        element.insertAdjacentHTML('beforeend', tooltip(ID));
      }
    });

    document.querySelectorAll('.tooltip-wrapper').forEach((el) => {
      el.addEventListener('touchstart', () => touchHandler(el));
    });
  }

  if (VARIATION === '2') {
    const alltargetPints = document.querySelectorAll('.questions2');
    alltargetPints.forEach((element) => {
      if (!element.querySelector(`.${ID}__text`)) {
        element
          .querySelector('.fs-subtitle')
          .insertAdjacentHTML(
            'afterend',
            `<p class="${ID}__text">A valid prescription is required to purchase an oxygen device.</p>`
          );
      }
    });
  }
};

export default () => {
  setup(); //use if needed

  init();
};
