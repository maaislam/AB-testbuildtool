import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import gameOverlay from './components/gameCard';

const { ID, VARIATION } = shared;
const MOUSE_ENTER_DELAY = 500;

const init = () => {
  console.log('hello');
};

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);

  const gameCards = document.querySelectorAll('.navigator-game-card');

  let mouseinTimer;

  gameCards.forEach((gameCard) => {
    //collect data from dom
    // step 1 Add hidden DOM

    gameCard.insertAdjacentHTML('afterbegin', gameOverlay(ID));

    gameCard.addEventListener('mouseenter', (e) => {
      const { target } = e;
      const hoveredCard = target.querySelector(`.${ID}__gamecard`);
      mouseinTimer = setTimeout(() => {
        hoveredCard.classList.remove('hide_content');
        console.log('mouse in on cards');
      }, MOUSE_ENTER_DELAY);
    });

    gameCard.addEventListener('mouseleave', (e) => {
      const { target } = e;
      const hoveredCard = target.querySelector(`.${ID}__gamecard`);
      clearTimeout(mouseinTimer);
      hoveredCard.classList.add('hide_content');
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
