// import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  console.log(ID);
};

export default () => {
  // setup(); //use if needed
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  // if (VARIATION === 'control') {
  //   return;
  // }
  init();
};
