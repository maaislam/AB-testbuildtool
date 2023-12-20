import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { linkBox } from './Components/linkBox';

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
  if (!document.querySelector(`.${ID}__linkBox`)) {
    document.querySelector('.font-title-xxl-light').insertAdjacentHTML('afterend', linkBox(ID));
    //document.querySelector(`.${ID}__linkBox`).classList.add(`${ID}__show`);
  }
};
