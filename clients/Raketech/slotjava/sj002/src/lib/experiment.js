/*eslint-disable object-curly-newline */
import bookmakerCards from './components/bookmakerCards';
import bookmakerCarouselConfig from './configs/bookmakerBonusCarouselConfig';
import { bookmakerSwiperConfig } from './configs/swiperConfigs';
import initSwiper from './helpers/initSwiper';
import {
  addCssToPage,
  addJsToPage,
  getOperatorFromUrl,
  pollerLite
} from './helpers/utils';
import piwikTrack from './services/gaTracking';

import setup from './services/setup';
//import gaTracking from './services/gaTracking';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const carouselAttachPoint = document.querySelector('main section:nth-child(1)');

  if (document.querySelector(`.${ID}__bookmakercards`)) return;

  carouselAttachPoint.insertAdjacentHTML(
    'afterend',
    `<section>${bookmakerCards(ID, bookmakerCarouselConfig)}</section>`
  );

  initSwiper('.swiper-bookmaker', bookmakerSwiperConfig);
  const scrollLocations = [5, 11, 6, 13];
  scrollLocations.forEach((item, i) => {
    const paragraph = document.querySelectorAll('article h2')[item];
    paragraph.id = `scrollpos-${item}`;
    const academy = document.querySelectorAll(`.${ID}__bookmakercard`)[i];
    academy.dataset.scrollto = `scrollpos-${item}`;
    //academy.href = `#scrollpos-${item}`;
  });
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  setup(); //use if needed
  //gaTracking('Conditions Met'); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;
    //console.log('🚀target:', target);

    if (target.closest(`.${ID}__bookmakercard`)) {
      const highParent = target.closest(`.${ID}__bookmakercard`);
      const { title } = highParent.dataset;
      const scrollDiv = highParent.dataset.scrollto;

      const scrollToElem = document.getElementById(scrollDiv);
      scrollToElem.scrollIntoView();
      piwikTrack(`${title.replace(/(<([^>]+)>)/gi, '')} | Clicks on Academy`);
    } else if (target.closest('[href*="/slot-machine/"]')) {
      piwikTrack('Clicks to Free to Play Slots');
    } else if (target.closest('[href*="/casino-online-aams-adm/"]')) {
      piwikTrack('Clicks to Real Money Slots Slots');
    } else if (target.closest('[href*="/slot/"]')) {
      const url = target.closest('a').href;

      piwikTrack(`${getOperatorFromUrl(url, '/slot/', '/')} | Clicks to Slot Reviews`);
    } else if (target.closest('[href*="/visita/"]') && target.closest('.section_dark')) {
      const url = target.closest('a').href;
      const opName = getOperatorFromUrl(url, '/visita/', '/');
      piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Featured`);
    } else if (target.closest('[href*="/visita/"]') && target.closest('.casino-table')) {
      const url = target.closest('a').href;
      const opName = getOperatorFromUrl(url, '/visita/', '/');
      piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Toplist`);
    } else if (target.closest('[href*="/visita/"]') && target.closest('.casino-table-widget')) {
      const url = target.closest('a').href;
      const opName = getOperatorFromUrl(url, '/visita/', '/');
      piwikTrack(`${opName} | CTA Clicks to Operator (Bonus Intent) | Sidebar`);
    }
  });

  //-----------------------------
  //If control, bail out from here
  //-----------------------------

  if (VARIATION === 'Control') {
    return;
  }
  addJsToPage(swiperJs, `${ID}__swiperjs`);
  addCssToPage(swiperCss, `${ID}__swipercss`);
  pollerLite([() => window.Swiper !== undefined], () => {
    init();
  });
};
