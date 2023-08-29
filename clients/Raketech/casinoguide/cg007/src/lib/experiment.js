/*eslint-disable no-param-reassign */
import setup from './services/setup';
import gaTracking from './services/gaTracking';
import shared from './shared/shared';
import { getCroStorage, setCroStorage } from './helpers/utils';

const { ID, VARIATION } = shared;

//const init = () => {
//const data = getCroStorage(`${ID}__visitedLicence`);
//console.log('🚀 ~ file: experiment.js:12 ~ init ~ data:', data);
//if (!data) return;
//const visitedLicenses = getCroStorage(`${ID}__visitedLicence`) || [];
//const casinosOfVisitedLicenses = casinoLicenseData
//.filter((item) => visitedLicenses.length > 0 && visitedLicenses.includes(item.license))
//.map((item) => item.casino);
//console.log(casinosOfVisitedLicenses);
//casinosOfVisitedLicenses.forEach((casino) => {
//const brandListElem = document.querySelector(`[data-toplist-brand="${casino}"]`);
//const casinoCardElem = brandListElem?.closest('.container__1Sosv');
//const casinoId = casinoCardElem?.dataset.toplistItem;
//if (!casinoId) return;
//const casinoCard = document.querySelectorAll(`[data-toplist-item="${casinoId}"]`);
//casinoCard.forEach((card) => {
////eslint-disable-next-line no-param-reassign
//card.style.display = 'none';
//});
//});
//};

const init = () => {
  const casinoData = getCroStorage(`${ID}__visitedCasinos`);
  if (!casinoData) return;
  casinoData.forEach((casino) => {
    const titleElem = document.querySelector(`[data-toplist-brand="${casino}"]`);
    const casinoCardElem = titleElem?.closest('[data-toplist-item]');
    const casinoId = casinoCardElem?.dataset.toplistItem;
    if (!casinoId) return;
    const casinoCards = document.querySelectorAll(`[data-toplist-item="${casinoId}"]`);
    casinoCards.forEach((card) => card.classList.add(`${ID}__hide`));
  });
};

export default () => {
  setup(); //use if needed

  //-----------------------------
  //If control, bail out from here
  //-----------------------------
  if (VARIATION === 'control') {
    return;
  }

  //-----------------------------
  //Write experiment code here
  //-----------------------------
  //...

  document.body.addEventListener('click', (e) => {
    const { target } = e;
    if (target.closest('a[href*="/go/"]') && target.closest('[data-toplist-item]')) {
      const closestWrapper = target.closest('.toplistContent__2Iaiy');
      const titleElem = closestWrapper.querySelector('[data-toplist-brand]');
      const casinoName = titleElem.dataset.toplistBrand;

      const data = getCroStorage(`${ID}__visitedCasinos`);
      if (!data) {
        const casinoNameArr = [casinoName];
        setCroStorage(`${ID}__visitedCasinos`, casinoNameArr);
        return;
      }
      const visitedCasinos = getCroStorage(`${ID}__visitedCasinos`) || [];
      if (visitedCasinos.includes(casinoName)) return;
      visitedCasinos.push(casinoName);
      setCroStorage(`${ID}__visitedCasinos`, visitedCasinos);
      gaTracking(`${casinoName} | Clicks to Operator (betting intent) | Toplist`);
      //init();
    } else if (target.closest('a[href*="/go/"]') && !target.closest('[data-toplist-item]')) {
      const operatorHref = target.closest('a[href*="/go/"]').href;
      const operatorName = operatorHref.split('/go/')[1];
      gaTracking(`${operatorName} | Clicks to Operator`);
    }
  });

  //document.body.addEventListener('click', (e) => {
  //const { target } = e;
  //if (target.closest('a[href*="/go/"]')) {
  //const closestWrapper = target.closest('.toplistContent__2Iaiy');
  //const titleElem = closestWrapper.querySelector('[data-toplist-brand]');
  //const brandName = titleElem.dataset.toplistBrand;
  //const licenseName = casinoLicenseData.find((item) => item.casino === brandName).license;
  //console.log('🚀 brandName:', brandName);
  //console.log('🚀 licenseName:', licenseName);
  //const data = getCroStorage(`${ID}__visitedLicence`);
  //if (!data) {
  //const licenceArr = [licenseName];
  //setCroStorage(`${ID}__visitedLicence`, licenceArr);
  //return;
  //}
  //const visitedLicenses = getCroStorage(`${ID}__visitedLicence`) || [];
  //if (visitedLicenses.includes(licenseName)) return;
  //visitedLicenses.push(licenseName);
  //setCroStorage(`${ID}__visitedLicence`, visitedLicenses);
  ////gaTracking(`${brandName} | Clicks to Operator `);
  //}
  //});

  init();
};
