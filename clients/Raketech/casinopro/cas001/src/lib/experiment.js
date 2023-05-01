import casinoCards from './components/casinoCards';
import { casinoData } from './pageData';
import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

export default () => {
  setup(); //use if needed

  const anchorPoint = document.getElementById('header-container');

  const rectangleCardsData = casinoData.filter((item) => item.badge !== 'top casino');

  const squareCardsData = casinoData.filter((item) => item.badge === 'top casino');

  if (document.getElementById(`${ID}__casinocards-container`)) return;

  const casinoCardsContainer = document.createElement('div');
  casinoCardsContainer.id = `${ID}__casinocards-container`;
  casinoCardsContainer.classList.add('container');
  anchorPoint.insertAdjacentElement('afterend', casinoCardsContainer);

  casinoCardsContainer.insertAdjacentHTML(
    'afterbegin',
    casinoCards(ID, rectangleCardsData, 'rectangle')
  );
  casinoCardsContainer.insertAdjacentHTML('afterbegin', casinoCards(ID, squareCardsData, 'square'));
};
