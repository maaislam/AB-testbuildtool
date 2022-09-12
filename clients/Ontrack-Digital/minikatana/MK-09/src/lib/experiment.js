//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { desktopStructure, mobileStructure } from './component/structure';

const { ID, VARIATION } = shared;

export default () => {
  //-----------------------------
  //f control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  document
    .querySelector('.adaptive_height.slide-pc img')
    ?.insertAdjacentHTML('beforebegin', desktopStructure(ID));

  document
    .querySelector('.adaptive_height.slide-mobile img')
    ?.insertAdjacentHTML('beforebegin', mobileStructure(ID));
};
