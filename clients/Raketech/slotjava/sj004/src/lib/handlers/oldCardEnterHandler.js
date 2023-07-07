import gameOverlay from '../components/gameOverlay';
import getGameDesc from '../helpers/getGameDesc';
import { extractNumberFromString } from '../helpers/utils';
import shared from '../shared/shared';

const { ID } = shared;

const MOUSE_ENTER_DELAY = 300;

const oldCardEnterHandler = (e) => {
  const { target } = e;
  const lastParent = target.closest('.navigator-game-card');

  //hoveredCard.classList.remove('fadeout');
  const gameName = target.querySelector('.card__title').textContent;
  const gameLink = target.querySelector('a').href;
  const gameGif = target.querySelector('img').src;
  const numOfLikes = extractNumberFromString(
    target.querySelector('.card__description').textContent
  );
  const gameId = target.querySelector('.card__favourite-button').dataset.slotId;
  console.log('🚀 ~ file: oldCardEnterHandler.js:22 ~ oldCardEnterHandler ~ gameId:', gameId);
  const gameDesc = '';
  const gameData = {
    gameName,
    gameLink,
    gameGif,
    numOfLikes,
    gameId,
    gameDesc
  };

  getGameDesc(gameLink).then((data) => {
    gameData.gameDesc = data;
    window.mouseinTimer = setTimeout(() => {
      lastParent.insertAdjacentHTML('afterbegin', gameOverlay(ID, gameData));
      const hoveredCard = lastParent.querySelector(`.${ID}__gameoverlay`);
      //hoveredCard.classList.add('stock-card');
      //extract game data from target
      hoveredCard.classList.remove('hide_content');
      hoveredCard.classList.add('fadein');
      //render overlay
    }, MOUSE_ENTER_DELAY);
  });
};

export default oldCardEnterHandler;
