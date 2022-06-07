import { setup, fireEvent } from '../../../../../globalUtil/trackings/services';

const ID = 'sno342';
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
  document.querySelector('body').classList.add(`${ID}__maincontainer`);

  const myElm = document.querySelector(`.${ID}__maincontainer`);
  myElm.remove();
};
