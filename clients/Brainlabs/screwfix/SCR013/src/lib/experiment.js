//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';

import { sizeData } from './data';
import shared from './shared/shared';
import dropdownStr from './component/structure';
import clickHandler from './component/handler';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const preSelectFn = (size) => {
    const isElem = document.querySelector(`li a[data-size="${size.toUpperCase()}"]`);
    if (isElem) {
      isElem.classList.add('selected');
      document.querySelector(`.${ID}__dropdown-container .dropdown-toggle`).innerText = isElem.innerText.trim();
    }
  };
  const pageData = sizeData[window.location.pathname.split('-size')[0]];
  const src = window.location.pathname.split('-size')[0];
  const selectedSize = window.location.pathname.split(window.location.pathname.match(/(size).\d*\//gi))[1];
  console.log(pageData);
  document.querySelector('.pr__pricepoint').insertAdjacentHTML('afterend', dropdownStr(ID, src, pageData));
  clickHandler(ID);
  if (selectedSize) {
    preSelectFn(selectedSize);
  }
};
