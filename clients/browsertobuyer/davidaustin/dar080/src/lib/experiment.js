/*eslint-disable max-len */
import inStock from './components/inStock';
import controlTracking from './helpers/controlTracking';
import { reset } from './helpers/reset';
import reset2 from './helpers/reset2';
import { onUrlChange, trackGA4Event } from './helpers/utils';
import setup from './services/setup';
import shared from './shared/shared';
import variation2 from './variations/variation2';

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
  //VARIATION - 2
  if (VARIATION === '2') {
    variation2(ID);

    return;
  }

  //VARIATION - 1
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

  //Add arrow icon to the more filters label
  const moreFiltersLabels = moreFiltersWrapperElem.querySelectorAll('label[data-role="button"]');
  moreFiltersLabels.forEach((moreFiltersLabel) => {
    moreFiltersLabel.classList.add(`${ID}__moreFiltersLabel`);
    const moreFiltersLabelWrapper = moreFiltersLabel.closest('.border-b.border-border');
    moreFiltersLabelWrapper.classList.add(`${ID}__moreFiltersLabelWrapper`);
  });

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
  const newResetFilterBtn = `<div class="${ID}__resetFiltersBtn">Reset filters</div>`;
  const selectedFiltersWrapperElem = document.querySelector(`.${ID}__selectedFiltersWrapper`);
  selectedFiltersWrapperElem.insertAdjacentHTML('beforeend', newResetFilterBtn);

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
  const ctrlApplyBtn = ctrlForm.querySelector('button[type="submit"]');
  const clearBtn = ctrlForm.querySelector('[data-reset]');
  clearBtn?.classList.add(`${ID}__clearBtn`);

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
      if (ctrlApplyBtn) ctrlApplyBtn.click();
    } else {
      toggleElem.classList.remove('active-toggle');
      stockAvailabilityElem.checked = false;
      localStorage.setItem('inStock', 'false');
      if (ctrlApplyBtn) ctrlApplyBtn.click();
    }
  });

  //all checkboxes and event listener
  const allCheckboxes = document.querySelectorAll(`.${ID}__contents > div li input[type="checkbox"]`);
  allCheckboxes.forEach((checkbox) => {
    checkbox.classList.add(`${ID}__checkbox`);
    checkbox.addEventListener('change', (e) => {
      const { target } = e;

      const labelElem = target.closest('.w-grid')?.querySelector('label');
      const listParentElem = target.closest('ul');
      const label = labelElem.textContent.trim();

      let eventName = label;
      if (label.includes('Type of rose')) {
        eventName = 'Rose Type';
      }

      const action = `${eventName} Filter Change`;
      const eventLabel = target.value;
      eventName = `Filter ${eventName} Change`;
      trackGA4Event(eventName, action, eventLabel);

      const applyBtn = listParentElem.nextElementSibling;

      if (applyBtn) {
        applyBtn.click();
      }
    });
  });

  //more filters checkboxes and event listener
  const moreFltrCheckboxes = document.querySelectorAll(`.${ID}__moreFiltersForm li input[type="checkbox"], .${ID}__moreFiltersForm li input[type="radio"]`);

  moreFltrCheckboxes.forEach((checkbox) => {
    checkbox.classList.add(`${ID}__checkbox`);
    checkbox.addEventListener('change', (e) => {
      const { target } = e;

      const value = target.value.trim();

      const labelElem = target.closest(`.${ID}__moreFiltersLabelWrapper`)?.querySelector('label');
      const labelText = labelElem.textContent.trim();
      const eventName = `Filter ${labelText} Change`;
      const action = `${labelText} Filter Change`;
      const eventLabel = value;

      const ctrlCheckbox = ctrlForm.querySelector(`input[value='${value}']`);
      ctrlCheckbox.checked = target.checked;

      trackGA4Event(eventName, action, eventLabel);

      if (ctrlApplyBtn) {
        ctrlApplyBtn.click();
      }
    });
  });

  const sortCheckboxes = document.querySelectorAll(`.${ID}__sortWrapper input[type="radio"]:not([data-dropdown])`);
  sortCheckboxes.forEach((sortCheckbox) => {
    sortCheckbox.addEventListener('change', (e) => {
      const { target } = e;

      const eventName = 'Sort By Change';
      const action = 'Sort By Change';
      const eventLabel = target.value;

      trackGA4Event(eventName, action, eventLabel);
    });
  });
};

export default () => {
  setup();

  //Control Tracking
  if (VARIATION === 'control') {
    controlTracking();

    onUrlChange(() => {
      controlTracking();
    });

    return;
  }

  init();

  document.body.addEventListener('click', (e) => {
    const { target } = e;

    if (target.closest(`.${ID}__resetFiltersBtn`)) {
      const clearBtn = document.querySelector(`.${ID}__clearBtn`);

      clearBtn.click();
    } else if (target.closest(`.${ID}__moreFiltersLabel`)) {
      setTimeout(() => {
        const selectedFilterLabel = target.closest(`.${ID}__moreFiltersLabel`);
        const filterWrapper = target.closest(`.${ID}__moreFiltersLabelWrapper`);
        const checkboxInputElem = filterWrapper.querySelector('input[type="checkbox"]');

        if (checkboxInputElem.checked) {
          selectedFilterLabel.classList.add('active-toggle-icon');
        } else if (!checkboxInputElem.checked) {
          selectedFilterLabel.classList.remove('active-toggle-icon');
        }
      }, 100);
    }
  });

  onUrlChange(() => {
    if (VARIATION === '1') {
      reset(ID);
    } else if (VARIATION === '2') {
      reset2(ID);
    }

    init();
  });
};
