import setup from './services/setup';

import shared from './shared/shared';
//import getTopSlots from './helpers/getTopSlots';
import { addCssToPage, addJsToPage, getBackgroundImageUrl, pollerLite } from './helpers/utils';
import initSwiper from './helpers/initSwiper';
import { highlightSwiperConfig } from './helpers/swiperConfigs';
import highlightCards from './components/highlightCards';
import gaTracking from './services/gaTracking';

const { ID, VARIATION } = shared;

const init = () => {
  //place DOM for carousel
  const anchorPoint = document.querySelector('.leftContainer__2YBrS');
  //get landing page slots
  const item1 = document.querySelectorAll('.container__3UvJN');
  const item2s = document.querySelectorAll('.container__31k4U');
  const allItems = [...item1, ...item2s];

  const slotRenderData = [];

  allItems.forEach((item) => {
    const isSlot = item.classList.contains('container__3UvJN');

    const title = isSlot
      ? item.querySelector('.title__3V-xL').textContent
      : item.querySelector('.contentRow__qCghi>p').innerText;
    const subTitle = isSlot ? item.querySelector('.description__2yK1S').textContent : '';
    const terms = isSlot ? item.querySelector('.terms__1r9NT').textContent : '';
    const badge = isSlot
      ? item.querySelector('.subTag__2v1dp').textContent
      : item.querySelector('.tag__25zcQ').textContent;
    const image = getBackgroundImageUrl(item);
    const link = item.href;
    const btnText = isSlot ? 'TILL CASINOT' : 'Läs mer';
    slotRenderData.push({
      title,
      subTitle,
      terms,
      badge,
      image,
      link,
      btnText
    });
  });
  console.log('slotRenderData', slotRenderData);
  if (document.querySelector('.swiper-highlight')) return;
  anchorPoint.insertAdjacentHTML('beforebegin', `${highlightCards(ID, slotRenderData)}`);

  initSwiper('.swiper-highlight', highlightSwiperConfig);

  const upperLink = document.querySelector('.upperLinksContainer__2gqzL');
  upperLink.closest('.col-12').classList.add(`${ID}__hide`);
};

export default () => {
  const swiperJs = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js';
  const swiperCss = 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css';
  setup(); //use if needed

  document.body.addEventListener('click', (ev) => {
    const { target } = ev;
    //console.log('🚀 ~ file: experiment.js:64 ~ document.body.addEventListener ~ target:', target);

    if (target.closest('a[href*="/go/"]')) {
      const operatorName = target.closest('a').href.split('/go/')[1];
      const insideCarousel = target.closest(`.${ID}__highlightcard`);
      const clickedElem = target.closest(`.${ID}__cta`) ? ' | Top Banner Button' : ' | Top Banner';
      gaTracking(`${operatorName} | Clicks to Operator ${insideCarousel ? clickedElem : ''}`);
    } else if (target.closest(`.${ID}__cta.${ID}__learnmore`)) {
      gaTracking('Clicks to learn more | Top Banner Button');
    } else if (
      !target.closest('a[href*="/go/"]') &&
      !target.closest(`.${ID}__cta`) &&
      target.closest(`.${ID}__highlightcard.${ID}__learnmore`)
    ) {
      gaTracking('Clicks to learn more | Top Banner');
    }

    if (VARIATION === 'Control') {
      if (target.closest('.contentRow__qCghi')) {
        gaTracking('Clicks to learn more | Top Banner Button');
      } else if (target.closest('.container__31k4U')) {
        gaTracking('Clicks to learn more | Top Banner');
      } else if (target.closest('.container__3UvJN')) {
        gaTracking('Clicks to operator | Top Banner');
      }
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
