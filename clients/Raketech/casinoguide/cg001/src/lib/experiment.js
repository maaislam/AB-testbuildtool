import { addJsToPage } from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';

import shared from './shared/shared';

const { ID, VARIATION } = shared;
const init = () => {
  if (window.location.pathname.includes('/casino-utan-konto')) return;
  const timeNow = Date.now();
  console.log('timeNow:', timeNow);
  const jsUrl = `https://cdn.inbanner.com/w/js/pxpCx.js?cachebuster=${timeNow}`;
  const widget = 'https://inbanner.com/0/widgets/js/locale:sv_SE/currency:SEK';
  const neBtnHtml = `<a href="https://record.multibrandaffiliates.com/_xe4gQse6mjqUcyqUL4Bc9GNd7ZgqdRLk/1/" class="${ID}__inbanner-btn inbanner-link" inbanner-widget="178" locale="sv_SE" currency="SEK" rel="954" inbanner-affcampaign="412" style="width: 100%;"><strong class="inbanner__2fQYe"><strong>Till Casinot</strong></strong></a>`;
  const speedyCasinoCards = document.querySelectorAll('[data-toplist-item="39601"]');

  speedyCasinoCards.forEach((card) => {
    const btn = card.querySelector('a[data-toplist-item-link="/go/speedycasino"]');
    btn.style.display = 'none';
    if (card.querySelector(`.${ID}__inbanner-btn`)) return;
    btn.insertAdjacentHTML('afterend', neBtnHtml);
  });

  if (
    !document.querySelector(
      'script[src="https://inbanner.com/0/widgets/js/locale:sv_SE/currency:SEK"]'
    )
  ) {
    addJsToPage(widget, `${ID}__jsmain`);
  }
  addJsToPage(jsUrl, `${ID}__jsmain1`);
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('[href*="/go/speedycasino"]') || target.closest('[inbanner-widget]')) {
      gaTracking('User Clicks Speedycasino');
    }
    if (target.closest('a[href*="/go/"]')) {
      const url = target.closest('a').href;
      const casinoName = url.split('/go/')[1];
      gaTracking(`${casinoName} | CTA Clicks to Operator`);
    }
  });
  if (VARIATION === 'Control') {
    //check if uttan konto page
    if (window.location.pathname.includes('/casino-utan-konto')) {
      //render fake button & hide original
      const originalSpeedyCasino = document.querySelectorAll('[href*="/go/speedycasino"]');
      const fakeBtn = `<a data-toplist-item-link="/go/speedycasino" class="${ID}__fakebtn cta__1HzOA cta__3Rtjm" href="/go/speedycasino" rel="noopener nofollow" target="_blank"><strong>Till Casinot</strong></a>`;
      originalSpeedyCasino.forEach((btn) => {
        btn.insertAdjacentHTML('afterend', fakeBtn);
        //eslint-disable-next-line no-param-reassign
        btn.style.display = 'none';
      });
    }
    return;
  }

  init();
};
