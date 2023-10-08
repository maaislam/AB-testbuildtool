import shared from './shared/shared';
import { data } from './helpers/data/data';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const desktopNavMenus = document.querySelectorAll(
    '[data-test-id="header-nav-menu"] > div > div:not([data-test-id="nav-menu-bar"]) [data-test-id="nav-table-category"] [data-test-id="nav-table-category-list"] li a'
  );
  desktopNavMenus?.forEach((menu) => {
    const itemUrl = menu?.getAttribute('href').trim();
    const matchingObj = data[itemUrl];
    if (matchingObj?.orangeLabel && VARIATION === '1' && menu.classList.contains(`${ID}__remove`)) {
      menu.classList.remove(`${ID}__remove`);
    } else {
      matchingObj && menu.classList.add(`${ID}__remove`);
    }
  });
};

export default () => {
  init();
  observeDOM('body', init);
};
