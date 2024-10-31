import setup from './services/setup';
import shared from './shared/shared';
import { startTimer } from './helpers/utils';
import expTimer from './components/expTimer';

const { ID } = shared;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
const day = String(tomorrow.getDate()).padStart(2, '0');
const year = tomorrow.getFullYear();
const formattedDate = `${month}/${day}/${year}`;

const init = () => {
  const target = document.querySelector('.top-fix-bar');
  if (document.querySelector(`.${ID}__timer`)) {
    document.querySelector(`.${ID}__timer`).remove();
  }
  target && target.querySelector('.container').insertAdjacentHTML('beforeend', expTimer(ID));

  startTimer(ID, formattedDate);
};

export default () => {
  setup();
  init();
};
