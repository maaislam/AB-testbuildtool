//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util';

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

  const initMain = () => {
    pollerLite(['#divGiftCodes'], () => {
      if (document.querySelector(`#giftCodeContent`).style.display == 'none') {
        document.querySelector(`#giftCodeTitle`).click();
      }
    });
  };

  if (VARIATION == 1) {
    document.body.classList.add(`${ID}`);
    initMain();
  }

  if (VARIATION == 2) {
    console.log(VARIATION);
    document.body.classList.add(`${ID}`);
    initMain();
    document.querySelector(`#btnSubmitGiftCode`).innerText = 'Apply';
  }
};
