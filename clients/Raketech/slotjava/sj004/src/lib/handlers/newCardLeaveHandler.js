import shared from '../shared/shared';

const { ID } = shared;

const MOUSE_EXIT_DELAY = 300;

const newCardLeaveHandler = (e) => {
  const { target } = e;
  const hoveredCard = target.querySelector(`.${ID}__gameoverlay`);
  clearTimeout(window.mouseinTimer);
  hoveredCard.classList.add('fadeout');
  hoveredCard.classList.remove('fadein');
  setTimeout(() => {
    hoveredCard.classList.add('hide_content');
  }, MOUSE_EXIT_DELAY);
};

export default newCardLeaveHandler;
