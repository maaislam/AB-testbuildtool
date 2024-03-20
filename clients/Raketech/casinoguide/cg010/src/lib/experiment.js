import setup from './services/setup';
import shared from './shared/shared';
import gaTracking from './services/gaTracking';
import { onUrlChange } from './helpers/utils';
import listofCasinos from './data/data';

const { ID, VARIATION } = shared;

const init = () => {
  if (window.location.pathname !== '/natcasino' && window.location.pathname !== '/') return;

  const targetElement = document.querySelectorAll('a.mui-u18u1e[data-operator]');

  targetElement.forEach((item) => {
    const casinoName = item.dataset.operator;
    if (listofCasinos.includes(casinoName)) return;
    item.textContent = 'TILL BONUS';
  });
};

export default () => {
  setup();

  const isListenerAdded = document.body.dataset[`${ID}__isListenerAdded`];
  !isListenerAdded &&
    document.addEventListener('click', ({ target }) => {
      const pageType = window.location.pathname === '/' ? 'Home' : 'NatCasino';
      if (target.closest('a[href*="/go/"]') && target.closest('a[data-click-target="Toplist"]')) {
        const clickedElem = target.closest('a');
        const casionName = clickedElem.href.split('/go/')[1];
        gaTracking(`${casionName} CTO | ${pageType} | Button`);
      } else if (target.closest('a.mui-1hafamj') && target.closest('.MuiGrid-grid-md-4')) {
        const targetElement = target.closest('.MuiGrid-item');
        const casionName = targetElement.querySelector('a[href*="/go/"]').href.split('/go/')[1];
        gaTracking(`${casionName} CTR | ${pageType} | Button`);
      } else if (target.closest('img[data-nimg="1"]') && target.closest('.MuiGrid-grid-md-4')) {
        const targetElement = target.closest('.MuiGrid-item');
        const casionName = targetElement.querySelector('a[href*="/go/"]').href.split('/go/')[1];
        gaTracking(`${casionName} CTR | ${pageType} | Logo`);
      }
    });
  document.body.dataset[`${ID}__isListenerAdded`] = true;
  if (VARIATION === 'Control') {
    return;
  }

  setTimeout(init, 2000);
  onUrlChange(() => {
    setTimeout(init, 2000);
  });
};
