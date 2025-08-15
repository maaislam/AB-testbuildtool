import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import data from './data/data';
import cardWrapper from './components/cardWrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const { pathname } = window.location;
  const hasPageData = data[pathname];
  const targetPoint = document.querySelector('.entry-content');
  if (hasPageData && !document.querySelector(`.${ID}__card-wrapper`)) {
    console.log(hasPageData, 'whyyy');
    targetPoint.insertAdjacentHTML('afterbegin', cardWrapper(ID, hasPageData));
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
