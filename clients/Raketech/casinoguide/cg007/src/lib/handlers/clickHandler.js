import { casinoLicenseData } from '../casinodata';
import modifyTopList from '../helpers/modifyTopList';
import renderSearchItems from '../helpers/renderSearchRes';
import updateAffLinks from '../helpers/updateAffLinks';
import { getCroStorage, setCroStorage } from '../helpers/utils';
import gaTracking from '../services/gaTracking';
import shared from '../shared/shared';

const clickHandler = (event) => {
  const { ID } = shared;
  const { target } = event;

  const closeModal = () => document.querySelector(`.${ID}__modal`)?.remove();
  if (target.closest('a[href*="/go/"]')) {
    const operatorName = target.closest('a').href.split('/go/')[1];
    const insideToplist = target.closest('[data-toplist-item]');
    gaTracking(
      `${operatorName} | Clicks on Operator (bonus intent)${insideToplist ? ' | Toplist' : ''}`,
      'Default Link'
    );
  } else if (target.closest('a[data-toplist-item-link]') && !target.closest('a[href*="/go/"]')) {
    const closestWrapper = target.closest('.toplistContent__2Iaiy');
    const titleElem = closestWrapper.querySelector('[data-toplist-brand]');
    const brandName = titleElem.dataset.toplistBrand;

    //const licenseName = casinoLicenseData.find((item) => item.casino === brandName).license;

    gaTracking(`${brandName} | Clicks to Operator (bonus intent) | Toplist`);
  } else if (
    target.closest(`.${ID}__modalstageone-button.accept`) ||
    target.closest(`.${ID}__modalstagetwo-button.back`)
  ) {
    const inStage1 = target.closest('.accept');
    const modal = document.querySelector(`.${ID}__modal`);
    if (inStage1) {
      modal.classList.add('stage-two');
      gaTracking('I have an Account | 1st Popup Button Click');
    } else {
      modal.classList.remove('stage-two');
      gaTracking('Close | 2nd Popup CTA Click');
    }
  } else if (target.closest(`.${ID}__modalstageone-button.deny`)) {
    closeModal();
    updateAffLinks('B Link');
    gaTracking("I don't have an Account | 1st Popup Button Click");
  } else if (target.closest(`.${ID}__close`)) {
    //close modal
    closeModal();

    updateAffLinks('A Link');
    const stageTwo = document.querySelector(`.${ID}__modal`)?.classList.contains('stage-two');
    gaTracking(`Close PopUp | ${stageTwo ? '2nd' : '1st'}  Popup Button Click`);
  } else if (target.closest(`.${ID}__modalstagetwo-button.submit`)) {
    gaTracking('Submit | 2nd Popup CTA Click');
    //get all checked inputs
    const checkedInputs = document.querySelectorAll(`.${ID}__searchitem input:checked`);
    checkedInputs.forEach((input) => {
      const { license, brand } = input.dataset;
      const data = getCroStorage(`${ID}__visitedLicence`);
      console.log('🚀 ~ file: clickHandler.js:41 ~ checkedInputs.forEach ~ data:', data);
      if (data) {
        const visitedLicenses = getCroStorage(`${ID}__visitedLicence`) || [];
        if (visitedLicenses.includes(license)) return;
        visitedLicenses.push(license);
        setCroStorage(`${ID}__visitedLicence`, visitedLicenses);
      } else {
        const licenceArr = [license];
        setCroStorage(`${ID}__visitedLicence`, licenceArr);
      }

      modifyTopList();
      closeModal();
      updateAffLinks('B Link');
      gaTracking(`${brand} | 2nd Popup Filter Click`);
    });
  } else if (target.closest('.clear-icon')) {
    const searchInput = document.querySelector(`#${ID}__search-input`);
    //search input clear
    searchInput.value = '';
    renderSearchItems(casinoLicenseData);
  }
};

export default clickHandler;
