import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData } from './data';
import shared from './shared/shared';
import { dropdownStr } from './components/structure';

import clickHandler from './components/handler';
import obsIntersection from './observeIntersection';
import getStockData from './getStockData';

const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `Screwfix - ${ID}`, shared);
  const selectedSize = window.location.pathname.split(
    window.location.pathname.match(/(size).\d*\//gi)
  )[1];
  document.body.addEventListener('click', ({ target }) => {
    clickHandler(shared, target, fireEvent, selectedSize);
  });

  document.querySelector('.pr__product #qty').addEventListener('keyup', (e) => {
    fireEvent('User interacts with quantity on pdp', shared);
  });

  //setup('Experimentation', `Screwfix - ${ID}`, shared);
  document.body.addEventListener('click', ({ target }) => {
    //clickHandler(shared, target, fireEvent);
  });

  console.log(ID);

  const compareBtnAnchor = document.querySelector('.pr__prices');
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      //fireEvent('Conditions Met', shared);
    }
  };

  obsIntersection(compareBtnAnchor, 0.3, intersectionCallback);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const { pathname } = window.location;
  const productName = pathname.slice(0, pathname.lastIndexOf('-size'));
  const variants = sizeData[productName];
  const variantUrls = variants.map(({ id, size }) => `${productName}-size-${size}/${id}`);

  //render at this point
  console.log(variants, 'variants data', productName);

  document
    .querySelector('.pr__prices > div')
    .insertAdjacentHTML('afterend', dropdownStr(ID, productName, variants));

  getStockData(variantUrls).then((stockData) => {
    console.log(stockData, 'stockdata');

    const notAvailable = stockData.filter((item) => {
      return item.delivery === false;
    });
    const { sku } = notAvailable[0];
    const isElem = document.querySelector(`[data-size="${sku}"]`);
    if (isElem) {
      isElem.parentElement.classList.add(`${ID}__notAvailable`);
    }

    //add class to show out of stock
  });
};
