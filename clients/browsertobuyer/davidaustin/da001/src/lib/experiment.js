/*eslint-disable max-len */
import inStock from './components/inStock';
import { reset } from './helpers/reset';
import { onUrlChange } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const checkStockInUrl = () => {
  const newUrl = new URL(window.location.href);

  const availability = newUrl.searchParams.get('filter.p.m.custom.availability');

  if (availability && availability.includes('Stock')) {
    return true;
  }
  return false;
};

const init = () => {
  if (checkStockInUrl()) {
    localStorage.setItem('inStock', 'true');
  } else {
    localStorage.setItem('inStock', 'false');
  }

  const productGrid = document.querySelector('.shopify-section-product-grid');
  productGrid.classList.add(`${ID}__productGrid`);

  const filterHeaderHTML = `<div class="${ID}__filterHeader">
    <p class="filter-text">Filters</p>
    <div class='${ID}__additionalFilters'></div>
  </div>`;

  if (!document.querySelector(`.${ID}__filterHeader`)) {
    //set the filter header with title and additional filters
    productGrid.insertAdjacentHTML('afterbegin', filterHeaderHTML);
  }

  const contentsWrapperElem = productGrid.querySelector('#Toolbar > div');
  const contentsElem = contentsWrapperElem.querySelector('.contents');
  const selectedFiltersWrapper = document.querySelector('#Toolbar > div:last-child');

  contentsWrapperElem.classList.add(`${ID}__contentsWrapper`);
  contentsElem.classList.add(`${ID}__contents`);
  selectedFiltersWrapper.classList.add(`${ID}__selectedFiltersWrapper`);

  const newContentsElem = document.querySelector(`.${ID}__contents`);
  const sortByLabelElem = document.querySelector('label[for*="product-gridsort_bydropdown"]');
  const grandParentElem = sortByLabelElem.parentElement.parentElement;

  //Move the sort by dropdown
  const additionalFiltersElem = document.querySelector(`.${ID}__additionalFilters`);
  grandParentElem.classList.add(`${ID}__sortWrapper`);
  additionalFiltersElem.insertAdjacentElement('afterbegin', grandParentElem);

  //Move the product count
  const productCountElem = contentsWrapperElem.querySelector('.contents .w-grid.gap-gutter');
  productCountElem.classList.add(`${ID}__hide`);
  const productCountText = productCountElem.textContent.trim();
  const newSortWrapperElem = document.querySelector(`.${ID}__sortWrapper`);

  if (!document.querySelector(`.${ID}__productCount`)) {
    newSortWrapperElem.insertAdjacentHTML('afterbegin', `<span class='${ID}__productCount'>${productCountText}</span>`);
  }

  //Move the more filters form to the new contents element (bottom of the filter)
  const moreFiltersFormElem = document.querySelector(`form[id*="FilterForm-template"]:not(.${ID}__moreFiltersForm)`);
  const newMoreFiltersFormElem = moreFiltersFormElem.cloneNode(true);
  const removeClasses = ['absolute', 'top-0', 'right-0', 'translate-x-full', 'w-drawer'];
  const formButtons = newMoreFiltersFormElem.querySelector('[data-buttons]');
  newMoreFiltersFormElem.classList.remove(...removeClasses);
  newMoreFiltersFormElem.classList.add(`${ID}__moreFiltersForm`);
  newMoreFiltersFormElem.id = `${ID}__moreFiltersForm`;
  newContentsElem.insertAdjacentElement('beforeend', newMoreFiltersFormElem);
  //moreFiltersFormElem.classList.add(`${ID}__hide`);
  formButtons.classList.add(`${ID}__hide`);

  //change order of more filter boxes
  const moreFiltersWrapperElem = document.querySelector(`.${ID}__moreFiltersForm .flex-1.overscroll-contain`);
  moreFiltersWrapperElem.classList.add(`${ID}__moreFiltersWrapper`);

  //align design of the toolbar
  const dataToolBarElem = document.querySelector('[data-toolbar]');
  const toolbarElem = document.querySelector('#Toolbar');
  dataToolBarElem.className = '';
  dataToolBarElem.classList.add(`${ID}__dataToolbar`);
  toolbarElem.classList.remove('top-header-full');

  //fix border color of each filter boxes
  const filterBoxes = document.querySelectorAll(`.${ID}__contents .bg-background.border.border-border-active`);
  filterBoxes.forEach((filterBox) => {
    filterBox.classList.remove('border', 'border-border-active', 'bg-background');
    filterBox.classList.add(`${ID}__filterBox`);
  });

  //fix border of more filter label box
  const moreFilterLabel = document.querySelector('label[for="Filters"]');
  const moreFilterLabelWrapper = moreFilterLabel.closest('.w-grid');
  moreFilterLabelWrapper.classList.add(`${ID}__hide`);

  //Add the in-stock filter to the top
  if (!document.querySelector(`.${ID}__inStock`)) {
    newContentsElem.insertAdjacentHTML('afterbegin', inStock(ID));
  }

  //move the selected filters badge
  newContentsElem.insertAdjacentElement('afterbegin', selectedFiltersWrapper);

  //Rose Type, Rose Colour and Planting location filter sets should be open by default
  const defaultFilters = document.querySelectorAll(`.${ID}__contents input[type="radio"][id*="product-gridfilter"]`);
  defaultFilters.forEach((defaultFilter) => {
    defaultFilter.removeAttribute('name');
    defaultFilter.checked = true;
    //Add event listener to toggle checked state
    defaultFilter.addEventListener('click', (e) => {
      e.preventDefault(); //Prevent default radio behavior
      defaultFilter.checked = !defaultFilter.checked; //toggle checked state
    });

    defaultFilter.click();
  });

  const ctrlForm = document.querySelector(`form[id*="product-grid"]:not(.${ID}__moreFiltersForm)`);
  const applyBtn = ctrlForm.querySelector('button[type="submit"]');

  //toggle and hide stock availability
  const stockAvailabilityElem = document.querySelector(`.${ID}__moreFiltersWrapper input[value="In Stock"]`);
  const stockAvailabilityList = stockAvailabilityElem.closest('li');
  stockAvailabilityList.classList.add(`${ID}__hide`);

  //toggle in-stock filter
  const toggle = document.getElementById('mode-toggle');
  toggle.addEventListener('change', () => {
    const toggleElem = document.querySelector('.toggle');

    if (toggle.checked) {
      toggleElem.classList.add('active-toggle');
      stockAvailabilityElem.checked = true;
      localStorage.setItem('inStock', 'true');
      if (applyBtn) applyBtn.click();
    } else {
      toggleElem.classList.remove('active-toggle');
      stockAvailabilityElem.checked = false;
      localStorage.setItem('inStock', 'false');
      if (applyBtn) applyBtn.click();
    }
  });

  //all checkboxes and event listener
  const allCheckboxes = document.querySelectorAll(`.${ID}__contents > div li input[type="checkbox"]`);
  allCheckboxes.forEach((checkbox) => {
    checkbox.classList.add(`${ID}__checkbox`);
    checkbox.addEventListener('change', (e) => {
      const { target } = e;
      //const { checked } = target;

      const listParentElem = target.closest('ul');
      const applyBtn = listParentElem.nextElementSibling;
      //const clearBtn = applyBtn.nextElementSibling;

      if (applyBtn) {
        applyBtn.click();
      }
    });
  });

  //more filters checkboxes and event listener
  const moreFltrCheckboxes = document.querySelectorAll(`.${ID}__moreFiltersForm li input[type="checkbox"]`);

  moreFltrCheckboxes.forEach((checkbox) => {
    checkbox.classList.add(`${ID}__checkbox`);
    checkbox.addEventListener('change', (e) => {
      const { target } = e;

      const value = target.value.trim();

      const ctrlCheckbox = ctrlForm.querySelector(`input[value='${value}']`);
      ctrlCheckbox.checked = target.checked;

      if (applyBtn) {
        applyBtn.click();
      }
    });
  });
};

export default () => {
  setup();
  init();

  onUrlChange(() => {
    reset(ID);
    init();
  });
};
