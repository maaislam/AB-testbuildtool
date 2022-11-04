//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';
import clickHandler from './handler/clickHandler';

const { modelStructure, modalOverlay } = require('./component/structure');

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const collectData = {
};
  document.body.classList.add('modal-open');
  document.body.insertAdjacentHTML('beforeend', modalOverlay(ID));
  document.body.insertAdjacentHTML('beforeend', modelStructure(ID));
  clickHandler(ID, collectData);
};

//task:
//apply css control
