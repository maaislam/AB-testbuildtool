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

  if (sessionStorage.getItem(`${ID}__show-new-modal`)) {
    document.body.classList.add('modal-open');
    document.body.insertAdjacentHTML('beforeend', modalOverlay(ID));
    document.body.insertAdjacentHTML('beforeend', modelStructure(ID));
    document.querySelector(`.${ID}__switchForm`).addEventListener('submit', (e) => {
      e.preventDefault();
      newFormHandler(ID);
    });
  }
};

//task:
//apply css control
