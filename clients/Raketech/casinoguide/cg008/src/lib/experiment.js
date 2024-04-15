import setup from './services/setup';
import shared from './shared/shared';
import modal from './components/modal';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.insertAdjacentHTML('afterbegin', modal(ID));
};
