//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { buttonStrFn, buttonWithSizeFn } from './component/buttonStr';
import clickHandler from './helper/clickHandler';
import { globalObserver, changeDom } from './helper/observer';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  //console.log(ID, VARIATION);
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

  document.body.classList.add(`${ID}`);
  const controlBtn = document.querySelector(
    `#globalPDPDetailsContainer .add-to-basket-button > button`
  );

  if (VARIATION == 1) {
    let variationBtnStr = document.querySelector(`.${ID}__btnAtbWrapper`);
    variationBtnStr?.remove();
    document
      .querySelector(`#globalPDPDetailsContainer`)
      .insertAdjacentHTML('afterend', buttonStrFn(ID));
    globalObserver(ID, variationBtnStr, controlBtn, changeDom, `${ID}__btnAtbWrapper`);
  }

  if (VARIATION == 2) {
    let variationBtnSizeAtb = document.querySelector(`.${ID}__sizeAtbContainer`);
    variationBtnSizeAtb?.remove();

    const isExistArrow = document.querySelector(`[id*='filterSizeContainer_'] .lr-arrow`);
    const isArrow = window.getComputedStyle(isExistArrow).display === 'none' ? true : false;
    document
      .querySelector(`#globalPDPDetailsContainer`)
      .insertAdjacentHTML('afterend', buttonWithSizeFn(ID, isArrow));

    globalObserver(ID, variationBtnSizeAtb, controlBtn, changeDom, `${ID}__sizeAtbContainer`);
  }

  clickHandler(ID);
};
