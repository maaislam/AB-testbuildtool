/*eslint-disable object-curly-newline */
//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import clickHandler from './handler/clickHandler';
import newFormHandler from './handler/newFormHandler';

const { modelStructure, modalOverlay } = require('./components/structure');

const { ID } = shared;

export default () => {
  //setup(); //use if needed

  document.body.addEventListener('click', ({ target }) => {
    clickHandler(ID, target);
  });
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const removeCustomForm = () => {
    document.body.classList.remove('modal-open');
    document.querySelector(`#${ID}__switch-modal`)?.remove();
    document.querySelector(`.${ID}__modal-overlay`)?.remove();
  };

  if (sessionStorage.getItem(`${ID}__show-new-modal`)) {
    document.body.classList.add('modal-open');
    document.body.insertAdjacentHTML('beforeend', modalOverlay(ID));
    document.body.insertAdjacentHTML('beforeend', modelStructure(ID));
    document.querySelector(`.${ID}__switchForm`).addEventListener('submit', (e) => {
      e.preventDefault();
      newFormHandler(ID, removeCustomForm);
    });
  }
};

//task:
//apply css control
