import gaTracking from './services/gaTracking';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup();

  const capitalizeWords = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    //console.log('target', target);
    if (target.closest('a.cta')) {
      const casinoNameElem = target.closest('a');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];

      if (!casinoName) return;
      casinoName = casinoName.replace(/-/g, ' ');
      casinoName = capitalizeWords(casinoName);

      gaTracking(`${casinoName} CTA CTO (Button)`);
    } else if (target.closest('a[data-type="logo"]')) {
      const casinoNameElem = target.closest('a');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];

      if (!casinoName) return;
      casinoName = casinoName.replace(/-/g, ' ');
      casinoName = capitalizeWords(casinoName);

      gaTracking(`${casinoName} CTA CTO (Logo)`);
    } else if (target.closest('a.cta-review')) {
      const casinoNameElem = target.closest('a.cta-review');
      let casinoName = casinoNameElem.getAttribute('href').split('/')[2];
      casinoName = casinoName.replace(/-/g, ' ');
      casinoName = capitalizeWords(casinoName);

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
