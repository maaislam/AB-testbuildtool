import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import gameOverlay from './components/gameOverlay';
import gameCards from './components/gameCards';
import gameDataArr from './gameData';

const { ID, VARIATION } = shared;
const MOUSE_ENTER_DELAY = 500;

const init = () => {
  console.log('hello');
  const attachPoint = document.getElementById('slotContainer');
  attachPoint.classList.add('hide_content');
  attachPoint.insertAdjacentHTML('beforebegin', gameCards(ID, gameDataArr));
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  init();
  const gameCardsElm = document.querySelectorAll(`.${ID}__gamecard`);

  let mouseinTimer;
  let mouseoutTimer;

  gameCardsElm.forEach((card) => {
    //collect data from dom
    // step 1 Add hidden DOM

    card.addEventListener('mouseenter', (e) => {
      const { target } = e;
      const hoveredCard = target.querySelector(`.${ID}__gameoverlay`);
      console.log(hoveredCard);
      clearTimeout(mouseoutTimer);
      hoveredCard.classList.remove('fadeout');
      mouseinTimer = setTimeout(() => {
        hoveredCard.classList.remove('hide_content');
        console.log('mouse in on cards');
      }, MOUSE_ENTER_DELAY);
    });

    card.addEventListener('mouseleave', (e) => {
      const { target } = e;
      const hoveredCard = target.querySelector(`.${ID}__gameoverlay`);
      clearTimeout(mouseinTimer);
      hoveredCard.classList.add('fadeout');
      mouseoutTimer = setTimeout(() => {
        hoveredCard.classList.add('hide_content');
      }, 500);

      console.log('mouse out off cards');
    });
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  //if (VARIATION === 'control') {
  //}

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...
};
