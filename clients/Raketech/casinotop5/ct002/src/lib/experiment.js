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
      const casinoCardElem = casinoLink?.closest('.fcrp-scfeatured');
      if (!casinoCardElem) return;
      casinoCardElem.classList.add(`${ID}__grayscale`);
    });
  });
};

export default () => {
  setup();
  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (
      (target.closest('a[href*="/visit/"]') || target.closest(`.${ID}__affiliate`)) &&
      target.closest('.tdi_26 .wpb_wrapper')
    ) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/visit/')[1];

      gaTracking(
        `${casinoName.replace(/\//g, '')} | CTA CTO | ${
          target.closest('img.scfeat_logo') ? 'Logo' : 'Button'
        }${target.closest(`.${ID}__grayscale`) && VARIATION === '1' ? ' | Yellow' : ''}`
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
    } else if (
      target.closest('button[onclick^="document.location="]') &&
      target.closest('.fcrp-scfeatured')
    ) {
      const parent = target.closest('.fcrp-scfeatured');
      const closestWrapper = parent.querySelector('a[href*="/visit/"]');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/visit/')[1];

      gaTracking(
        `${casinoName.replace(/\//g, '')} | CTA CTR ${
          target.closest(`.${ID}__grayscale`) && VARIATION === '1' ? ' | Yellow' : ''
        }`
      );
    }
  });

  const updateAffiliateLinks = () => {
    const casinoToplistItems = document.querySelectorAll('.tdi_26 .wpb_wrapper .fcrp-scfeatured');
    casinoToplistItems.forEach((casinoToplistItem) => {
      const casinoNameElem = casinoToplistItem.querySelector('a.fcrp-button');
      if (!casinoNameElem) return;
      const casinoHref = casinoNameElem.href;
      const casinoName = casinoHref.split('/visit/')[1].replace(/[\/\-_]/g, '');
      const newUrl = affiliateLinksConfig[linkType][casinoName];
      casinoNameElem.setAttribute('data-oldhref', casinoHref);
      if (newUrl) {
        casinoNameElem.classList.add(`${ID}__affiliate`);
        casinoNameElem.href = newUrl;
      }
    });
  };

  updateAffiliateLinks();

  if (VARIATION === 'Control') {
    return;
  }

  init();
};
