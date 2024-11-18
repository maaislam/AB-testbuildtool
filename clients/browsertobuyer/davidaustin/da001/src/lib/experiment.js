import setup from './services/setup';
import shared from './shared/shared';

const { ID, VARIATION } = shared;

const init = () => {
  const productGrid = document.querySelector('.shopify-section-product-grid');
  productGrid.classList.add(`${ID}__productGrid`);

  const contentsWrapperElem = productGrid.querySelector('#Toolbar > div');
  const contentsElem = contentsWrapperElem.querySelector('.contents');
  contentsWrapperElem.classList.add(`${ID}__contentsWrapper`);
  contentsElem.classList.add(`${ID}__contents`);

  const dataGridElem = document.querySelector('ul[data-grid]');
  const sortByLabelElem = document.querySelector('label[for*="product-gridsort_bydropdown"]');
  const grandParentElem = sortByLabelElem.parentElement.parentElement;

  dataGridElem.insertAdjacentElement('beforebegin', grandParentElem);

  const newContentsElem = document.querySelector(`.${ID}__contents`);
  const moreFiltersFormElem = document.querySelector('form[id*="FilterForm-template"]');
  const removeClasses = ['absolute', 'top-0', 'right-0', 'translate-x-full', 'w-drawer'];
  moreFiltersFormElem.classList.remove(...removeClasses);
  moreFiltersFormElem.classList.add(`${ID}__moreFiltersForm`);
  newContentsElem.appendChild(moreFiltersFormElem);
};

export default () => {
  setup();
  init();
};
