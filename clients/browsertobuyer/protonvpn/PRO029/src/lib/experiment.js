import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import createBillingDropdown from './helpers/createBillingDropdown';

const { ID, VARIATION } = shared;

const init = () => {
  createBillingDropdown();
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  init();
};
