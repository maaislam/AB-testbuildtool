import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData } from './data';
import shared from './shared/shared';

import clickHandler from './components/handler';
import obsIntersection from './observeIntersection';
import getStockData from './getStockData';

const { ID, VARIATION } = shared;

export default () => {
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
  getStockData(variantUrls).then((stockData) => {
    console.log(stockData);

    //add class to show out of stock
  });

  // console.log(variantUrls);
  // console.log(productName);
  // console.log(variants);
};
