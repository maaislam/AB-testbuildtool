import setup from './services/setup';
import shared from './shared/shared';
import { freeWarranty } from './components/freeWarranty';
import { easyReturn, oneYearWarranty } from './data/icons';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('.product-single__description > h5');

  if (VARIATION === '3' || VARIATION === '4') {
    const text = VARIATION === '3' ? 'Free 1-Year Warranty' : 'Easy Free Returns';
    const icon = VARIATION === '3' ? oneYearWarranty : easyReturn;
    if (!document.querySelector(`.${ID}__freeWarranty`)) {
      targetElement.insertAdjacentHTML('beforebegin', freeWarranty(ID, icon, text));
    }
  }
};

export default () => {
  setup(); //use if needed

  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //
  init();
};
