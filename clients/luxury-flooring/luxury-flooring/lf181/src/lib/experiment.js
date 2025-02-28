import setup from './services/setup';
import gaTracking from './services/gaTracking';
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
    const plankThiknessElement = product.querySelector('.product-size.thickness .value');
    const plankWidthElement = product.querySelector('.product-size.width .value');
    const plankThikness = plankThiknessElement ? plankThiknessElement.textContent.trim() : '';
    const plankWidth = plankWidthElement ? plankWidthElement.textContent.trim() : '';

    collectUrls.push({
      link: productLink,
      element: product,
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
