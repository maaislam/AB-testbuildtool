import setup from './services/setup';

import shared from './shared/shared';
import getTopSlots from './helpers/getTopSlots';
import { addCssToPage, addJsToPage, pollerLite } from './helpers/utils';
import initSwiper from './helpers/initSwiper';
import { highlightSwiperConfig } from './helpers/swiperConfigs';
import highlightCards from './components/highlightCards';
import gaTracking from './services/gaTracking';

const { ID, VARIATION } = shared;

const init = async () => {
  const topStots = await getTopSlots();
  console.log('🚀topStots:', topStots);
  const currentPageSlug = window.location.pathname.split('/').pop();
  const currentSlots = topStots.filter((item) => item.reviewSlug !== currentPageSlug);
  console.log('🚀 ~ file: experiment.js:14 ~ init ~ currentSlot:', currentSlots);

  //render carousel

  const carouselAttachPoint =
    document.querySelector('[class*="ctaContainerSticky"]') ||
    document.querySelector('[class*="carouselContainer"]');

  if (document.querySelector(`.${ID}__highlightcards`)) return;

  carouselAttachPoint.insertAdjacentHTML(
    'afterend',
    `<section>${highlightCards(ID, currentSlots)}</section>`
  );

  initSwiper('.swiper-highlight', highlightSwiperConfig);
  const controlTcElem = document.querySelector('.footer__3SPRc');
  const clonedTcElem = controlTcElem.cloneNode(true);
  const tcFooterContainer = document.querySelector(`.${ID}__tc`);
  tcFooterContainer.appendChild(clonedTcElem);
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  setup(); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;
    if (target.closest('a[href*="/go/"]')) {
      const operatorName = target.href.split('/go/')[1];
      const insideCarousel = target.closest(`.${ID}__highlightcard`);
      gaTracking(`${operatorName} | Clicks on Operator${insideCarousel ? ' | In Carousel' : ''}`);
    } else if (target.closest('[data-opName]')) {
      const operatorName = target.dataset.opname;
      gaTracking(`${operatorName} | Clicks on Review | In Carousel`);
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

  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  pollerLite([() => window.Swiper !== undefined], () => {
    init();
  });
};
