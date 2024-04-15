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
  //console.log('🚀 ~ file: experiment.js:14 ~ init ~ casinoData:', casinoData);
  casinoData.forEach((casino) => {
    const casinoLinks = document.querySelectorAll(`a[data-oldhref*="${casino}"]`);
    casinoLinks.forEach((casinoLink) => {
      //console.log('🚀 ~ file: experiment.js:17 ~ casinoData.forEach ~ casinoLinks:', casinoLinks);
      const casinoCardElem = casinoLink?.closest('.bb-box-wrapper');
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
      !target.closest('a[href*="/redirect/"]') &&
      target.closest(`.${ID}__affiliate`) &&
      target.closest('[data-ga-action="Operators > Bonus index"]')
    ) {
      const closestWrapper = target.closest('a');
      const casinoLink = closestWrapper.dataset.oldhref || closestWrapper.href;
      console.log('🚀 ~ document.body.addEventListener ~ casinoLink:', casinoLink);
      //const casinoName = casinoLink.split('/redirect/')[1];
      const casinoName = closestWrapper.dataset.gaLabel.replace(/[\/\-_]/g, '').toLowerCase();

      //const hasAffiliateLink = target.closest(`.${ID}__affiliate`);
      const clikedElem = target.closest('a').querySelector('img') ? 'logo' : 'button';

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
      target.closest('a[href*="/redirect/"]') &&
      !target.closest(`.${ID}__affiliate`) &&
      target.closest('[data-ga-action="Operators > Bonus index"]')
    ) {
      const operatorHref = target.closest('a[href*="/redirect/"]').href;
      console.log('🚀 ~ document.body.addEventListener ~ operatorHref:', operatorHref);
      //const casinoName = casinoLink.split('/redirect/')[1];
      const casinoLink = target.closest('a[href*="/redirect/"]');
      const operatorName = casinoLink.dataset.gaLabel.replace(/[\/\-_]/g, '').toLowerCase();
      const clikedElem = target.closest('a').querySelector('img') ? 'logo' : 'button';

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
    const casinoToplistItems = document.querySelectorAll(
      '[data-ga-action="Operators > Bonus index"] .bb-box-wrapper'
    );
    casinoToplistItems.forEach((casinoToplistItem) => {
      const casinoBtnElem = casinoToplistItem.querySelector('a[data-ga-action]');
      const casinoImgElems = casinoToplistItem.querySelectorAll('a[data-ga-label]');

      if (!casinoBtnElem) return;
      const casinoHref = casinoBtnElem.href;
      if (!casinoHref.includes('/redirect/')) return;
      //const casinoName = casinoHref.split('/redirect/operator/')[1].replace(/[\/\-_]/g, '');
      const casinoName = casinoBtnElem.dataset.gaLabel.replace(/[\/\-_]/g, '').toLowerCase();
      console.log('🚀 casinoName:', casinoName);

      const newUrl = affiliateLinksConfig[linkType][casinoName];
      //console.log('🚀newUrl:', newUrl);

      casinoBtnElem.setAttribute('data-oldhref', casinoHref);
      //casinoImgElem.setAttribute('data-oldhref', casinoHref);
      if (newUrl) {
        casinoBtnElem.classList.add(`${ID}__affiliate`);
        casinoBtnElem.setAttribute('data-name', casinoName);
        casinoBtnElem.href = newUrl;
        casinoImgElems.forEach((casinoImgElem) => {
          casinoImgElem.classList.add(`${ID}__affiliate`);
          casinoImgElem.setAttribute('data-name', casinoName);
          casinoImgElem.href = newUrl;
        });
      }
      //console.log('🚀casinoName:', casinoName);
    });
  };

  updateAffiliateLinks();

  //observeDOM('.toplist', () => {
  //updateAffiliateLinks();
  //if (VARIATION !== 'Control') {
  //init();
  //}
  //});
  //if (VARIATION === 'Control') {
  //return;
  //}

  //if (VARIATION === '3') {
  //addTurbonino(ID);
  //}

  init();
};
