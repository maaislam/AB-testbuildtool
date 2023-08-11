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
  const isMobile = window.innerWidth < 887;
  carouselAttachPoint.insertAdjacentHTML(
    `${!isMobile ? 'afterend' : 'beforebegin'}`,
    `<section>${highlightCards(ID, currentSlots)}</section>`
  );

  initSwiper('.swiper-highlight', highlightSwiperConfig);
  //const controlTcElem = document.querySelector('.footer__3SPRc');
  //const clonedTcElem = controlTcElem.cloneNode(true);
  const tcFooterContainer = document.querySelector(`.${ID}__tc`);
  //tcFooterContainer.appendChild(clonedTcElem);
  const termsHtml =
    '<ul class="footer__3SPRc">Reklamlänk | 18+ | Välkomsterbjudanden gäller nya kunder | Spela ansvarsfullt | <span>&nbsp;</span><li><a href="https://stodlinjen.se" target="_blank" rel="noopener nofollow">stodlinjen.se</a> | <span>&nbsp;</span><a href="https://www.spelpaus.se" target="_blank" rel="noopener nofollow">spelpaus.se</a></li></ul>';
  tcFooterContainer.insertAdjacentHTML('beforeend', termsHtml);
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  setup(); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;

    if (target.closest('a[href*="/go/"]')) {
      const operatorName = target.closest('a').href.split('/go/')[1];
      const insideCarousel = target.closest(`.${ID}__highlightcard`);
      gaTracking(
        `${operatorName} | Clicks on Operator (Bonus Intent)${
          insideCarousel ? ' | In Carousel' : ''
        }`
      );
    } else if (target.closest(`.${ID}__revlink`)) {
      const operatorName = target.closest('a').dataset.opname;

      gaTracking(`${operatorName} | Clicks on Review | In Carousel`);
    } else if (
      target.closest('.campaignsWrapper__1X4H0') &&
      (target.closest('.logoContainer__2kEvL') || target.closest('[class^="logoContainer__"]'))
    ) {
      const operatorName = target.closest('a').href.split('/').pop();
      gaTracking(`${operatorName} | Clicks on Review | Sidebar`);
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
