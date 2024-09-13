import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import data from './data/data';
import designWrapper from './components/designWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.product-block--sales-point');
  if (!document.querySelector(`.${ID}__designWrapper`)) {
    targetPoint.insertAdjacentHTML('afterend', designWrapper(ID, data));
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
