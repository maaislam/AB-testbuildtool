import setup from './services/setup';
import shared from './shared/shared';
import modalInner from './components/modalInner';

const { ID } = shared;
const INIT_DELAY = 5000;
const ANIMATION_DURATION = 1200;

export default () => {
  setup(); //use if needed
  document.body.addEventListener('click', ({ target }) => {
    if (target.closest(`.${ID}__primarycta`)) {
      const overlay = document.querySelector(`.${ID}__overlay`);
      overlay.classList.add(`${ID}__closeoverlay`);
      setTimeout(() => {
        overlay.classList.add(`${ID}__hide`);
        overlay.innerHTML = '';
      }, ANIMATION_DURATION);
    } else if (
      target.closest(`.${ID}__close`) ||
      (target.closest(`.${ID}__overlay`) && !target.closest(`.${ID}__modal-inner`))
    ) {
      document.querySelector(`.${ID}__primarycta`).click();
    }
  }); //use if needed
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  //render popup
  const overlay = document.createElement('div');

  overlay.classList.add(`${ID}__overlay`, `${ID}__hide`);
  document.body.classList.add(`${ID}__body`);
  document.body.insertAdjacentElement('afterbegin', overlay);

  setTimeout(() => {
    overlay.insertAdjacentHTML('afterbegin', modalInner(ID));
    overlay.classList.remove(`${ID}__hide`);
  }, INIT_DELAY);
};
