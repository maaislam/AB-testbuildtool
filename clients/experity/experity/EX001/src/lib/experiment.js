import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';
import formModal from './components/formModal';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('header');
  const formWrapper = document.querySelector('#marketing-right');
  const formElement = formWrapper.querySelector('p');

  if (!document.querySelector(`.${ID}__formModal`)) {
    targetPoint.insertAdjacentHTML('afterend', formModal(ID));
    const modalFormElement = document.querySelector(`.${ID}__from`);
    modalFormElement.insertAdjacentElement('beforeend', formElement);
  }
};
export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
