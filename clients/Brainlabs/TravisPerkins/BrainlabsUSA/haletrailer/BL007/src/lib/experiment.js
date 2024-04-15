//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed
  document.body.classList.add(`${ID}`);
  document.body.classList.add(`${ID}-${VARIATION}`);
  console.log(`Test is running ID:${ID}, VARIATION:${VARIATION}`);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION == 'control') {

  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  //selectors
  //const postContentSelector = 'div.post-content';
};
