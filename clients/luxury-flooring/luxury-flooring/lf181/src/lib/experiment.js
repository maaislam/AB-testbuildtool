import setup from './services/setup';
import shared from './shared/shared';
import { addToCart, fetchProductDetails } from './helpers/utils';
import comparisonWrapper from './components/comparisonWrapper';

const { ID } = shared;

const init = () => {
  const targetPoint = document.querySelector('.products.wrapper.products-grid');
  const sliderTitleElem = targetPoint.previousElementSibling;
  targetPoint.classList.add(`${ID}__hidden`);
  sliderTitleElem.classList.add(`${ID}__hidden`);
  const allProducts = targetPoint.querySelectorAll('.product.product-item');

  const collectUrls = [];

  Array.from(allProducts)
    .slice(0, 3)
    .forEach((product) => {
      const productLinkElement = product.querySelector('.product-item-photo');
      const productLink = productLinkElement.getAttribute('href');
      const formElement = product.querySelector('[data-role="tocart-form"]');
      const { productSku } = formElement.dataset;

      collectUrls.push({
        sku: productSku || '',
        link: productLink
      });
    });

  //insert current product info
  const currentProductSkuElement = document.querySelector('#product_addtocart_form');
  const currentProductSku = currentProductSkuElement.dataset.productSku;
  const currentProductLink = window.location.href;

  collectUrls.unshift({
    sku: currentProductSku,
    link: currentProductLink
  });

  const productTypeElement = document.querySelector('.breadcrumbs ul > li:nth-child(2) a');
  const productType = productTypeElement ? productTypeElement.textContent : '';
  //Usage example:
  fetchProductDetails(collectUrls)
    .then((results) => {
      if (results.length === 0) return;

      if (!document.querySelector(`.${ID}__comparisonWrapper`)) {
        document
          .querySelector('.product-section.details')
          .insertAdjacentHTML('afterend', comparisonWrapper(ID, results, productType));
      }
    }) //Now you get results here
    .catch((error) => {
      targetPoint.classList.remove(`${ID}__hidden`);
      sliderTitleElem.classList.remove(`${ID}__hidden`);
      console.error('Error fetching product details:', error);
    });
};

export default () => {
  setup(); //use if needed

  document.body.addEventListener('click', (event) => {
    const { target } = event;
    if (target.closest(`.${ID}__add-to-basket`)) {
      const clickedItem = target.closest(`.${ID}__add-to-basket`);
      clickedItem.classList.add(`${ID}__disabled`);
      clickedItem.textContent = 'Adding to basket';
      const { action, item, key } = clickedItem.dataset;
      const formBody = `product=${item}&item=${item}&form_key=${key}&qty=1`;

      addToCart(action, formBody)
        .then((res) => {
          if (res.backUrl.includes('/checkout/cart/')) {
            clickedItem.textContent = 'Added to basket';

            setTimeout(() => {
              clickedItem.classList.remove(`${ID}__disabled`);
              clickedItem.textContent = 'Add to basket';
              window.location.reload();
            }, 1000);
          }
        })
        .catch((error) => console.error(error, 'Error'));
    }
  });
  init();
};
