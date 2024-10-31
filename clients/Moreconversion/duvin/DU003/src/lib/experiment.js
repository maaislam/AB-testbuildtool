import setup from './services/setup';
import shared from './shared/shared';
import collectionWrapper from './components/collectionWrapper';
import collectiondata from './data/data';

const { ID } = shared;

const init = () => {
  const targetElement = document.querySelector('.bullet-slideshow');
  if (document.querySelector(`.${ID}__collection-wrapper`)) {
    document.querySelector(`.${ID}__collection-wrapper`).remove();
  }

  targetElement.insertAdjacentHTML('beforebegin', collectionWrapper(ID, collectiondata));
};

export default () => {
  setup();

  init();
};
