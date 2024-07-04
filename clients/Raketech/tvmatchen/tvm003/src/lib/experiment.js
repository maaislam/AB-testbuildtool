import setup from './services/setup';

import shared from './shared/shared';

import modalWrapper from './components/modalWrapper';

const { ID, VARIATION } = shared;
const init = () => {
  const targetPoint = document.body;

  if (!document.querySelector(`.${ID}__validateUserModal`)) {
    targetPoint.insertAdjacentHTML('beforeend', modalWrapper(ID));
  }
};
export default () => {
  setup(); //use if needed
  console.log(ID);
  if (VARIATION === 'control') return;

  init();
};
