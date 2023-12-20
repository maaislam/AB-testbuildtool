import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { observeDOM } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const casino = document.querySelector('.mui-1xlzx9v');
  if (!casino) return;
  const casinoMessage = casino.cloneNode(true);
  if (casinoMessage) casinoMessage.id = `${ID}__casinoMessage`;

  const container = document.querySelectorAll('.mui-1v68uba')[1];

  if (container && !document.querySelector(`#${ID}__casinoMessage`)) {
    container.insertAdjacentElement('beforebegin', casinoMessage);
  }
};
export default () => {
  setup();
  document.body.addEventListener('click', ({ target }) => {
    if (target.closest('a[href*="/go/"]') && target.closest('.mui-1v68uba')) {
      const clickedElem = target.closest('a');
      const casionName = clickedElem.href.split('/go/')[1];
      gaTracking(`${casionName} | CTA Clicks to Operator| Button | Bottomlist`);
    }
  });

  if (VARIATION === 'Control') {
    return;
  }
  init();
  observeDOM('body', init);
};
