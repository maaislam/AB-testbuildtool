import setup from './services/setup';
import shared from './shared/shared';
import { freeWarranty } from './components/freeWarranty';
import { easyReturn, oneYearWarranty } from './data/icons';
import image from './components/image';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement =
    document.querySelector('.product-single__description img[data-mce-fragment="1"]') ||
    document.querySelector('.product-single__description img[data-mce-src]');

  if (VARIATION === '1' || VARIATION === '2') {
    const imagePath =
      VARIATION === '1'
        ? 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/icons-v1.png?v=1722930772'
        : 'https://cdn.shopify.com/s/files/1/0464/9346/6777/files/icons-v2.png?v=1722931288';
    if (!document.querySelector(`.${ID}__image`)) {
      targetElement.insertAdjacentHTML('beforebegin', image(ID, imagePath));
    }
  }

  if (VARIATION === '3' || VARIATION === '4') {
    const text = VARIATION === '3' ? 'Free 1-Year Warranty' : 'Easy Free Returns';
    const icon = VARIATION === '3' ? oneYearWarranty : easyReturn;
    if (!document.querySelector(`.${ID}__freeWarranty`)) {
      targetElement.insertAdjacentHTML('beforebegin', freeWarranty(ID, icon, text));
    }
  }
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //
  init();
};
