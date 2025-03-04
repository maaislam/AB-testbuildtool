import setup from './services/setup';
import shared from './shared/shared';
import { parseHTML, pollerLite } from './helpers/utils';

const { ID, VARIATION } = shared;

const init = () => {
  const targetPoint = document.querySelector('.products.wrapper.products-grid');
  const allProducts = targetPoint.querySelectorAll('.product.product-item');

  const collectUrls = [];

  allProducts.forEach((product) => {
    const productLinkElement = product.querySelector('.product-item-photo');
    const productLink = productLinkElement.getAttribute('href');
    const reviewsElement = product.querySelector('.product-reviews-summary');
    const productTitleElement = product.querySelector('.product-item-link');
    const productPriceElement = product.querySelector('.price-box');
    const plankThiknessElement = product.querySelector('.product-size.thickness .value');
    const plankWidthElement = product.querySelector('.product-size.width .value');
    const plankThikness = plankThiknessElement ? plankThiknessElement.textContent.trim() : '';
    const plankWidth = plankWidthElement ? plankWidthElement.textContent.trim() : '';
    const formElement = product.querySelector('[data-role="tocart-form"]');
    const { productSku } = formElement.dataset;
    const productPhotoElement = product.querySelector('.product-item-photo');

    collectUrls.push({
      sku: productSku || '',
      productPhoto: productPhotoElement || '',
      link: productLink,
      element: product,
      title: productTitleElement || '',
      reviewsElement: reviewsElement || '',
      price: productPriceElement || '',
      plankThikness,
      plankWidth
    });
  });

  console.log(collectUrls, 'collectUrls');
  parseHTML(collectUrls)
    .then((data) => {
      if (data.length === 0) {
        return;
      }

      console.log('data', data);
    })
    .catch(() => {});
};

export default () => {
  setup(); //use if needed
  console.log(ID);

  init();
};
