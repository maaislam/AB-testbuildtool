import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { cardWrapper } from './components/cardWrapper';
import { topCardsData } from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  const container = document.querySelector('.single-page');
  const targetPoint = container.querySelector('#topplista');
  const { children } = container;

  //eslint-disable-next-line no-plusplus
  for (let i = 1; i < children.length; i++) {
    const child = children[i];
    if (child.id === 'topplista') break;
    if (!child.classList.contains(`${ID}__cardWrapper`)) {
      child.classList.add(`${ID}__hidden`);
    }
  }

  if (!document.querySelector(`.${ID}__cardWrapper`)) {
    targetPoint.insertAdjacentHTML('beforebegin', cardWrapper(ID, topCardsData));
  }
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') return;

  init();
};
