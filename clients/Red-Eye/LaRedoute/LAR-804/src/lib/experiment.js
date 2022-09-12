// import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const initMain = () => {
  let giftContent = document.querySelector(`#giftCodeContent`);
  if (window.getComputedStyle(giftContent).display === 'none') {
    // Do something..
    document.querySelector(`#giftCodeTitle`).click();
  }
};

export default () => {
  // setup(); //use if needed

  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION === 'control') {
    return;
  }

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...

  document.body.classList.add(`${ID}`);
  initMain();

  if (VARIATION === 2) {
    document.querySelector(`#giftCodeTitle`).classList.add(`${ID}__giftCodeTitle`);
    document.querySelector(`#btnSubmitGiftCode`).classList.add(`${ID}__btnSubmitGiftCode`);
    document.querySelector(`#btnSubmitGiftCode`).innerText = 'Apply';
  }
};
