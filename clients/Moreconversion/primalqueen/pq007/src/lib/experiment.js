import setup from './services/setup';
import shared from './shared/shared';
import redem from './components/redem';

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
};
