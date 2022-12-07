import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData } from './data';
import shared from './shared/shared';
import { dropdownStr } from './components/structure';

import clickHandler from './helpers/handler';
import obsIntersection from './helpers/observeIntersection';
import getStockData from './helpers/getStockData';

const INTERSECTING_RATIO = 0.3;
const { ID, VARIATION } = shared;

export default () => {
  setup('Experimentation', `Screwfix - ${ID}`, shared);
  const selectedSize = window.location.pathname.split(
    window.location.pathname.match(/(size).\d*\//gi)
  )[1];
  document.body.addEventListener('click', ({ target }) => {
    clickHandler(shared, target, fireEvent, selectedSize);
  });

  document.body.addEventListener('input', ({ target }) => {
    if (target.matches('#sticky_qty') || target.matches('.pr__product #qty')) {
      fireEvent('User interacts with quantity on pdp', shared);
    }
  });

  //document.querySelector('.pr__product #qty').addEventListener('keyup', () => {});

  //console.log(ID);

  const compareBtnAnchor = document.querySelector('.pr__prices');
  const intersectionCallback = (entry) => {
    if (entry.isIntersecting && !document.querySelector(`.${ID}__seen`)) {
      entry.target.classList.add(`${ID}__seen`);
      fireEvent('Conditions Met', shared);
    }
  };

  obsIntersection(compareBtnAnchor, INTERSECTING_RATIO, intersectionCallback);
  const urlPathname = window.location.pathname;

  const noDelivery = document
    .querySelector('[id^="product_add_to_trolley"]')
    ?.classList.contains('btn--disabled');
  const noCollection = document
    .querySelector('[id^=add_for_collection_button]')
    ?.classList.contains('btn--disabled');

  if (noDelivery && noCollection) {
    fireEvent(
      `User viewed ${urlPathname.slice(0, urlPathname.lastIndexOf('/'))} - Out of stock`,
      shared
    );
  }
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
  const productName = urlPathname.slice(0, urlPathname.lastIndexOf('-size'));
  const variants = sizeData[productName];
  //console.log(productName, sizeData, sizeData[productName]);
  const variantUrls =
    variants?.length > 0 && variants.map(({ id, size }) => `${productName}-size-${size}/${id}`);

  //render at this point
  //console.log(variants, 'variants data', productName);

  document
    .querySelector('.pr__prices > div')
    .insertAdjacentHTML('afterend', dropdownStr(ID, productName, variants));

  getStockData(variantUrls).then((stockData) => {
    //console.log(stockData, 'stockdata');

    const notAvailable = stockData.filter(({ delivery, collection }) => !collection && !delivery);
    notAvailable.forEach((item) => {
      const isElem = document.querySelector(`[data-size="${item.sku}"]`);
      if (isElem) {
        //isElem.parentElement.classList.add(`${ID}__notAvailable`);
      }
    });

    //add class to show out of stock
  });
};
