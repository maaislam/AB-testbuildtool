import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return;

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};
