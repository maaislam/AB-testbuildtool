import setup from './services/setup';
import shared from './shared/shared';

import feEcoLabels from './components/feEcoLabels';
import getData from './helpers/getData';

const { ID } = shared;

export default async (pageData) => {
  setup();
  const { targetSelector, skuSelectors, attachPoint, pageType } = pageData;
  const data = await getData();
  const { base_sku } = data;

  document.body.classList.add(`${ID}__${pageType}`);

  document.querySelectorAll(targetSelector).forEach((element) => {
    const skuSelector = skuSelectors.find((item) => element.querySelector(item.selector));
    if (!skuSelector) return;
    const { selector, seperator } = skuSelector;
    const skuElem = element.querySelector(selector);
    const skuText = skuElem.innerText === '' ? skuElem.closest('div').innerText : skuElem.innerText;
    const sku = seperator === '' ? skuText : skuText.split(seperator).at(-1); //get word after last space
    console.log('sku:', sku);
    const skuData = base_sku[sku.trim()];
    console.log('running...', skuData);
    if (!skuData) return;

    if (element.querySelector(`.${ID}__container`)) return;
    console.log(element.querySelector(attachPoint), element);
    element.querySelector(attachPoint).insertAdjacentHTML('afterEnd', feEcoLabels(ID, skuData));
  });
};
