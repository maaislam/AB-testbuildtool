/*eslint-disable object-curly-newline */
//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import clickHandler from './handler/clickHandler';
import newFormHandler from './handler/newFormHandler';

//const { modalOverlay } = require('./components/structure');

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
  const modalOverlay = (id) => {
    return `<div class="${id}__modal-overlay modal-backdrop fade in"></div>`;
  };

  const isErrorPage = document.querySelector('#error-pages');
  const addressForm = document.querySelector('#am_01');

  if (sessionStorage.getItem(`${ID}__show-new-modal`) && !isErrorPage && !addressForm) {
    document.body.classList.add('modal-open');
    document.body.insertAdjacentHTML('beforeend', modalOverlay(ID));
    //document.body.insertAdjacentHTML('beforeend', modelStructure(ID));
    document.getElementById(`${ID}__switch-modal`).classList.remove(`${ID}__hidden`);

    document.querySelector(`.${ID}__switchForm`).addEventListener('submit', (e) => {
      e.preventDefault();
      newFormHandler(ID);
    });
  } else if (isErrorPage || addressForm) {
    sessionStorage.removeItem(`${ID}__show-new-modal`);
  }
};

//task:
//apply css control
