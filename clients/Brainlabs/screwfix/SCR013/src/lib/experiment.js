//import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import { sizeData } from './data';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
  const pageData = sizeData[window.location.pathname.split('-size')[0]];
  console.log('🚀 ~ file: experiment.js ~ line 22 ~ pageData', pageData);

  const anchorElem = document.querySelector('.pr__prices').firstElementChild;
};
