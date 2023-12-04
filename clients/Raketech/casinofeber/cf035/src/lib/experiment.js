/*eslint-disable no-useless-escape */
/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { getCroStorage, observeDOM, setCroStorage } from './helpers/utils';
import affiliateLinksConfig from './affiliateLinksConfig';
import addTurbonino from './addTopCasino';

const { ID, VARIATION } = shared;
const linkType = VARIATION === 'Control' ? 'A Link' : 'B Link';
const init = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  //console.log('🚀 ~ file: experiment.js:14 ~ init ~ casinoData:', casinoData);
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(`a[data-oldhref*="${casino}"]`);
    casinoLinks.forEach((casinoLink) => {
      //console.log('🚀 ~ file: experiment.js:17 ~ casinoData.forEach ~ casinoLinks:', casinoLinks);
      const casinoCardElem = casinoLink?.closest('.toplist-item');
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
      !target.closest('a[href*="/spela/"]') &&
      target.closest(`.${ID}__affiliate`) &&
      target.closest('.toplist')
    ) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      const casinoName = casinoLink.split('/spela/')[1];

      //const hasAffiliateLink = target.closest(`.${ID}__affiliate`);
      const clikedElem = target.closest('a.img') ? 'logo' : 'button';

      gaTracking(
        `${linkType} | ${casinoName.replace(/\//g, '')} | CTA Clicks to Operator | Toplist${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        } (${clikedElem})`
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
      target.closest('a[href*="/spela/"]') &&
      !target.closest(`.${ID}__affiliate`) &&
      target.closest('.toplist')
    ) {
      const operatorHref = target.closest('a[href*="/spela/"]').href;
      const operatorName = operatorHref.split('/spela/')[1];
      const clikedElem = target.closest('a.img') ? 'logo' : 'button';
      gaTracking(
        `Default link | ${operatorName.replace(/\//g, '')} | CTA Clicks to Operator${
          target.closest(`.${ID}__grayscale`) ? ' | Greyscaled' : ''
        } (${clikedElem})`
      );
      const data = getCroStorage(`${ID}__visitedCasinos`);
      if (!data) {
        const casinoNameArr = [operatorName];
        setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
        init();
        return;
      }
      const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
      if (visitedCasinos.includes(operatorName)) return;
      visitedCasinos.push(operatorName);
      setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
      init();
    }
  });

  const updateAffiliateLinks = () => {
    const casinoToplistItems = document.querySelectorAll('.toplist .toplist-item');
    casinoToplistItems.forEach((casinoToplistItem) => {
      const casinoBtnElem = casinoToplistItem.querySelector('a.visit');
      const casinoImgElem = casinoToplistItem.querySelector('a.img');

      if (!casinoBtnElem || !casinoImgElem) return;
      const casinoHref = casinoBtnElem.href;
      if (!casinoHref.includes('/spela/')) return;
      const casinoName = casinoHref.split('/spela/')[1].replace(/[\/\-_]/g, '');

      const newUrl = affiliateLinksConfig[linkType][casinoName];
      //console.log('🚀newUrl:', newUrl);

      casinoBtnElem.setAttribute('data-oldhref', casinoHref);
      casinoImgElem.setAttribute('data-oldhref', casinoHref);
      if (newUrl) {
        casinoBtnElem.classList.add(`${ID}__affiliate`);
        casinoBtnElem.setAttribute('data-name', casinoName);
        casinoBtnElem.href = newUrl;
        casinoImgElem.classList.add(`${ID}__affiliate`);
        casinoImgElem.setAttribute('data-name', casinoName);
        casinoImgElem.href = newUrl;
      }
      //console.log('🚀casinoName:', casinoName);
    });
  };

  updateAffiliateLinks();

  observeDOM('.toplist', () => {
    updateAffiliateLinks();
    if (VARIATION !== 'Control') {
      init();
    }
  });
  if (VARIATION === 'Control') {
    return;
  }

  if (VARIATION === '3') {
<<<<<<< HEAD
=======
    addTurbonino(ID);
>>>>>>> adc7cc47aad39830cb8e54d351f7298175c2cc13
  }

  init();
};
