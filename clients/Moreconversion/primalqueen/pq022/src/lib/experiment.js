import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import wrapper from './components/wrapper';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.section_5');
  if (!document.querySelector(`.${ID}__videoWrapper`)) {
    targetPoint.insertAdjacentHTML('beforebegin', wrapper(ID));
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
