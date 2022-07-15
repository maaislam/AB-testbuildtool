//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util'

import { heroSection } from './components/hero';
// import { bannerSection } from './components/banner';

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
  document.querySelector('.static-home-slide .container-slide')
};

export default () => {
  //setup(); //use if needed


  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  

  pollerLite(['.static-home-slide .container-slide'], ()=>{
    setUniqueClass();
    // bannerSection('.header-sticker');
    heroSection('.static-home-slide .container-slide');
  })
 

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};


