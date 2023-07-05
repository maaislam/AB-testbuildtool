import shared from '../shared/shared';

const { ID } = shared;

const MOUSE_ENTER_DELAY = 300;

const newCardEnterHandler = (e) => {
  const { target } = e;
  const hoveredCard = target.querySelector(`.${ID}__gameoverlay`);

  hoveredCard.classList.remove('fadeout');
  window.mouseinTimer = setTimeout(() => {
    hoveredCard.classList.remove('hide_content');
    hoveredCard.classList.add('fadein');
  }, MOUSE_ENTER_DELAY);
};

export default newCardEnterHandler;
