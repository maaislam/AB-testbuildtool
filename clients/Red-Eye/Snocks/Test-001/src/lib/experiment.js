//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import globalObserver from './helper/globalObserver';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...

  document.querySelector(`body`).classList.add(`${ID}`);
  const notificationContainer = `<div class="${ID}__notifyContainer"></div>`;
  document.querySelector(`.${ID}__notifyContainer`)?.remove();
  document.body.insertAdjacentHTML('beforeend', notificationContainer);
  let initialCartItem = parseInt(document.querySelector(`.Header__CartCount`).textContent);
  document.querySelector(`.Header__CartCount`) &&
    globalObserver(ID, `.Header__CartCount`, initialCartItem);
};
