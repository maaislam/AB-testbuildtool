//import setup from './services/setup';
//import gaTracking from './services/gaTracking';
//import shared from './shared/shared';

const ID = 'HPEH001';

export default () => {
  document.documentElement.classList.add(ID);
  //gaTracking('Conditions Met'); //use if needed
  console.log('RUNNING...', ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};
