import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const targetPoint = document.querySelector('#join_pkg');
  const howToUseElement = document.querySelector('.section_7');

  if (!document.querySelector(`.${ID}__howToUse`)) {
    targetPoint.insertAdjacentElement('afterend', howToUseElement);
    howToUseElement.classList.add(`${ID}__howToUse`);
  }
};

export default () => {
  setup();

  init();
};
