import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import trustWidget from './components/trustWidgwt';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const anchorPoint =
    document.querySelector('#iosc-summary') || document.querySelector('.cart-summary');
  if (document.querySelector(`.${ID}__tp-badge`)) return;
  anchorPoint.insertAdjacentHTML('afterend', `<div class="${ID}__tp-badge">${trustWidget()}</div>`);
};
