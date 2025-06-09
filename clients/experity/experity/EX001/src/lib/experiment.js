import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import backgroundVideo from './components/backgroundVideo';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('#marketing-template .spz-bg-wrap');
  if (!document.querySelector(`.${ID}__hero-video`)) {
    targetPoint.insertAdjacentHTML('afterbegin', backgroundVideo(ID));
  }
};
export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
