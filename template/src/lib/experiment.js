import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';

const ID = 'BLA-11';
const VARIATION = 1;

export default () => {
  setup();

  console.log(ID);
  // -----------------------------
  // If control, bail out from here
  // -----------------------------
  if (VARIATION == 'control') {
    return;
  }

  // -----------------------------
  // Write experiment code here
  // -----------------------------
  // ...
};
