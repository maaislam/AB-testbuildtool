//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import modalStructure from './component/structure';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //..
  const leaveFromTop = (e) => {
    if (e.clientY < 0) {
      if (document.querySelector(`.modal:not(.${ID}__modal)`).classList.contains('is-active')) {
        return;
      }
      !document.querySelector(`.${ID}__modal`).classList.contains('is-active') &&
        document.querySelector(`.${ID}__modal`).classList.add('is-active');
      !document.body.classList.contains('modal-has-active') &&
        document.body.classList.add('modal-has-active');
    }
  };

  const modalClose = () => {
    document.querySelector(`.${ID}__modal`).classList.contains('is-active') &&
      document.querySelector(`.${ID}__modal`).classList.remove('is-active');
    document.body.classList.contains('modal-has-active') &&
      document.body.classList.remove('modal-has-active');
    //document.querySelector(`.${ID}__modal`).click();
  };
  document.querySelector('body').insertAdjacentHTML('beforeend', modalStructure(ID));
  document.addEventListener('mouseleave', leaveFromTop);
  document
    .querySelector(`.${ID}__modal .${ID}__modal__close`)
    .addEventListener('click', modalClose);
  //global clickHandler
  document.body.addEventListener('click', (e) => {
    if (e.target === document.querySelector(`.${ID}__modal.is-active`)) {
      modalClose();
    }
  });
};
