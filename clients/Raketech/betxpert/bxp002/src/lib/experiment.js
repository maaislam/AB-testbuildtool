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

    if (target.closest('a[href*="/redirect"]')) {
      const href = target.closest('a').getAttribute('href');
      const clickedFromCarousel =
        target.closest(`.${ID}__bookmakercards`) && VARIATION !== 'control';
      gaTracking(`${clickedFromCarousel ? 'Carousel' : ''} ${getOperatorFromUrl(href)} cta Click`);
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
