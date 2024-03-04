/*eslint-disable radix */
/*eslint-disable max-len */
import setup from './services/setup';
import shared from './shared/shared';
import { pollerLite } from './helpers/utils';

const { ID } = shared;

const hourglassIcon = `<svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.83553 7.12982C11.0289 6.04177 12.6428 4.57024 12.7899 1.05472H13.8555V3.05176e-05H0.144531V1.05472H1.21008C1.35718 4.57024 2.97106 6.04177 4.16447 7.12982C4.96502 7.8597 5.41797 8.30643 5.41797 9.00003C5.41797 9.69363 4.96502 10.1404 4.16447 10.8702C2.97106 11.9583 1.35718 13.4298 1.21008 16.9453H0.144531V18H13.8555V16.9453H12.7899C12.6428 13.4298 11.0289 11.9583 9.83553 10.8702C9.03498 10.1404 8.58203 9.69363 8.58203 9.00003C8.58203 8.30643 9.03498 7.8597 9.83553 7.12982ZM6.47266 12.9529C6.30809 12.9868 6.1471 13.0362 5.99182 13.1004L2.76177 14.437C3.28926 13.0958 4.13884 12.3209 4.87505 11.6497C5.69665 10.9006 6.47266 10.1931 6.47266 9.00003V12.9529ZM9.12495 11.6497C9.86116 12.3209 10.7107 13.0958 11.2382 14.437L8.00818 13.1004C7.8529 13.0362 7.69191 12.9868 7.52734 12.9529V9.00003C7.52734 10.1931 8.30335 10.9006 9.12495 11.6497ZM2.74325 3.51566C2.48826 2.85124 2.31216 2.04901 2.26607 1.05472H11.7339C11.6878 2.04901 11.5117 2.85124 11.2567 3.51566H2.74325Z" fill="black"/>
</svg>`;

const templateHTML = (inventoryQuantity) => `<div class="${ID}__container">
  <div class="${ID}__stock-message">
    ${hourglassIcon}
    <span>${inventoryQuantity !== 0 ? 'Just a few left, order now' : 'Product out of stock'}</span>
  </div>
  <div class="${ID}__stock-bar"></div>
</div>`;

const updateStockBar = (inventoryQuantity) => {
  const INVENTORY_THRESHOLD = 20;

  const stockBar = document.querySelector(`.${ID}__stock-bar`);
  const stockBarWidthPercentage = inventoryQuantity >= INVENTORY_THRESHOLD ? 100 : (100 * inventoryQuantity) / INVENTORY_THRESHOLD;

  stockBar.style.setProperty('--stock-bar-percentage', `${stockBarWidthPercentage}%`);
};

export default () => {
  setup();

  pollerLite(['#purchase', '.variant-inventory'], () => {
    const inventoryQuantity = parseInt(document.querySelector('.variant-inventory').textContent, 10);

    const anchorPoint = document.querySelector('.product-page--submit-action');

    if (!document.querySelector(`.${ID}__container`)) {
      anchorPoint.insertAdjacentHTML('beforeend', templateHTML(inventoryQuantity));
    }

    //!document.querySelector(`.${ID}__container`) && document.querySelector('#purchase').insertAdjacentHTML('afterend', templateHTML(inventoryQuantity));
    updateStockBar(inventoryQuantity);
  });
};
