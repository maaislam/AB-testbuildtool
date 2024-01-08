import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const reelsSection = document.querySelector('#shopgracias-video-carousel').parentElement.parentElement;
  reelsSection.classList.add(`${ID}__reels`);
};

export default () => {
  setup(); //use if needed
  init();
};
