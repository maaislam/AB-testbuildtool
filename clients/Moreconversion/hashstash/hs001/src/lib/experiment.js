import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { progressHeader } from './components/progressHeader';
import { progressBar } from './components/progressBar';
import { observeDOM } from './helpers/utils';

const { ID } = shared;

const init = () => {
  if (!document.querySelector('body .cart-drawer .free-shipping-bar')) {
    return;
  }

  console.log('trigger');
  //progree header add
  if (!document.querySelector(`body .cart-drawer .${ID}__progressHeader`)) {
    document
      .querySelector('body .cart-drawer .free-shipping-bar')
      .insertAdjacentHTML('beforebegin', progressHeader(ID));
  }

  //progress bar add
  if (!document.querySelector(`body .cart-drawer .${ID}__progress-wrapper`)) {
    document
      .querySelector('body .cart-drawer .free-shipping-bar')
      .insertAdjacentHTML('beforebegin', progressBar(ID));
  }
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed

  init();
  observeDOM('body .cart-drawer', init);
};
