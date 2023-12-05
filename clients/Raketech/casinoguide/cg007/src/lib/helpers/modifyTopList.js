import { casinoLicenseData } from '../casinodata';
import shared from '../shared/shared';
import { getCroStorage } from './utils';

const modifyTopList = () => {
  const { ID } = shared;

  const data = getCroStorage(`${ID}__visitedLicence`);
  console.log('🚀 data:', data);
  if (!data) return;
  const visitedLicenses = getCroStorage(`${ID}__visitedLicence`) || [];
  const casinosOfVisitedLicenses = casinoLicenseData
    .filter((item) => visitedLicenses.length > 0 && visitedLicenses.includes(item.license))
    .map((item) => item.casino);
  console.log('🚀 casinosOfVisitedLicenses:', casinosOfVisitedLicenses);
  casinosOfVisitedLicenses.forEach((casino) => {
    console.log('casino:', casino);
    const brandListElem =
      document.querySelector(`img[alt*="${casino}"]`) ||
      document.querySelector(`img[alt*="${casino.split(' ').join('')}"]`);

    const casinoCardElem = brandListElem?.closest('.mui-229w2h');
    if (casinoCardElem) {
      casinoCardElem.style.display = 'none';
    }
    //casinoCardElem.style.display = 'none';
    //const casinoId = casinoCardElem?.dataset.toplistItem;
    //if (!casinoId) return;
    //const casinoCard = document.querySelectorAll(`[data-toplist-item="${casinoId}"]`);
    //casinoCard.forEach((card) => {
    ////eslint-disable-next-line no-param-reassign
    //card.style.display = 'none';
    ////card.style.filter = 'grayscale(100%)';
    //});
  });
};

export default modifyTopList;
