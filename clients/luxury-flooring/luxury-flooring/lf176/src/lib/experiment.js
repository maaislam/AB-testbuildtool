import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import fakeBtn from './components/fakeBtn';

const { ID, VARIATION } = shared;

const init = () => {
  const bodyElement = document.body;
  bodyElement.classList.add(`${ID}__hiddenWrapper`);
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeBtn`)) {
      const clickedItem = target.closest(`.${ID}__fakeBtn`);
      const bodyElement = document.body;
      bodyElement.classList.remove(`${ID}__hiddenWrapper`);
      clickedItem.remove();
      const controlBtn = document.querySelector(
        `.primary.amscroll-load-button:not(.${ID}__fakeBtn)`
      );
      controlBtn.style.display = 'flex';
      window.clikcedOnce = true;
    }
  });

  init();

  window.addEventListener('scroll', () => {
    pollerLite(
      [() => document.querySelector(".products-grid.products-grid[amscroll-page='2']")],
      () => {
        const controlBtn = document.querySelector(
          `.primary.amscroll-load-button:not(.${ID}__fakeBtn)`
        );
        if (!document.querySelector(`.${ID}__fakeBtn`) && window.clikcedOnce !== true) {
          controlBtn && controlBtn.insertAdjacentHTML('beforebegin', fakeBtn(ID));
        }

        if (!controlBtn) {
          const bodyElement = document.body;
          bodyElement.classList.remove(`${ID}__hiddenWrapper`);
        }
      }
    );
  });
};
