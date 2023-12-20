/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { getCroStorage, setCroStorage } from './helpers/utils';
import affiliateLinksConfig from './affiliateLinksConfig';

const { ID, VARIATION } = shared;
const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';
const init = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(`a[data-oldhref*="${casino}"]`);
    casinoLinks.forEach((casinoLink) => {
      //console.log('🚀 ~ file: experiment.js:17 ~ casinoData.forEach ~ casinoLinks:', casinoLinks);
      const casinoCardElem =
        casinoLink?.closest('.casino-table__data-row') ||
        casinoLink?.closest('.casino-table-widget__row') ||
        casinoLink?.closest('.column.card-list__item');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__grayscale`);
    });
  });
};

const getAndSetFunc = (casinoName) => {
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
};

export default () => {
  setup();

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (
      (target.closest('a[href*="/visita/"]') || target.closest(`.${ID}__affiliate`)) &&
      target.closest('.casino-table')
    ) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/visita/')[1];
      //const hasAffiliateLink = target.closest(`.${ID}__affiliate`);

      if (target.closest('a.casino-table__casino-logo')) {
        gaTracking(
          `${casinoName.replace(/\//g, '')} | CTA Clicks to Operator (Logo) | Mainlist${
            target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
          }`
        );
      } else {
        gaTracking(
          `${casinoName.replace(/\//g, '')} | CTA Clicks to Operator (Button) | Mainlist${
            target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
          }`
        );
      }

      getAndSetFunc(casinoName);
    } else if (
      (target.closest('a[href*="/visita/"]') || target.closest(`.${ID}__affiliate`)) &&
      target.closest('.card-list .column')
    ) {
      const operatorHref = target.closest('a[href*="/visita/"]')?.href;
      const operatorName =
        operatorHref?.split('/visita/')[1] ||
        target.closest(`.${ID}__affiliate`).dataset.operator.toLowerCase().trim();
      gaTracking(`${operatorName.replace(/\//g, '')} | CTA Clicks to Operator | TopList`);

      getAndSetFunc(operatorName);
    } else if (
      (target.closest('a[href*="/visita/"]') || target.closest(`.${ID}__affiliate`)) &&
      !target.closest('.casino-table') &&
      !target.closest('.card-list .column')
    ) {
      const operatorHref = target.closest('a[href*="/visita/"]')?.href;
      const operatorName =
        operatorHref?.split('/visita/')[1] ||
        target.closest(`.${ID}__affiliate`).dataset.operator.toLowerCase().trim();

      if (target.closest('a.casino-table-widget__casino-logo')) {
        gaTracking(`${operatorName.replace(/\//g, '')} | CTA Clicks to Operator (Logo)`);
      } else {
        gaTracking(`${operatorName.replace(/\//g, '')} | CTA Clicks to Operator (Button)`);
      }

      getAndSetFunc(operatorName);
    }
  });

  document.addEventListener('pointerup', ({ target }) => {
    if (
      (target.closest('a[href*="/visita/"]') || target.closest(`.${ID}__affiliate`)) &&
      target.closest('nav#drawer')
    ) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/visita/')[1];

      if (target.closest('a.casino-table-widget__casino-logo')) {
        gaTracking(`${casinoName.replace(/\//g, '')} | CTA Clicks to Operator (Logo)`);
      } else {
        gaTracking(`${casinoName.replace(/\//g, '')} | CTA Clicks to Operator (Button)`);
      }

      getAndSetFunc(casinoName);
    }
  });

  const updateAffiliateLinks = () => {
    const casinoToplistItems = document.querySelectorAll('a.button.link-out');
    casinoToplistItems.forEach((casinoToplistItem) => {
      const casinoNameElem = casinoToplistItem;
      if (!casinoNameElem) return;
      const casinoHref = casinoNameElem.href;
      const casinoName = casinoHref?.split('/visita/')[1]?.replace(/[\/\-_]/g, '');
      const newUrl = affiliateLinksConfig[linkType][casinoName];

      casinoNameElem.setAttribute('data-oldhref', casinoHref);
      if (newUrl) {
        casinoNameElem.classList.add(`${ID}__affiliate`);
        casinoNameElem.href = newUrl;
      }
      //console.log('🚀casinoName:', casinoName);
    });
  };

  updateAffiliateLinks();

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
