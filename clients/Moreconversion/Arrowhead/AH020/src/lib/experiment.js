import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import collectionArray from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('div[id*="quantity-template"]');
  const productHandle = window.location.pathname.split('/products/')[1];
  const isExisting = collectionArray.filter((item) => productHandle.includes(item.name));
  console.log(isExisting, 'isExisting');
  if (!document.querySelector(`.${ID}__colorOptions`)) {
    targetPoint.insertAdjacentHTML(
      'beforebegin',
      `<a class="${ID}__colorOptions" href="${
        isExisting && isExisting.length
          ? `${isExisting[0].link}`
          : '/collections/graphic-tee-shirts'
      }">See All Color Options</a>`
    );
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  init();
};
