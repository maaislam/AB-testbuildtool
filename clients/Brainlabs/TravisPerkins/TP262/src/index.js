import activate from './lib/experiment';
import { pollerLite } from './lib/helpers/utils';

const desktopNavMenus = document.querySelectorAll(
  '[data-test-id="header-nav-menu"] > div > div:not([data-test-id="nav-menu-bar"]) [data-test-id="nav-table-category"] [data-test-id="nav-table-category-list"] li a'
);
pollerLite(
  [
    '[data-test-id="header-nav-menu"] > div > div:not([data-test-id="nav-menu-bar"]) [data-test-id="nav-table-category"] [data-test-id="nav-table-category-list"] li a'
  ],
  activate
);
