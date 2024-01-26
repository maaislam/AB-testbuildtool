import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  console.log(ID);
  const INTERVAL_PERIOD = 1000;
  const targetEl = document.querySelector('.toplist-holder .load-more');

  const timer = setInterval(() => {
    if (!document.querySelector('.toplist-holder > .toplist.casino.show-full')) {
      targetEl.click();
    } else {
      clearInterval(timer);
    }
  }, INTERVAL_PERIOD);
};
