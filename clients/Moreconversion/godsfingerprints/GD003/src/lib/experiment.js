import setup from './services/setup';
import shared from './shared/shared';
import collectionWrapper from './components/collectionWrapper';
import collectionData from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const heraderElement = document.querySelector('.header-container');
  if (!document.querySelector(`.${ID}__collectionWrapper`)) {
    heraderElement.insertAdjacentHTML('afterend', collectionWrapper(ID, collectionData));
  }
};

export default () => {
  setup();

  if (VARIATION === 'control') return;

  init();
};
