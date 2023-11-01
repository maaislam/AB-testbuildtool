import shared from './shared/shared';
import getNextPage from './helpers/getNextPage';
import { onUrlChange } from './helpers/utils';

const { ID } = shared;

const init = () => {
  const productContainer = document.querySelector('#CollectionAjaxResult');
  let visibleProducts = 0;
  const totalPages = document.querySelectorAll('span.page').length;
  let currentPage = 1;

  const loadMoreButton = `<div class="${ID}__load-more">
    <button class="${ID}__button">Load More</button>
  </div>`;

  productContainer.insertAdjacentHTML('afterend', loadMoreButton);

  const loadMoreButtonElem = document.querySelector(`.${ID}__load-more`);

  const getTotalProductCount = () => {
    const allProductItems = document.querySelectorAll('#CollectionAjaxContent .grid.grid--uniform .grid__item.grid-product');
    const totalProducts = allProductItems.length;
    return totalProducts;
  }

  const showNextProducts = () => {

    const showProducts = () => {
      const nextTwoRows = visibleProducts + 8;

      for (let idx = visibleProducts; idx < nextTwoRows; idx++) {
        if (idx < getTotalProductCount()) {
          const allPrdItems = document.querySelectorAll('#CollectionAjaxContent .grid.grid--uniform .grid__item.grid-product');
          const currentProduct = allPrdItems[idx];
          // const isOutOfStock = currentProduct.querySelector('.grid-product__tag--sold-out');
          // if (isOutOfStock) return;
          currentProduct.classList.add(`${ID}__item-visible`);
        }
      }

      visibleProducts += 8;
    }

    showProducts();

    if (visibleProducts >= getTotalProductCount()) {
      getNextPage(ID, ++currentPage).then(() => showProducts());
      totalPages === currentPage && loadMoreButtonElem.classList.add(`${ID}__hide`);
    }
  }

  showNextProducts();

  loadMoreButtonElem.addEventListener('click', showNextProducts);
}

export default () => {
  init();
  onUrlChange(init);
};
