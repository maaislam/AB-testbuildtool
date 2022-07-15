//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import deliveryMessageFn from './components/message';
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
  console.log('variation is running');
  const deliveryMessage = document.querySelector(`.${ID}__deliveryMessage`);

  document.querySelector(`body`).classList.add(`${ID}`);
  document
    .getElementById(`globalPDPDetailsContainer`)
    .classList.add(`${ID}__globalPDPDetailsContainer`);
  document
    .querySelector(`#mainProductDetailsContainer > .hr-under-delivery-delay`)
    .classList.add(`${ID}__hr-under-delivery-delay`);
  document
    .querySelector(`#mainProductDetailsContainer .delivery-informations`)
    .classList.add(`${ID}__delivery-informations`);

  deliveryMessage?.remove();

  if (VARIATION == 1) {
    document
      .querySelector(`#globalPDPDetailsContainer .buttons-block`)
      .insertAdjacentHTML(`afterend`, deliveryMessageFn(ID, 'Delivery in 5-6 days'));
  }

  if (VARIATION == 2) {
    document
      .querySelector(`#globalPDPDetailsContainer .buttons-block`)
      .insertAdjacentHTML(`afterend`, deliveryMessageFn(ID, 'Delivery in 7-10 days'));
  }
};
