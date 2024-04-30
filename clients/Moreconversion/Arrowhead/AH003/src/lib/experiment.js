import setup from './services/setup';
import shared from './shared/shared';
import { iconsArray } from './data/iconsArray';
import { UpvIcon } from './components/UpvIcon';

const { ID, VARIATION } = shared;

const init = () => {
  const targetElement = document.querySelector('#CollectionGrid');
  if (document.querySelector(`.${ID}__upvSection`)) {
    document.querySelector(`.${ID}__upvSection`).remove();
  }
  targetElement && targetElement.insertAdjacentHTML('beforebegin', UpvIcon(ID, iconsArray));
};

export default () => {
  setup();
  if (VARIATION === 'Control') {
    return;
  }
  init();
};
