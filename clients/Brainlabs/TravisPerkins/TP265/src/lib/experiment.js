import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed
  gaTracking('Conditions Met'); //use if needed
  console.log(ID);
  const desktopNavMenus = document.querySelectorAll('[data-test-id="header-nav-menu"] > div > div:not([data-test-id="nav-menu-bar"])');
  const data = desktopNavMenus.querySelectorAll('div > div > div');
};
