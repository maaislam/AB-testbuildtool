import setup from './services/setup';
import shared from './shared/shared';
import { bestSeller } from './components/bestSeller';

const { ID, VARIATION } = shared;
const init = () => {
  const desktopTragetElement = document.querySelector(
    '#main-navigation-wrapper li.dropdown.mega-menu #sub-menu-block'
  );
  const mobileTragetElement = document.querySelector(
    '#mobile-menu--dev-menu .mobile-menu-link__has-submenu'
  );

  document.querySelectorAll(`li.${ID}__menu-link`).forEach((item) => {
    item.remove();
  });

  desktopTragetElement.insertAdjacentHTML('beforeend', bestSeller(ID, 'desktop'));
  mobileTragetElement.insertAdjacentHTML('beforebegin', bestSeller(ID, 'mobile'));
};

export default () => {
  setup(); //use if needed

  if (VARIATION === 'control') return;

  init();
};
