import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { button } from './components/button';

const { ID, VARIATION } = shared;
const init = (casinos) => {
  casinos.forEach((item) => {
    if (!item.querySelector(`.${ID}__buttonWrapper`)) {
      item.querySelector('.ranking-banner').insertAdjacentHTML('afterend', button(ID));
      const { casino } = item.dataset;
      const casinoButton = item.querySelector(`.${ID}__buttonWrapper a`);
      casinoButton.href = `https://casimaru.com/go/${casino}/`;
    }
  });
};
export default () => {
  setup();

  const casinos = document.querySelectorAll('.casino-ranking .block-wrapper');

  casinos.forEach((item) => {
    const btnEl = item.querySelector('.bottun-set-rev a.btn');
    const casinoName = btnEl.href.split('non-deposit-bonus/')[1].split('-no-deposit-')[0];
    item.setAttribute('data-casino', casinoName);

    item.querySelectorAll('a.btn').forEach((btn) => {
      if (btn.href.includes('/all-bonuses/non-deposit-bonus/')) {
        btn.setAttribute('data-attr', 'bonus');
      } else if (!btn.href.includes('/all-bonuses/non-deposit-bonus/')) {
        btn.setAttribute('data-attr', 'reviews');
      }
    });
  });

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('a.btn') && target.closest('a.btn').dataset.attr === 'bonus') {
      const { casino } = target.closest('.block-wrapper').dataset;
      gaTracking(`${casino} Click Bonus Page`);
    } else if (target.closest('a.btn') && target.closest('a.btn').dataset.attr === 'reviews') {
      const { casino } = target.closest('.block-wrapper').dataset;
      gaTracking(`${casino} Click Review Page`);
    } else if (target.closest(`.${ID}__buttonWrapper a.btn`)) {
      const { casino } = target.closest('.block-wrapper').dataset;
      gaTracking(`${casino} Click Banner Button`);
    }
  });

  if (VARIATION === 'control') return;

  init(casinos);
};
