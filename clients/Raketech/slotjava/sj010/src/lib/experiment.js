import setup from './services/setup';
import shared from './shared/shared';
import { modal } from './components/modal';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  if (document.querySelector(`.${ID}__modal`)) {
    document.querySelector(`.${ID}__modal`).remove();
  }
  document.body.insertAdjacentHTML('beforeend', modal(ID));
};

const modalOpen = () => {
  const modalElem = document.querySelector(`.${ID}__modal`);
  if (!modalElem.classList.contains(`${ID}__open`)) {
    modalElem.classList.add(`${ID}__open`);
  }
};

export default () => {
  setup();

  if (VARIATION === 'Control') {
    return;
  }

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__close`) || target.matches(`.${ID}__modal`)) {
      document.querySelector(`.${ID}__modal`).classList.remove(`${ID}__open`);
    }
  });

  init();
  observeDOM('iframe.game__iframe', modalOpen);
};
