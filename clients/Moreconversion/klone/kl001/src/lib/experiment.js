import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;
const linkObj = {
  1: '/products/buy-4-get-3-free-5-x-50ml',
  2: '/products/klone-scents-collection',
  3: '/products/klone-scents-collection',
  4: 'https://try.klonescents.com/bogo'
};
const init = () => {
  const targetPoint = document.querySelector('.banner__media.media.always-display');

  if (!document.querySelector(`.${ID}__btn`)) {
    targetPoint.insertAdjacentHTML(
      'beforeend',
      `<a class="${ID}__btn" href="${linkObj[VARIATION]}">SHOP THE SALE</a>`
    );
  }

  if (!document.querySelector(`.${ID}__image`)) {
    targetPoint.insertAdjacentHTML(
      'afterbegin',
      `<img class="${ID}__image" src="https://cdn-3.convertexperiments.com/uf/10041653/10041910/overlay_68d14c7fbec18.png"/>`
    );
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

  init();
};
