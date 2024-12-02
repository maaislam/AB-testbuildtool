import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  //Initialize experiment-specific functionality here
  const targetElement = document.querySelector('#join_pkg');
  targetElement.querySelectorAll('.package').forEach((item) => {
    if (!item.querySelector(`.${ID}__wrapper`)) {
      item
        .querySelector('.packge_button_outer')
        .insertAdjacentHTML(
          'afterend',
          `<div class="${ID}__wrapper">Lab Verified - <a href="https://cdn.shopify.com/s/files/1/0805/3971/3813/files/20240024_COA_of_Beef_Organs_Primal_Queen_Capsule_60ct..pdf?v=1722958015" target="_blank">View Results</a></div>`
        );
    }
  });
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

  init();
};
