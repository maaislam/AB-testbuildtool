import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import desktopMenuWrapper from './components/desktopMenuWrapper';
import menuData from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const desktopTargetElement = document.querySelector('#mega-menu-shop > div');
  console.log(desktopTargetElement, 'desktopTargetElement');

  if (!document.querySelector(`.${ID}__desktopMenuWrapper`)) {
    desktopTargetElement.insertAdjacentHTML('afterbegin', desktopMenuWrapper(ID, menuData));
  }

  //text change for desktop menu
  const firstItemOfDesktop = document.querySelector('label[for="mega-menu-shop-toggle"]');
  if (firstItemOfDesktop) firstItemOfDesktop.innerText = 'Roses';
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return; //

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  init(); //use if needed
};
