import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { sizeGuideStr } from './components/sizeGuideStr';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
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
  if (!document.querySelector(`.${ID}__sizeGuideContainer`)) {
    document
      .querySelector('body .product-description div[data-mce-fragment="1"]')
      .insertAdjacentHTML('beforebegin', sizeGuideStr(ID));
  }
};
