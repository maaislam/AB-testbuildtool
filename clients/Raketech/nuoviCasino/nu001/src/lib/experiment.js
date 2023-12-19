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
      const casinoCardElem = casinoLink?.closest('.casino-table__data-row');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__grayscale`);
    });
  });
};

export default () => {
  setup();
  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('a[href*="/visita/"]') && target.closest('.casino-table')) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/visita/')[1];
      //const hasAffiliateLink = target.closest(`.${ID}__affiliate`);

      gaTracking(
        `${casinoName.replace(/\//g, '')} | CTA Clicks to Operator | Toplist${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        }`
      );

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
    } else if (target.closest('a[href*="/visita/"]') && !target.closest('.casino-table')) {
      const operatorHref = target.closest('a[href*="/visita/"]').href;
      const operatorName = operatorHref.split('/visita/')[1];
      gaTracking(`${operatorName.replace(/\//g, '')} | CTA Clicks to Operator`);
    }
  });

  const updateAffiliateLinks = () => {
    const casinoToplistItems = document.querySelectorAll('.casino-table .casino-table__data-row');
    casinoToplistItems.forEach((casinoToplistItem) => {
      const casinoNameElem = casinoToplistItem.querySelector('a.button.link-out');
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
