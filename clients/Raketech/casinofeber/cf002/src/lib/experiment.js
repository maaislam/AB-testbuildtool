/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { getCroStorage, removeAllDataAttributes, setCroStorage } from './helpers/utils';
import affiliateLinksConfig from './affiliateLinksConfig';

const { ID, VARIATION } = shared;
const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';
const init = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(`a[data-operator*="${casino}"]`);
    casinoLinks.forEach((casinoLink) => {
      const casinoCardElem = casinoLink?.closest('.operator-container');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__grayscale`);
    });
  });
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest(`.${ID}__affiliate`) && target.closest('.toplist')) {
      e.preventDefault();

      const closestWrapper = target.closest('a');

      const casinoName = closestWrapper.dataset.operator;
      const clickedElem = closestWrapper.querySelector('img') ? 'Logo' : 'Button';

      gaTracking(
        `${casinoName} | CTA CTO (${clickedElem}) ${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        }`
      );
      const rowContainer = target.closest('.operator-container');
      const clickElem = rowContainer.querySelector(
        `a.${ID}__hide[data-type ="${
          clickedElem === 'Logo' ? 'logo' : 'button'
        }"][data-element="toplist"]`
      );

      clickElem.click();

      const data = getCroStorage(`${ID}__visitedCasinos`);
      if (!data) {
        const casinoNameArr = [casinoName];
        setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
        init();
        return;
      }
      const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
      if (visitedCasinos.includes(casinoName)) return;
      visitedCasinos.push(casinoName);
      setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
      init();
    } else if (target.closest('.cta-review ') && target.closest('.toplist')) {
      const operatorHref = target.closest('a[href*="/svenska-casinon/"]').href;
      const operatorName = operatorHref.split('/svenska-casinon/')[1];
      gaTracking(
        `${operatorName.replace(/\//g, '')}  CTA CTR (Button) ${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        }`
      );
    } else if (
      target.closest(`[data-element="toplist"][data-type="logo"]:not(.${ID}__affiliate)`)
    ) {
      const casinoName = target.closest('a').dataset.operator;
      gaTracking(`${casinoName} | CTA CTO (Logo) `);
    } else if (
      target.closest(`[data-element="toplist"][data-type="button"]:not(.${ID}__affiliate)`)
    ) {
      const casinoName = target.closest('a').dataset.operator;
      gaTracking(`${casinoName} | CTA CTO (Logo) `);
    }
  });

  const updateAffiliateLinks = () => {
    const casinoToplistItems = document.querySelectorAll('.toplist > div');
    casinoToplistItems.forEach((casinoToplistItem) => {
      const cloneExist = casinoToplistItem.querySelector(`.${ID}__clonedImgElm`);
      const casinoNameElem = casinoToplistItem.querySelector(
        'a[data-element="toplist"][data-type="logo"]'
      );
      if (cloneExist || !casinoNameElem) return;

      const casinoName = casinoNameElem.dataset.operator;
      const affiliateLink = affiliateLinksConfig[linkType][casinoName];
      if (!affiliateLink) return;
      const originalImgElm = casinoToplistItem.querySelector(
        '[data-element="toplist"][data-type="logo"]'
      );
      const originalBtnElem = casinoToplistItem.querySelector(
        'a[data-element="toplist"][data-type="button"]'
      );

      //clone each element
      const clonedImgElm = originalImgElm.cloneNode(true);
      const clonedBtnElem = originalBtnElem.cloneNode(true);

      //remove all data attributes from cloned elements
      removeAllDataAttributes(clonedImgElm);
      removeAllDataAttributes(clonedBtnElem);

      //add operator as data attriibute to cloned elements
      clonedImgElm.dataset.operator = casinoName;
      clonedBtnElem.dataset.operator = casinoName;

      //add class to cloned elements
      clonedImgElm.classList.add(`${ID}__clonedImgElm`);
      clonedBtnElem.classList.add(`${ID}__clonedBtnElem`);
      clonedBtnElem.classList.add(`${ID}__affiliate`);
      clonedImgElm.classList.add(`${ID}__affiliate`);

      //add affiliate link to cloned elements

      clonedImgElm.href = affiliateLink;
      clonedBtnElem.href = affiliateLink;

      //hide original elements
      originalImgElm.classList.add(`${ID}__hide`);
      originalBtnElem.classList.add(`${ID}__hide`);

      //place next to original element
      originalImgElm.after(clonedImgElm);
      originalBtnElem.after(clonedBtnElem);
    });
  };

  updateAffiliateLinks();

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
