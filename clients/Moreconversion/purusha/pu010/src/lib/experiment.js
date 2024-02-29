import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  console.log(ID);
};
