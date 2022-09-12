//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import { pollerLite } from '../../../../../../globalUtil/util'
import {collectionSection} from './components/collections'

const { ID, VARIATION } = shared;

const setUniqueClass = () => {
  document.querySelector('body').classList.add(`${ID}`);
};

export default () => {
  //setup(); //use if needed

  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }
  setUniqueClass();

  pollerLite(['#MainContent .medium-up--hide'], ()=>{
    collectionSection('.hero-wrapper')
  })
};
