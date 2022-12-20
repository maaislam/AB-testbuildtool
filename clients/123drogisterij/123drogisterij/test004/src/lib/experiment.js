import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { mainSructure } from './components/mainStructure';

const { ID, VARIATION } = shared;

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

  document.body.insertAdjacentHTML('beforeend', mainSructure(ID));
};
