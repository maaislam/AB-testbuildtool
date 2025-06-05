import setup from './services/setup';
import shared from './shared/shared';
import tooltip from './components/tooltip';

const { ID, VARIATION } = shared;
const isMobile = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

const touchHandler = (el) => {
  console.log('clicked');
  el.classList.toggle('touch-active');
};

const tooltipHandler = (el, show) => {
  if (show) {
    el.classList.add('touch-active');
  } else {
    el.classList.remove('touch-active');
  }
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
      if (isMobile()) el.addEventListener('click', () => touchHandler(el));
      if (!isMobile()) {
        el.addEventListener('mouseenter', () => tooltipHandler(el, true));
        el.addEventListener('mouseleave', () => tooltipHandler(el, false));
      }
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

  document.body.addEventListener('pointerup', (e) => {
    const { target } = e;
    if (!target.closest(`.${ID}__tooltip`)) {
      document
        .querySelectorAll(`.${ID}__tooltip`)
        .forEach((el) => el.classList.remove('touch-active'));
    } else if (target.closest('.tooltip-svg')) {
      target.closest('.tooltip-wrapper').classList.remove('touch-active');
    }
  });
  init();
};
