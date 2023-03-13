import setup from './services/setup';
import shared from './shared/shared';

import feEcoLabels from './components/feEcoLabels';
import getData from './helpers/getData';

const { ID } = shared;

export default async (pageData) => {
  const { targetSelector, attachPoint } = pageData;
  setup();
  const data = await getData();
  const { base_sku } = data;

  document.querySelectorAll(targetSelector).forEach((element) => {
    const skuElem =
      element.querySelector('.hpe-featured-product__feature li:first-child') ||
      element.querySelector('.hpe-product-sku');
    const sku = skuElem.innerText.trim().split(' ').at(-1); //get word after last space
    console.log('sku:', sku);
    const skuData = base_sku[sku];
    console.log('running...', base_sku, skuData);
    if (!skuData) return;

    if (element.querySelector(`.${ID}__container`)) return;
    element.querySelector(attachPoint).insertAdjacentHTML('afterEnd', feEcoLabels(ID, skuData));
  });
};
