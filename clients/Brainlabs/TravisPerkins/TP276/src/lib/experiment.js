import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { tradeContainer } from './components/tradeContainer';

const { ID, VARIATION } = shared;

const init = () => {
  const homePageContainer = document.querySelector('div[data-test-id="homepage-main"]');
  if (!document.querySelector(`.${ID}__tradeContainer`)) {
    homePageContainer.insertAdjacentHTML('beforeend', tradeContainer(ID));
  }
};

export default () => {
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed
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
  init();
};
