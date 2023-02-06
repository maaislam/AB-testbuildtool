import { setup, fireEvent } from '../../../../../../globalUtil/trackings/services';
import contactPage from './contactPage';
import shared from './shared/shared';
import observeDOM from './utils';

const { ID, VARIATION } = shared;

const init = (mutation) => {
  if (
    mutation &&
    mutation.addedNodes.nodeType === 1 &&
    !mutation.addedNodes.matches('#gatsby-focus-wrapper')
  ) {
    return;
  }
  //setup(); //use if needed

  console.log(ID);
  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION == 'control') {

  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const mainContent = document.getElementById('mainContent');

  mainContent.innerHTML = contactPage(ID);
};

export default () => {
  setup('Experimentation', `GoCardless - ${ID}`, shared);
  fireEvent('Conditions Met', shared);

  if (VARIATION === 'control') {
    return;
  }

  init();
  //observeDOM('#___gatsby', init);
};
