import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import fakeButton from './components/fakeButton';
import progressContainer from './components/progressContainer';

const { ID, VARIATION } = shared;
//document.querySelectorAll('ul.parsley-errors-list > li, .error')

const init = () => {
  document.body.classList.add('scc058');
  document.body.classList.add('SCC003');
  document.body.classList.add('is-decoy');
  const controlSubmitBtn = document.querySelector('#submit');
  if (!document.querySelector(`.${ID}__fakeBtn`)) {
    controlSubmitBtn.insertAdjacentHTML('beforebegin', fakeButton(ID));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);
  //gaTracking('Conditions Met'); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__fakeBtn`)) {
      const targetPoint = document.querySelector('.wrap.page-step-2 main');
      if (!document.querySelector(`.${ID}__decoy`)) {
        targetPoint.insertAdjacentHTML('afterbegin', progressContainer(ID));
      }
    }
  });

  init();
};
