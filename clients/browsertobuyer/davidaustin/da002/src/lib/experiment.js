import stockAvailability from './components/stockAvailability';
import { onUrlChange } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID } = shared;

const reset2 = () => {
  //Remove the in-stock filter added to the top
  const stockAvailabilityElem = document.querySelector(`.${ID}__stockAvailability`);
  if (stockAvailabilityElem) {
    stockAvailabilityElem.remove();
  }

  //Remove the additional class from the more filters wrapper
  const moreFilterWrapper = document.querySelector(`#Toolbar > div > .contents > .w-grid.${ID}__moreFiltersWrapper`);
  if (moreFilterWrapper) {
    moreFilterWrapper.classList.remove(`${ID}__moreFiltersWrapper`);
  }

  //Restore the filter content alignment
  const gridFilters = document.querySelectorAll('label[for*="product-gridfilter"]');
  gridFilters.forEach((gridFilter) => {
    const filterParent = gridFilter.closest('.w-grid');
    const filterWrapper = filterParent.querySelector(`.${ID}__filterWrapper`);
    const wrapperAddClasses = ['border', 'border-border-active'];

    if (filterWrapper) {
      //Restore original classes
      filterWrapper.classList.remove(`${ID}__filterWrapper`);
      filterWrapper.classList.add(...wrapperAddClasses);
    }

    //Restore the class of the grid element
    const filterWGridElem = filterWrapper?.closest('.w-grid');
    if (filterWGridElem) {
      filterWGridElem.classList.remove(`${ID}__gridContents`);
    }

    //Restore original class on the parent
    filterParent.classList.add('relative');
  });

  //Restore the sort-by filter design
  const sortByFilterElem = document.querySelector('input[id*="product-gridsort_bydropdown"]');
  if (sortByFilterElem) {
    const sortByFilterParent = sortByFilterElem.parentElement;
    const sortByFilterWrapper = sortByFilterElem.closest('.contents');

    if (sortByFilterParent) {
      sortByFilterParent.classList.remove(`${ID}__sortByFilterParent`);
    }

    if (sortByFilterWrapper) {
      sortByFilterWrapper.classList.remove(`${ID}__sortByFilterWrapper`);
    }
  }
};

const init = () => {
  //Add the in-stock filter to the top
  const moreFilterWrapper = document.querySelector('#Toolbar > div > .contents > .w-grid');
  moreFilterWrapper.classList.add(`${ID}__moreFiltersWrapper`);

  if (!document.querySelector(`.${ID}__stockAvailability`)) {
    moreFilterWrapper.insertAdjacentHTML('beforebegin', stockAvailability(ID));
  }

  //Align the filter-content with figma design
  const gridFilters = document.querySelectorAll('label[for*="product-gridfilter"]');
  gridFilters.forEach((gridFilter) => {
    const filterParent = gridFilter.closest('.w-grid');
    const filterWrapper = filterParent.querySelector('.z-20.absolute .bg-background');
    const wrapperRemoveClasses = ['border', 'border-border-active'];

    const applyBtn = filterWrapper.querySelector('button[form*="product-grid"][type="submit"][data-role="button"]');

    filterParent.classList.remove('relative');
    filterWrapper.classList.remove(...wrapperRemoveClasses);
    filterWrapper.classList.add(`${ID}__filterWrapper`);

    const filterWGridElem = filterWrapper.closest('.w-grid');
    filterWGridElem.classList.add(`${ID}__gridContents`);

    //Move apply button to the bottom of the filter-wrapper
    filterWrapper.insertAdjacentElement('beforeend', applyBtn);
  });

  //Update the sort-by filter design
  const sortByFilterElem = document.querySelector('input[id*="product-gridsort_bydropdown"]');
  const sortByFilterParent = sortByFilterElem.parentElement;
  const sortByFilterWrapper = sortByFilterElem.closest('.contents');

  sortByFilterParent.classList.add(`${ID}__sortByFilterParent`);
  sortByFilterWrapper.classList.add(`${ID}__sortByFilterWrapper`);
};

export default () => {
  setup();
  init();

  onUrlChange(() => {
    reset2(ID);
    init();
  });
};
