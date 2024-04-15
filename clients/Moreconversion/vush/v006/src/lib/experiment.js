import setup from './services/setup';

import shared from './shared/shared';

const { ID } = shared;

const init = () => {
  const isMobile = window.innerWidth < 768;
  const searchBarSelector = isMobile
    ? '.header__row-mobile .header__icon-touch--search'
    : '.header__row-segment-desktop .header__icon-touch--search';
  const searchBar = document.querySelector(`${searchBarSelector}`);

  searchBar.classList.add(`${ID}__searchBar`);

  const htmlStr = `<span class='${ID}__placeHolder'>Search for Empress, Vibrator, Lube..</span>`;
  searchBar.insertAdjacentHTML('afterbegin', htmlStr);
};

export default () => {
  setup();

  console.log(ID);
  init();
};
