import { uspsWrapper } from './components/uspsWrapper';
import { uspsData } from './data/data';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //Add your custom code here

  const targetForm = document.querySelector('#AddToCartForm');
  if (!document.querySelector(`.${ID}__uspsWrapperContainer`)) {
    targetForm.insertAdjacentHTML('beforeend', uspsWrapper(ID, uspsData));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //

  init(); //use if needed
};
