import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { HomePageBanner } from './Components/HomePageBanner';

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

  if (!document.querySelector(`.${ID}__homepage-banner`)) {
    document
      .querySelector('.shg-box-content > .shg-fw')
      .insertAdjacentHTML('beforebegin', HomePageBanner(ID));
  }
};
