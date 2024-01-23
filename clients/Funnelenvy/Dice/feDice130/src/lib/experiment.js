import setup from './services/setup';
import shared from './shared/shared';
import modalStr from './components/modalStr';

const { ID, VARIATION } = shared;

export default () => {
  setup();
  console.log(ID);

  if (!document.querySelector(`.${ID}__modalContainer`)) {
    document.querySelector('body').insertAdjacentHTML('beforeend', modalStr(ID));
  }
};
