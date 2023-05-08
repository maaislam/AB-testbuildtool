/*eslint-disable object-curly-newline */
import bookmakerCards from './components/bookmakerCards';
import bookmakerCarouselConfig from './configs/bookmakerBonusCarouselConfig';
import { bookmakerSwiperConfig, bookmakerSwiperConfigMob } from './configs/swiperConfigs';
import initSwiper from './helpers/initSwiper';
import {
  addCssToPage,
  addJsToPage,
  getOperatorFromUrl,
  isMobile,
  pollerLite
} from './helpers/utils';
import gaTracking from './services/gaTracking';
import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  //setup for bookmaker section
  const bookmakerCardsAttachPoint = document.querySelector('.card-block-border-mockup');

  if (document.querySelector(`.${ID}__bookmakercards`)) return;
  const firstBmposition = isMobile() ? 'beforebegin' : 'beforebegin';
  bookmakerCardsAttachPoint.insertAdjacentHTML(
    firstBmposition,
    `<div class="card bm-carousel">${bookmakerCards(ID, bookmakerCarouselConfig)}</div>`
  );
  //init bookmaker swiper
  const bookmakersSwiperConfig = isMobile() ? bookmakerSwiperConfigMob : bookmakerSwiperConfig;
  initSwiper('.swiper-bookmaker', bookmakersSwiperConfig);
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';

  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;

    if (
      target.closest(`.${ID}__bonus-intent`) ||
      target.closest('[data-ga-action="Operator bonus list"]')
    ) {
      const href = target.closest('a').getAttribute('href');
      const operator =
        VARIATION !== 'control'
          ? target.closest('a').getAttribute('data-operator')
          : getOperatorFromUrl(href);
      gaTracking(`${operator} | Bonus Intent CTA Click`);
    } else if (target.closest('.bet-intent') || target.closest('.pick-odds')) {
      const operator =
        target.closest('a').getAttribute('data-operator') ||
        target.closest('a').getAttribute('data-ga-label');
      gaTracking(
        `${operator} | Bet Intent ${
          target.closest('.bet-intent') ? 'Green CTA' : 'Odd & Logo'
        } Click `
      );
    } else if (
      target.closest('.seeallnews') ||
      target.closest(`.${ID}__newsitem`) ||
      (target.closest('[data-ga-action="Content carousel"]') && target.closest('a'))
    ) {
      gaTracking('Clicks to News');
    } else if (target.closest('.list-link') || target.closest('[href="/ekspert/tips"]')) {
      gaTracking('Clicks To Tips');
    } else if (target.closest(`[href="/bookmakere/bonus"].${ID}__learnmore`)) {
      gaTracking('Clicks to all bonus page');
    } else if (
      target.closest('li.nav-item') &&
      target.closest('.ajax-nav-tabs') &&
      target.closest('.current-picks-widget')
    ) {
      gaTracking(`${target.innerText} Filter Clicks`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  if (VARIATION === 'control') {
    return;
  }

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);

  pollerLite([() => window.Swiper !== undefined], () => {
    init();
  });
};
