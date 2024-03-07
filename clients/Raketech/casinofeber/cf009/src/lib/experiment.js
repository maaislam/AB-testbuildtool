import gaTracking from './services/gaTracking';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  // const capitalizeWords = (str) => {
  //   return str.replace(/\b\w/g, (char) => char.toUpperCase());
  // };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('target', target);
    if (target.closest('.toplist .cta-container a[data-type="button"]')) { //BUTTON
      const casinoName = target.closest('.toplist .cta-container a[data-type="button"]').dataset
        .operator;

      gaTracking(`${casinoName} CTA CTO (Button)`);
    } else if (target.closest('.toplist .logo-container a[data-type="logo"]')) { //LOGO
      const casinoName = target.closest('.toplist .logo-container a[data-type="logo"]').dataset
        .operator;

      gaTracking(`${casinoName} CTA CTO (Logo)`);
    } else if (target.closest('.toplist .cta-container a.cta-review')) { //REVIEW
      const casinoName = e.target
        .closest('.toplist .cta-container')
        .querySelector('a[data-type="button"]').dataset.operator;

      gaTracking(`${casinoName} CTA CTR (Button)`);
    }
  });

  document.body.addEventListener('pointerup', (e) => {
    if (e.target.closest('button.load-more') && VARIATION === 'Control') {
      gaTracking('Load More Casinos');
    }
  });
  if (VARIATION === 'Control') return;

  const INTERVAL_PERIOD = 1000;
  const targetEl = document.querySelector('.toplist-holder .load-more');

  const timer = setInterval(() => {
    if (!document.querySelector('.toplist-holder > .toplist.casino.show-full')) {
      targetEl.click();
    } else {
      clearInterval(timer);
    }
  }, INTERVAL_PERIOD);
};
