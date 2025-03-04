import setup from './services/setup';
import shared from './shared/shared';
import { addToCart, fetchProductDetails, pollerLite } from './helpers/utils';
import comparisonWrapper from './components/comparisonWrapper';
import slimilarProdsTag from './components/slimilarProdsTag';

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

      if (!document.querySelector(`.${ID}__slimilarProdsTag`)) {
        document
          .querySelector('.fp-calculator')
          .insertAdjacentHTML('afterend', slimilarProdsTag(ID));
      }

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
      const { sku } = clickedItem.dataset;
      const exitingFreeSampleForm =
        document.querySelector(`.product-item form[data-product-sku="${sku}"]`) ||
        document.querySelector(`#sample_addtocart_form[data-product-sku="${sku}"]`);

      const buttonElem = exitingFreeSampleForm.querySelector('button');

      if (exitingFreeSampleForm && buttonElem) {
        buttonElem.click();
      }
      clickedItem.classList.add(`${ID}__disabled`);
      clickedItem.textContent = 'Adding';
      setTimeout(() => {
        clickedItem.textContent = 'Added to basket';
      }, 1000);

      setTimeout(() => {
        clickedItem.classList.remove(`${ID}__disabled`);
        clickedItem.textContent = 'Order a free sample';
      }, 2000);

      setTimeout(() => {
        pollerLite([() => buttonElem && buttonElem.classList.contains('disabled')], () => {
          clickedItem.classList.add(`${ID}__disabled`);
          clickedItem.textContent = 'Sample limit reached';
        });
      }, 5000);
    } else if (target.closest(`.${ID}__slimilarProdsTag`)) {
      const wrapper = document.querySelector(`.${ID}__comparisonWrapper`);
      wrapper.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'nearest'
      });
    }
  });
  init();
};
