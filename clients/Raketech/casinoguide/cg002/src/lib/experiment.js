import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (event) => {
    const { target } = event;

    if (target.closest('a[href*="/go/"]')) {
      const clickPosition =
        target.closest('[class*="overlay__27Csa"]') && !target.closest(`.${ID}__cta`)
          ? ' | Top Banner'
          : target.closest(`.${ID}__cta`)
          ? ' | Top Banner Button'
          : '';
      const url = target.closest('a').href;
      const casinoName = url.split('/go/')[1];
      gaTracking(`${casinoName} | CTA Clicks to Operator${clickPosition}`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'Control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  const anchorPoint = document.querySelector('.innerContainer__1XQ-1>.description__2yK1S');
  const newBtn = `<a data-toplist-item-link="/go/happycasino" class="${ID}__cta cta__1HzOA cta__3Rtjm" href="/go/happycasino" rel="noopener nofollow" target="_blank"><strong>Gå till Casino</strong></a>`;

  if (document.querySelector(`.${ID}__cta`)) return;
  anchorPoint.insertAdjacentHTML('afterend', newBtn);
  anchorPoint.closest('a').style.backgroundPosition = 'center -30px';
  document.querySelector(`.${ID}__cta`).style.maxWidth = '380px';
};
