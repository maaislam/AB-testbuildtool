import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { messageStr } from './components/messageStr';

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

  if (document.querySelector(`.${ID}__row`)) {
    document.querySelector(`.${ID}__row`).remove();
  }
  document
    .querySelector('.addcart:not(.addcartbox) > .row')
    .insertAdjacentHTML('beforebegin', messageStr(ID));
};
