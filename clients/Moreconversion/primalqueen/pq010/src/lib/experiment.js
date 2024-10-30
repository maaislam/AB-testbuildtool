import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite, startTimer } from './helpers/utils';
import expTimer from './components/expTimer';

const { ID, VARIATION } = shared;

const init = () => {
  const target = document.querySelector('.top-fix-bar');
  if (document.querySelector(`.${ID}__timer`)) {
    document.querySelector(`.${ID}__timer`).remove();
  }
  target && target.querySelector('.container').insertAdjacentHTML('beforeend', expTimer(ID));

  startTimer(ID, 30, VARIATION);
};

export default () => {
  setup(); //use if needed
  console.log(ID, 'ID');
  //gaTracking('Conditions Met'); //use if needed

  init();
};
