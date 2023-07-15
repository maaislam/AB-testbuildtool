import shared from '../shared/shared';

const { ID } = shared;

const MOUSE_EXIT_DELAY = 300;

const oldCardLeaveHandler = (e) => {
  const { target } = e;

  const lastParent = target.closest('.navigator-game-card');

  const hoveredCard = lastParent.querySelector(`.${ID}__gameoverlay`);
  //window.abortController.abort();
  clearTimeout(window.mouseinTimer);
  hoveredCard?.classList.add('fadeout');
  setTimeout(() => {
    const allHoveredCard = document.querySelectorAll(`.${ID}__gameoverlay`);
    allHoveredCard.forEach((card) => card.remove());
  }, MOUSE_EXIT_DELAY);
};

export default oldCardLeaveHandler;
