import setup from './services/setup';
import shared from './shared/shared';
import scrollingContainer from './components/scrollingContainer';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('#join_pkg');
  if (!document.querySelector(`.${ID}__scrolling-text-container`)) {
    targetPoint.insertAdjacentHTML('afterend', scrollingContainer(ID));
  }
};

export default () => {
  setup(); //use if needed

  init(); //
};
