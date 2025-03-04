import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('#join_pkg');
  const howToUseElement = document.querySelector('.section_7');

  if (!document.querySelector(`.${ID}__howToUse`)) {
    targetPoint.insertAdjacentElement('afterend', howToUseElement);
    howToUseElement.classList.add(`${ID}__howToUse`);
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
