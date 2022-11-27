import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData, crossIcon } from './data';
import shared from './shared/shared';
import { dropdownStr, fakeDeliveryButon } from './components/structure';

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

  const preSelectFn = (size) => {
    const isElem = document.querySelector(`li a[data-size="${size.toUpperCase()}"]`);
    if (isElem) {
      isElem.parentElement.classList.add('selected');
    } else {
      document
        .querySelector(`#add_for_collection_button_${selectedSize.toUpperCase()}`)
        .insertAdjacentHTML('beforebegin', fakeDeliveryButon(ID));
    }
  };

  const pageData = sizeData[window.location.pathname.split('-size')[0]];
  const src = window.location.pathname.split('-size')[0];
  const selectedUrl = window.location.pathname.split(
    window.location.pathname.match(/(size).\d*\//gi)
  )[0];

  const availableProduct = async () => {
    console.log('promise exerise', pageData, selectedUrl);
    let modifiedData = [];
    for (const key in pageData) {
      modifiedData.push({
        size: key,
        code: pageData[key],
        link: `${selectedUrl}size-${key}/${pageData[key].toLowerCase()}`
      });
    }

    const checkElem = await Promise.all(
      modifiedData.map(async (data) => {
        const url = data.link;
        const pr = await fetch(data.link);
        const responseTxt = await pr.text();
        return { responseTxt, url };
      })
    );

    const data = await Promise.all(
      checkElem.map((e, i) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(e.responseTxt, 'text/html');
        const elem = doc.querySelector('#product_add_to_trolley_image');
        if (elem) {
          return { isDelivery: true, link: e.url };
        }
      })
    );
    if (data) {
      const finalData = modifiedData.map((e, i) => {
        const isChecking = data.find((element) => element && element.link === e.link);
        if (isChecking) {
          e.isDelivery = true;
        }
        return e;
      });

      console.log(finalData);

      document
        .querySelector('.pr__prices > div')
        .insertAdjacentHTML('afterend', dropdownStr(ID, src, finalData, crossIcon));

      if (selectedSize) {
        preSelectFn(selectedSize);
      }
    }
  };
  availableProduct();
  // console.log(variantUrls);
  // console.log(productName);
  // console.log(variants);
};
