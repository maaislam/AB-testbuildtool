import setup from './services/setup';
import shared from './shared/shared';
import { startTimer } from './helpers/utils';
import expTimer from './components/expTimer';

const { ID, VARIATION } = shared;

const init = () => {
  const target = document.querySelector('.essential_countdown_annoucement_bar_wrapper');
  if (document.querySelector(`.${ID}__timer`)) {
    document.querySelector(`.${ID}__timer`).remove();
  }
  target && target.insertAdjacentHTML('beforebegin', expTimer(ID));

  startTimer(ID, 30, VARIATION);
};

export default () => {
  setup();

  init();
};
