import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { VARIATION } = shared;

const init = () => {
  const newsletter = document.querySelector('.newsletter');
  const targetElement = document.querySelector('.welcome');
  targetElement.insertAdjacentElement('afterend', newsletter);
};

export default () => {
  setup(); //use if needed

  const submitHandler = () => {
    pollerLite(
      [() => document.querySelector('.newsletter .message')?.textContent.includes('confirmation')],
      () => {
        gaTracking('Join Newsletter');
      }
    );
  };
  const formField = document.querySelector('form#mailing-list');
  formField.removeEventListener('submit', submitHandler);
  formField.addEventListener('submit', submitHandler);

  if (VARIATION === 'Control') return; //

  //-----------------------------
  //Put your experiment code here
  init(); //
};
