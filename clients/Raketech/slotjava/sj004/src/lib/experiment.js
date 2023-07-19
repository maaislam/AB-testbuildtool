/*eslint-disable no-param-reassign */
import setup from './services/setup';
import shared from './shared/shared';

import gameCards from './components/gameCards';
import gameDataArr from './gameData';
import getTopSlots from './helpers/getTopSlots';
import modal from './components/modal';
import modalContents from './components/modalContents';
import { observeDOM, observeDivsInMiddle } from './helpers/utils';
import clickHandler from './handlers/clickHandler';

import searchInputHandler from './handlers/searchInputHandler';
import newCardEnterHandler from './handlers/newCardEnterHandler';
import newCardLeaveHandler from './handlers/newCardLeaveHandler';
import oldCardEnterHandler from './handlers/oldCardEnterHandler';
import oldCardLeaveHandler from './handlers/oldCardLeaveHandler';
import gameBtnsMobile from './components/gameBtnsMobile';

const { ID, VARIATION } = shared;

const attachPoint = document.getElementById('slotContainer');
const renderModal = async () => {
  const modalData = await getTopSlots();
  const modalInnerHtml = modalContents(ID, modalData);
  document.body.insertAdjacentHTML('afterbegin', modal(ID, modalInnerHtml));
};

const initStageOne = () => {
  if (document.querySelector(`.${ID}__gamecard`)) return;
  attachPoint.classList.add('hide_content');
  attachPoint.insertAdjacentHTML('beforebegin', gameCards(ID, gameDataArr));

  const gameCardsElm = document.querySelectorAll(`.${ID}__gamecard`);

  gameCardsElm.forEach((card) => {
    //step 1 Add hidden DOM

    card.addEventListener('mouseenter', newCardEnterHandler);

    card.addEventListener('mouseleave', newCardLeaveHandler);
  });
};
const initSecondStage = (mutation) => {
  attachPoint.classList.remove('hide_content');
  const gameCardsElm = document.querySelector(`.${ID}__gamecards`);
  gameCardsElm?.remove();
  if (mutation.target.matches('#slotContainer')) {
    //console.log(mutation);
    const oldGameCardsElms = document.querySelectorAll('.navigator-game-card');
    oldGameCardsElms.forEach((card) => {
      //step 1 Add hidden DOM
      card.classList.remove('col-4');
      card.classList.remove('col-md-3');
      card.classList.add('col-width');
      card.setAttribute('data-position', 'normal card');
      if (!card.querySelector('.game-buttons-mb')) {
        const gameLink = card.querySelector('a').href;
        const gameName = card.querySelector('.card__title').textContent;
        card.insertAdjacentHTML('beforeend', gameBtnsMobile(gameLink, gameName));
      }

      card.querySelector('.card__hover-info').style.visibility = 'hidden';
      card.removeEventListener('mouseenter', oldCardEnterHandler);
      card.removeEventListener('mouseleave', oldCardLeaveHandler);

      card.addEventListener('mouseenter', oldCardEnterHandler);
      card.addEventListener('mouseleave', oldCardLeaveHandler);
    });
  }
};

export default () => {
  setup(); //use if needed
  document.body.addEventListener('click', clickHandler);

  document.getElementById('slotNavigatorSearch').addEventListener('input', searchInputHandler);

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  renderModal();
  initStageOne();
  //check if device is mobile using matcmedia
  const isMobile = window.matchMedia('(max-width: 850px)').matches;
  if (isMobile) {
    const divElements = document.querySelectorAll(`.${ID}__gamecard`);
    observeDivsInMiddle(divElements);
  }

  observeDOM('#slotContainer', initSecondStage);
};
