import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import scrollingContainer from './components/scrollingContainer';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('#join_pkg');
  if (!document.querySelector(`.${ID}__scrolling-text-container`)) {
    targetPoint.insertAdjacentHTML('afterend', scrollingContainer(ID));
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

  init(); //
};
